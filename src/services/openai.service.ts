import OpenAI from 'openai'

export async function callOpenAI(token: string, systemPrompt: string, userPrompt: string): Promise<string> {
    const openai = new OpenAI({
        apiKey: token,
    })

    const chatCompletion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: systemPrompt.trim(),
            },
            { role: 'user', content: userPrompt.trim() },
        ],
        model: 'gpt-3.5-turbo',
    })

    const res = chatCompletion.choices[0].message.content

    if (!res) {
        throw new Error('No response from OpenAI')
    }

    return res
}
