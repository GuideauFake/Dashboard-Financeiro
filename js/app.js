const formulario = document.querySelector(`#formulario`)
const descricao = document.querySelector(`#desc`)
const valor = document.querySelector(`#valor`)
const saida = document.querySelector (`#saida`)
const entrada = document.querySelector(`#entrada`)
const categoria = document.querySelector(`#categoria`)
const data = document.querySelector(`#data`)
const lista = document.querySelector(`#list`)
const receita = document.querySelector(`#receita`)
const despesa = document.querySelector(`#despesas`)
const saldo = document.querySelector(`#saldo`)



formulario.addEventListener('submit', function(event){
    event.preventDefault()
    const infodescricao = descricao.value
    const infovalor = valor.value
    const infocategoria = categoria.value
    const infodata = data.value

    console.log(infodescricao)
    console.log(infovalor)
    console.log(infocategoria)
    console.log(infodata)

})


