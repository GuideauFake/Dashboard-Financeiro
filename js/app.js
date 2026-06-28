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

const movimentacoes=[]
 
function renderizarLista(){
    lista.innerHTML = ""
    for(const[ i, movimentacao] of movimentacoes.entries()){
        const item = document.createElement('li')

         item.innerText= (`${i} - ${movimentacao.descricao} - R$${movimentacao.valor} - ${movimentacao.tipo}`)
        lista.appendChild(item)

        }
    }


function atualizarResumo(){
    let totalReceitas = 0
    let totalDespesas = 0
    

    for(const movimentacao of movimentacoes){
        if(movimentacao.tipo === "Saída"){
            totalDespesas += movimentacao.valor 
    } else {
            totalReceitas += movimentacao.valor
     }
 }
    let totalRestante= totalReceitas - totalDespesas
    receita.innerText=`${totalReceitas}`
    despesa.innerText=`${totalDespesas}`
    saldo.innerText=`${totalRestante}`
}

formulario.addEventListener('submit', function(event){
    event.preventDefault()
    const infodescricao = descricao.value //a descrição da entrada/saida
    const infovalor = Number(valor.value) //valor
    const infocategoria = categoria.value //categoria da movimentação
    const infodata = data.value //a data
     
    /*Checa o Tipo da movimentação*/
    let tipoMovimentacao

    if (entrada.checked) {
        tipoMovimentacao = "Entrada"
    } else {
        tipoMovimentacao = "Saída"
    }

    //guarda as movimentações
    const movimentacao = {
        descricao: infodescricao, 
        valor: infovalor, 
        categoria: infocategoria, 
        data: infodata, 
        tipo: tipoMovimentacao}
    
        movimentacoes.push(movimentacao)
   
     if(infodescricao.trim() === ""){
        window.alert(`Preencha o campo de Descrição`)
     }else if(infovalor <= 0) {
        window.alert(`Preencha o campo de Valor`)
     }else if(infocategoria === ""){
        window.alert(`Selecione uma Categoria valida`)
     }else{
   

            renderizarLista()
            atualizarResumo()
            
        
        }
    }
)
