function createButton(doc:Document, tipo:string):HTMLElement {
    const el = doc.createElement(tipo)
    el.classList.add('btn')
    el.textContent = 'Boton ' + tipo
    el.setAttribute("onclick", `console.log('Hiciste click en un <${tipo}>')`)
    el.addEventListener("click", () => console.log("Hiciste click en un <" + tipo + ">"))   //El evento pero como sale como html pues ahi no sale
    return el
}

export const createDivButton = (doc:Document) => createButton(doc, "div")
export const createSpanButton = (doc:Document) => createButton(doc, "span")
export const createImgButton = (doc:Document) => createButton(doc, "img")
export const createPButton = (doc:Document) => createButton(doc, "p")
export const createAButton = (doc:Document) => createButton(doc, "a")
export const createArticleButton = (doc:Document) => createButton(doc, "article")
export const createHeaderButton = (doc:Document, nivel:1|2|3|4|5|6) => createButton(doc, "h" + nivel)
export const createLiButton = (doc:Document) => createButton(doc, "li")
export const createSectionButton = (doc:Document) => createButton(doc, "section")