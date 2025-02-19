const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];
const langCode = franc(input)
if (langCode === 'und') {
    console.log("Couldn't Figure Out!")
}
else {
    const language = langs.where('3', langCode)
    console.log(language.name.rainbow)

}