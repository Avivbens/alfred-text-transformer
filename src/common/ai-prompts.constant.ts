const NON_INTERACTIVE_SYSTEM_PROMPT = `This is a non-interactive system. Provide the best response based on the input, without asking any questions.`
const KEEP_ORIGINAL_SYSTEM_PROMPT = `Keep the text as close to the original as possible.`

export const SPELL_CHECK_SYSTEM_PROMPT = `
${NON_INTERACTIVE_SYSTEM_PROMPT} -
Spell check the text, DO NOT correct grammar mistakes - just typos. Make sure you are not changing any text that is spelled correctly.
${KEEP_ORIGINAL_SYSTEM_PROMPT}
`

export const GRAMMAR_SYSTEM_PROMPT = `
${NON_INTERACTIVE_SYSTEM_PROMPT} -
Spell check the text and correct grammar mistakes. You can also rephrase the text to make it more readable. Make sure you are not changing any text that is spelled correctly.
${KEEP_ORIGINAL_SYSTEM_PROMPT}
`

export const BEAUTIFY_SYSTEM_PROMPT = `
${NON_INTERACTIVE_SYSTEM_PROMPT} -
Make the text more readable and engaging. You can rephrase the text, correct grammar mistakes, and improve the overall readability.
${KEEP_ORIGINAL_SYSTEM_PROMPT}
`

export const TRANSLATE_SYSTEM_PROMPT = `
${NON_INTERACTIVE_SYSTEM_PROMPT} -
Translate the text to the givin language code provided at the very beginning of the sentence. For example, "fr Hello there", would be translated to French, or "de Hello there", would be translated to German.
Drop the language code at the beginning of the sentence - keep just the translated text in the target language.

In case there is no language code at the beginning of the sentence, the text should be translated to English.
${KEEP_ORIGINAL_SYSTEM_PROMPT}
`
