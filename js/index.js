function novoElementoComClass(tagName, className, id){
    const elemento = document.createElement(tagName)
    elemento.className = className
    elemento.id = id
    return elemento
}

function CreateAndAppend(tag, whichClass, whichId, insideOf) {
    const areaDeInsercao = document.querySelector(insideOf)
    this.elemento = novoElementoComClass(tag, whichClass, whichId)
    areaDeInsercao.appendChild(this.elemento)
}

function FirstSection(srcDaFoto) {
    this.avatar = novoElementoComClass('img', 'avatar')
    this.avatar.src = srcDaFoto
}

function ElementsLinks(quantidadeDeBoxes) {
    if(quantidadeDeBoxes % 2 == 0){
    this.coluna1 = new CreateAndAppend('div', 'coluna1', "null", '.conteudo' )
    this.coluna2 = new CreateAndAppend('div', 'coluna2', "null", '.conteudo' )
    this.elementos = []
        for(let i = 1; i <= quantidadeDeBoxes; i++){
            if(i % 2 == 0){
                this.elementos[i] = new CreateAndAppend('a', 'elementos', `box${i}`, '.coluna2')


            } else {
                this.elementos[i] = new CreateAndAppend('a', 'elementos', `box${i}`, '.coluna1')
            }
        }
    } else {
        console.log("Necessário o número de boxes ser par")
    }
}

function DentroDoBox([...params], idBox, href){
    this.areaDeInsercao = document.querySelector(`#${idBox}`)
    this.elementos = params
    this.elementos.forEach( objetos => {
        for(let i in objetos){
            let conteudo = objetos[i]
            let tag = document.createElement(`${i}`)
            tag.innerHTML = conteudo
            this.areaDeInsercao.appendChild(tag)        
        }
    })
    this.areaDeInsercao.href = href
    this.areaDeInsercao.target = "_blank"
}

function Iniciar(srcImg, onde, quantos, arrayDeTags, idDoBox, url) {
    const firstsection = new FirstSection(srcImg)
    this.areaDeInsercao = document.querySelector(onde)
    this.areaDeInsercao.appendChild(firstsection.avatar)
    const boxes = new ElementsLinks(quantos)
    const tagsDoBox = new DentroDoBox(arrayDeTags, idDoBox, url)
}

const start = new Iniciar('../img/foto1.jpg', 
'[div-da-img]', 
4, 
[{h1: "Novo Título!"}, {p: "Novo Texto!"}], 
"box1", 
"https://www.youtube.com/watch?v=5qap5aO4i9A" )


