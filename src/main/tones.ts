import type { AlfredListItem } from 'fast-alfred'
import { FastAlfred } from 'fast-alfred'
import { setTimeout } from 'node:timers/promises'
import { TONE_SYSTEM_PROMPT } from '@common/ai-prompts.constant'
import { DEFAULT_DEBOUNCE_TIME } from '@common/defaults.constants'
import { Variables } from '@common/variables.enum'
import type { AvailableModels } from '@models/available-models.enum'
import { AvailableTone } from '@models/tones.enum'
import { callModel } from '@services/llm.service'

;(async () => {
    const alfredClient = new FastAlfred()

    try {
        const denounceTime = alfredClient.env.getEnv(Variables.DEBOUNCE_TIME, {
            defaultValue: DEFAULT_DEBOUNCE_TIME,
            parser: Number,
        })
        const token: string | undefined = alfredClient.env.getEnv(Variables.LLM_TOKEN)
        const model: AvailableModels | undefined = alfredClient.env.getEnv(Variables.SELECTED_MODEL)

        if (!token || !model) {
            throw new Error('Token or model is not defined!')
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

        const system = TONE_SYSTEM_PROMPT(tone as AvailableTone)
        const res = await callModel(token, model, { system, user: query })

        const items: AlfredListItem[] = [
            {
                title: res,
                subtitle: 'Tones',
                arg: res,
            },
        ]

        alfredClient.output({ items })
    } catch (error) {
        alfredClient.error(error)
    }
})()
