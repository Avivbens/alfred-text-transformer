import { FastAlfred } from 'fast-alfred'
import { setTimeout } from 'node:timers/promises'
import { EXPLAIN_SYSTEM_PROMPT } from '@common/ai-prompts.constant'
import { Variables } from '@common/variables'
import { callOpenAI } from '@services/openai.service'

;(async () => {
    const alfredClient = new FastAlfred()

    try {
        const denounceTime = alfredClient.env.getEnv(Variables.DEBOUNCE_TIME, { defaultValue: 700, parser: Number })
        const token: string | undefined = alfredClient.env.getEnv(Variables.OPEN_AI_TOKEN)

        if (!token) {
            throw new Error('OpenAI token is not defined')
        }

        /**
         * Debounce time to wait for the user to finish typing
         */
        await setTimeout(denounceTime)

        if (!alfredClient.input) {
            throw new Error('Input is required')
        }

        const res = await callOpenAI(token, EXPLAIN_SYSTEM_PROMPT, alfredClient.input)
        const items = res.map((option) => ({
            title: option,
            subtitle: 'Explain',
            arg: option,
        }))

        alfredClient.output({ items })
    } catch (error) {
        alfredClient.error(error)
    }
})()
