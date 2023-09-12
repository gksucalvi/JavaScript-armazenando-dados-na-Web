const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse (localStorage.getItem (itens)) [] []

itens.forEach( (elemento) => {
    console.log(elemento.nome, elemento.quantidade)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const quantidade = evento.target.elements['quantidade']
    const nome = evento.target.elements['nome']
    
    criaElemento(nome.value , quantidade.value)

     nome.value = ""
    quantidade.value = ""
})

function criaElemento(nome, quantidade){
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    numeroItem.innerHTML += nome

    lista.appendChild(novoItem)

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)
    localStorage.setItem("itens", JSON.stringfy(itens)) 
}