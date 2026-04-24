/// <reference types="bun" />
import { JSDOM } from "jsdom"

const html : string = await Bun.file("index.html").text()
const dom : JSDOM = new JSDOM(html)
const document: Document = dom.window.document

// borrar
document.body.innerHTML = ""
const title : HTMLHeadingElement = document.createElement("h1")

//agregando titulo
title.textContent = "Laboratorio DOM con Bun y Typescript"
document.body.appendChild(title)

//agregando parrafo
const paragraph: HTMLParagraphElement = document.createElement("p")
paragraph.textContent = "Esta pagina fue generada mendiante manipulacion del DOM usando typescript"
document.body.appendChild(paragraph)

//agregando una lista dinamica
const list: HTMLUListElement = document.createElement("ul")
const technologies: string[] =[
    "HTML", "Typescript", "Bun", "DOM"
]
for (const tech of technologies) {
    const item:HTMLLIElement = document.createElement("li")
    item.textContent = tech
    list.appendChild(item)
    console.log(tech, "agregado")
}
document.body.appendChild(list)

//agregando boton
const buttonhi : HTMLButtonElement = document.createElement("button")
buttonhi.textContent = "Haz click"
buttonhi.id = " mainButton"
buttonhi.classList.add('primary')
buttonhi.setAttribute("onclick", "alert('en la feria de cepillin')")
buttonhi.addEventListener("click", () => {
    console.log("en la feria de cepillin")
})
document.body.appendChild(buttonhi)

function createButton(text:string, id:string, css_class:string){
    const button = document.createElement("button")
    button.textContent = text
    button.id = id
    button.classList.add(css_class)
    return button
}

await Bun.write("index.html", dom.serialize())
console.log(document.body.innerHTML == "" ? "Html vacio" : "Html encontrado")