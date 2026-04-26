import { JSDOM } from "jsdom"

const html : string = await Bun.file("index.html").text()
const dom : JSDOM = new JSDOM(html)
const doc: Document = dom.window.document
doc.body.innerHTML = ""

const form = createForm(doc, "/guardar", "POST")
form.appendChild(createSpan(doc, "titulo", "Super formulario"))
form.appendChild(createLabel(doc, "nombre"))
form.appendChild(createInput(doc, "text", "Ingresa tu nombre", "nombre"))
form.appendChild(createTextarea(doc, 3, 1, "Escribe un parrafo"))

doc.body.appendChild(form)
await Bun.write("index.html", dom.serialize())


function createSpan(
    document: Document,
    className: string,
    text: string
):HTMLSpanElement {
    const el = document.createElement('span')
    el.classList.add(className)
    el.textContent = text

    return el
}

function createInput(
    document: Document,
    type: string,
    placeholder: string,
    name: string
):HTMLInputElement {
    const el = document.createElement('input')
    el.type = type
    el.placeholder = placeholder
    el.name = name

    return el
}

function createTextarea(
    document: Document,
    rows: number,
    cols: number,
    placeholder: string,
):HTMLTextAreaElement {
    const el = document.createElement('textarea')
    el.rows = rows
    el.cols = cols
    el.placeholder = placeholder

    return el
}

function createLabel(
    document: Document,
    forAttr: string,
):HTMLLabelElement {
    const el = document.createElement('label')
    el.htmlFor = forAttr

    return el
}

function createForm(
    document: Document,
    action: string,
    method: string,
):HTMLFormElement {
    const el = document.createElement('form')
    el.action = action
    el.method = method

    return el
}
