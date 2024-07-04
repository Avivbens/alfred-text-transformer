const { author, description, homepage } = require('./package.json')

const README = `
Translate, spell-check, and transform text in Alfred, using AI and other tools.

See the workflow codebase in here:
${homepage}
`.trim()

/**
 * @type {import('fast-alfred').FastAlfredConfig}
 */
module.exports = {
    bundlerOptions: {},
    workflowMetadata: {
        name: 'Alfred Text Transformer',
        createdby: author.name,
        webaddress: homepage,
        description,
        readme: README,
    },
    tabSize: 4,
}
