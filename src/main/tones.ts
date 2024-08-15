import { FastAlfred } from 'fast-alfred'
import { setTimeout } from 'node:timers/promises'
import { TONE_SYSTEM_PROMPT } from '@common/ai-prompts.constant'
import { Variables } from '@common/variables'
import { AvailableTone } from '@models/tones.enum'
import { callOpenAI } from '@services/openai.service'

;(async () => {
    const alfredClient = new FastAlfred()

    try {
        const denounceTime = alfredClient.env.getEnv(Variables.DEBOUNCE_TIME, { defaultValue: 700, parser: Number })
        const token: string | undefined = alfredClient.env.getEnv(Variables.OPEN_AI_TOKEN)

        if (!token) {
            throw new Error('OpenAI token is not defined')
        }

        if (!alfredClient.input) {
            throw new Error('Input is required')
        }

        const [tone, ...rest] = alfredClient.input.split(' ')
        const query = rest.join(' ').trim()

        if (!query) {
            return
        }

        if (!Object.values(AvailableTone).includes(tone as AvailableTone)) {
            throw new Error(`Not allowed tone! Please use one of: ${Object.values(AvailableTone).join(', ')}`)
        }

        /**
         * Debounce time to wait for the user to finish typing
         */
        await setTimeout(denounceTime)

        const systemPrompt = TONE_SYSTEM_PROMPT(tone as AvailableTone)
        const res = await callOpenAI(token, systemPrompt, query)

        const items = res.map((option) => ({
            title: option,
            subtitle: 'Tones',
            arg: option,
        }))

        alfredClient.output({ items })
    } catch (error) {
        alfredClient.error(error)
    }
})()
