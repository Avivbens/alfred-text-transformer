const { author, description, homepage } = require('./package.json')

const README = `
#### Thank you for using Text Transformer! ✨

This workflow has been created using Fast Alfred, a user-friendly workflow builder that simplifies the process of creating Alfred workflows.

## Features

- Grammar: Correct grammar mistakes
- Beautify: Enhance the text for better readability and engagement
- Spell Check: Identify spelling errors without grammar checking
- Translate: Translate text into any language
- Tones: Change the tone of the text be giving input
- Summarize: Summarize the text to be more concise
- Explain: Explain the text in a more understandable way

## Usage

Use your customized Alfred keyword to activate each command.

### Translate

Enter the language code (e.g., "en" for English) followed by the text to be translated, like "en Hello, how are you?"

If the language code is missing, the default language will be English.

To view the workflow codebase, click here:
${homepage}
`.trim()

/**
 * @type {import('fast-alfred').FastAlfredConfig}
 */
module.exports = {
    bundlerOptions: {
        rootAssets: ['List Filter Images'],
    },
    workflowMetadata: {
        name: 'Text Transformer',
        createdby: author.name,
        webaddress: homepage,
        description,
        readme: README,
    },
    tabSize: 4,
}
