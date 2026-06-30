const formularioInput = document.querySelector(`#formulario`)
const descricaoInput = document.querySelector(`#desc`)
const valorInput = document.querySelector(`#valor`)
const saidaInput = document.querySelector (`#saida`)
const entradaInput = document.querySelector(`#entrada`)
const categoriaInput = document.querySelector(`#categoria`)
const dataInput = document.querySelector(`#data`)
const listaInput = document.querySelector(`#list`)
const receitaInput = document.querySelector(`#receita`)
const despesaInput = document.querySelector(`#despesas`)
const saldoInput = document.querySelector(`#saldo`)

const movimentacoes=[]

formularioInput.addEventListener('submit', function(event){
    event.preventDefault()
    const descricao = descricaoInput.value //a descrição da entrada/saida
    const valor = Number(valorInput.value) //valor
    const categoria = categoriaInput.value //categoria da movimentação
    const data = dataInput.value //a data
    
     if(descricao.trim() === ""){
        window.alert(`Preencha o campo de Descrição`)
        
     }else if(valor <= 0) {
        window.alert(`Preencha o campo de Valor`)
        
     }else if(categoria === ""){
        window.alert(`Selecione uma Categoria valida`)
       
     }else{   
        
        //guarda as movimentações
        const tipoMovimentacao = obterTipoMovimentacao()
        const movimentacao = criarMovimentacao(descricao, valor, categoria, data, tipoMovimentacao)
        
        movimentacoes.push(movimentacao)

        renderizarLista()
        atualizarResumo()
        limparFormulario()
        
        }
    }
)

function obterTipoMovimentacao(){

        if (entradaInput.checked) {
            return "Entrada"
        } else {
            return "Saída"
        }
}

function criarMovimentacao(descricao, valor, categoria, data, tipoMovimentacao){

    const movimentacao = {
        descricao , 
        valor, 
        categoria, 
        data, 
        tipo: tipoMovimentacao}

        return movimentacao
}

function renderizarLista(){
    listaInput.innerHTML = ""
    for(const[i, movimentacao] of movimentacoes.entries()){
        const item = document.createElement('li')
        const excluir = document.createElement('button')
             
            
            excluir.innerText=(`Excluir`)
            excluir.dataset.indice = i

            item.innerText= (` ${movimentacao.descricao} - R$${movimentacao.valor} - ${movimentacao.tipo}`)
        
        item.appendChild(excluir)
        listaInput.appendChild(item)

        excluir.addEventListener(`click`, function(){
           
            const indice= Number(excluir.dataset.indice)
            movimentacoes.splice( indice, 1)

            renderizarLista()
            atualizarResumo()
        })
        
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
    receitaInput.innerText=`${totalReceitas.toLocaleString("pt-BR",{style: "currency", currency:"BRL"})}`
    despesaInput.innerText=`${totalDespesas.toLocaleString("pt-BR",{style: "currency", currency:"BRL"})}`
    saldoInput.innerText=`${totalRestante.toLocaleString("pt-BR",{style: "currency", currency:"BRL"})}`
}

function limparFormulario(){

        descricaoInput.value = "" //limpa os campos
        valorInput.value = ""
        categoriaInput.value = ""
        dataInput.value = ""
        saidaInput.checked = true
        descricaoInput.focus()
}