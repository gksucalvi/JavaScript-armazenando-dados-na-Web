const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

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

    localStorage.setItem("quantidade")
    localStorage.setItem("nome")
}