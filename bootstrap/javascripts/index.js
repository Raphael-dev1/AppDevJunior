let dados = [
    {
        id: 3, 
        categoria:"Moradia",
        descricao:"Teste",
        dataVencto:"17/02/2023",
        dataPagto:"29/02/2023",
        valor:"500,0"
    },

    {
        id: 4, 
        categoria:"loja",
        descricao:"Teste",
        dataVencto:"17/02/2023",
        dataPagto:"",
        valor:"1.350,0"
    },
    
   
]
let idn = 5



let carregar_grid_contas = function(){

   
    let tabela = document.getElementById("lista_contas")
    if( tabela == null){
        return
    }

    dados.forEach(e =>{
          
          let linha = tabela.insertRow(-1);
          linha.setAttribute("class","text-bg-light ")
          linha.setAttribute("id",e.id)
          linha.insertCell(0).innerHTML = e.id
          linha.insertCell(1).innerHTML = e.categoria
          linha.insertCell(2).innerHTML = e.descricao
          linha.insertCell(3).innerHTML = e.dataVencto
          let celulaData = linha.insertCell(4)

          celulaData.innerHTML = e.dataPagto
          celulaData.setAttribute("id","Dt_Baixa_Id" +e.id)
          linha.insertCell(5).innerHTML = e.valor


          let acoes = linha.insertCell(6)
          

          let btn_baixar = document.createElement("button")
          btn_baixar.type = "button"
          btn_baixar.className = "btn btn-warning m-1"
        
          btn_baixar.innerHTML = " Baixar "
          btn_baixar.addEventListener("click",function(){
            Baixar_Contas(e.id)
          },false)

          let icone_baixar = document.createElement('i')
          icone_baixar.className = "fa fa-money"

          btn_baixar.insertBefore(icone_baixar,btn_baixar.firstChild)

          acoes.appendChild(btn_baixar)

          let btn_editar = document.createElement("button")
          btn_editar.type = "button"
          btn_editar.className = "btn btn-primary m-1"
          btn_editar.innerText = " editar "

          let icone_editar = document.createElement('i')
          icone_editar.className = "fa fa-edit"

          btn_editar.insertBefore(icone_editar,btn_editar.firstChild)

          acoes.appendChild(btn_editar)

          let btn_excluir = document.createElement("button")
          btn_excluir.type = "button"
          btn_excluir.className = "btn btn-danger m-1"
          btn_excluir.innerText = " Excluir "
          btn_excluir.addEventListener("click",function(){
            Confirmar_Exclusao(e.id)
          },false)

          let icone_excluir = document.createElement('i')
          icone_excluir.className = "fa fa-trash"

          btn_excluir.insertBefore(icone_excluir,btn_excluir.firstChild)

          acoes.appendChild(btn_excluir)
          
        }
    )
}

window.onload = function(){
    carregar_grid_contas()
    
}

let Baixar_Contas = function(id){
    const modal = new bootstrap.Modal('#ModalIndex',{
        focus: true,keyboard: true
    })
    
    let msg = document.getElementById("mensagem")
    msg.innerHTML = "Deseja Confirmar o Pagamento desta conta"
    let Confirmar_Baixar = function(){
        let celula = document.getElementById("Dt_Baixa_Id" +id)
        let data = new Date()
        
        celula.innerHTML = data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear()
        modal.hide()
    }
    let confirm_btn = document.getElementById("confirm_btn")
    confirm_btn.onclick = Confirmar_Baixar
   
    modal.show()

}

let cadastrar_extrato =  function(){

    let new_cat = document.getElementById("categoria").value
    let new_des = document.getElementById("descricao").value
    let new_dataVencto = document.getElementById("vencimento").value
    let new_dataPagto = document.getElementById("pagamento").value
    let new_valor = document.getElementById("valor").value

    let new_item = {
        id: idn,
        categoria:new_cat,
        descricao:new_des,
        dataVencto:new_dataVencto,
        dataPagto:new_dataPagto,
        valor:new_valor
    }
    dados.push(new_item)
    console.log(dados)
    idn++
}

let refresh = function(){
    var tabela =  document.getElementById("lista_contas")

     for(var i = tabela.rows.length - 1; i> 0;i--){
        tabela.deleteRow(i)
    }
    carregar_grid_contas()
  

}

let Confirmar_Exclusao = function(id){
    const modal = new bootstrap.Modal('#ModalIndex',{
        focus: true,keyboard: true
    })
    
    let msg = document.getElementById("mensagem")
    msg.innerHTML = "Deseja Excluir a linha #"+id

    let Excluir = function(){
        
        let linha = document.getElementById(id)
        linha.remove()
        modal.hide()
    }

    let confirm_btn = document.getElementById("confirm_btn")
    confirm_btn.onclick = Excluir
    modal.show()
}