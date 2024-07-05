<div align="center">

# Alfred Text Transformer

<br>

[![Latest Version Downloads](https://img.shields.io/github/downloads/avivbens/alfred-text-transformer/latest/total?label=Latest%20Version%20Downloads&color=green)](https://github.com/avivbens/alfred-text-transformer/releases/latest)
[![Latest Version](https://img.shields.io/github/v/release/avivbens/alfred-text-transformer?label=Latest%20Version&color=green)](https://github.com/avivbens/alfred-text-transformer/releases/latest)
[![Total Downloads](https://img.shields.io/github/downloads/avivbens/alfred-text-transformer/total?label=Total%20Downloads&color=blue)](https://github.com/avivbens/alfred-text-transformer/releases)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/kcao7snkgx)

</div>

## Description

Translate, spell-check, and transform text in Alfred, using AI and other tools.

## Features 🥷

-   Grammar: Correct grammar mistakes
-   Beautify: Enhance the text for better readability and engagement
-   Spell Check: Identify spelling errors without grammar checking
-   Translate: Translate text into any language

### Install via GitHub Releases :sparkles:

```bash
repo_name="Avivbens/alfred-text-transformer"
download_url=$(curl -s "https://api.github.com/repos/$repo_name/releases/latest" | grep "browser_download_url.*alfredworkflow" | cut -d '"' -f 4)

curl -fsSLk $download_url -o ~/Desktop/alfred-text-transformer.alfredworkflow
open ~/Desktop/alfred-text-transformer.alfredworkflow
```

## Usage

Use your customized Alfred keyword to activate each command.

You can hold down the `cmd` key to preview the output before copying it.

### Translate 🈯

Enter the language code (e.g., "en" for English) followed by the text to be translated, like "en Hello, how are you?"

If the language code is missing, the default language will be English.
