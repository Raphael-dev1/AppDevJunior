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

let excluir_rgs = function(id){
    let tr = document.getElementById(id)
    
    if(confirm("Deseja excluir ?" + " #" + id) == true){
        tr.remove()
    }
}

let carregar_grid_contas = function(){

   
    let tabela = document.getElementById("lista_contas")
    if( tabela == null){
        return
    }

    dados.forEach(e =>{
          
          let linha = tabela.insertRow(-1);
          linha.setAttribute("id",e.id)
          linha.insertCell(0).innerHTML = e.id
          linha.insertCell(1).innerHTML = e.categoria
          linha.insertCell(2).innerHTML = e.descricao
          linha.insertCell(3).innerHTML = e.dataVencto
          linha.insertCell(4).innerHTML = e.dataPagto
          linha.insertCell(5).innerHTML = e.valor


          let acoes = linha.insertCell(6)
          

          let btn_baixar = document.createElement("button")
          btn_baixar.type = "button"
          btn_baixar.className = "btn btn-warning m-1"
        
          btn_baixar.innerHTML = " Baixar "

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
          btn_excluir.onclick = function(){
            excluir_rgs(e.id)
          }

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
    dados.forEach(e =>{
          
        let linha = tabela.insertRow(-1);
        linha.setAttribute("id",e.id)
        linha.setAttribute("class",'bg-light text-black ')
        linha.insertCell(0).innerHTML = e.id
        linha.insertCell(1).innerHTML = e.categoria
        linha.insertCell(2).innerHTML = e.descricao
        linha.insertCell(3).innerHTML = e.dataVencto
        linha.insertCell(4).innerHTML = e.dataPagto
        linha.insertCell(5).innerHTML = e.valor


        let acoes = linha.insertCell(6)


        let btn_baixar = document.createElement("button")
        btn_baixar.type = "button"
        btn_baixar.className = "btn btn-warning m-1"
      
        btn_baixar.innerHTML = " Baixar "

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
        btn_excluir.onclick = function(){
          excluir_rgs(e.id)
        }

        let icone_excluir = document.createElement('i')
        icone_excluir.className = "fa fa-trash"

        btn_excluir.insertBefore(icone_excluir,btn_excluir.firstChild)

        acoes.appendChild(btn_excluir)
        
      }
  )

}