import { JSDOM } from 'jsdom';
import { createAButton, createArticleButton, createDivButton, createHeaderButton, createImgButton, createLiButton, createPButton, createSectionButton, createSpanButton } from './buttons';

const dom = new JSDOM(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="styles.css" rel="stylesheet">
    </head>
    <body>
        <div id="app"></div>
    </body>
    </html>
`)

const doc = dom.window.document
const app = doc.getElementById("app")
if (app) {
    app.appendChild(createDivButton(doc))
    app.appendChild(createSpanButton(doc))
    app.appendChild(createImgButton(doc))
    app.appendChild(createPButton(doc))
    app.appendChild(createAButton(doc))
    app.appendChild(createArticleButton(doc))
    app.appendChild(createHeaderButton(doc, 1))
    app.appendChild(createLiButton(doc))
    app.appendChild(createSectionButton(doc))
}

await Bun.write("./index.html", dom.serialize())