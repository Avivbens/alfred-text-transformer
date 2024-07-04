import { FastAlfred } from 'fast-alfred'
import { setTimeout } from 'node:timers/promises'
import { SPELL_CHECK_SYSTEM_PROMPT } from '@common/ai-prompts.constant'
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

        const res = await callOpenAI(token, SPELL_CHECK_SYSTEM_PROMPT, alfredClient.input)

        alfredClient.output({
            items: [
                {
                    title: res,
                    subtitle: 'Spell Check',
                    arg: res,
                },
            ],
        })
    } catch (error) {
        alfredClient.error(error)
    }
})()
