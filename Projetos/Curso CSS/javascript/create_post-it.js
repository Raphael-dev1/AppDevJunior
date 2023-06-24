let idn = 0
let verifie_pos_it = function(){

    var max_w = 100
    var max_h = 50

    let pit_w = document.getElementById("pit_w").value
    let pit_h = document.getElementById("pit_h").value
    let pit_color = document.getElementById("pit_color").value
    if(pit_h <= 0 || pit_w <= 0){
        alert("Post it muito pequeno")
        return
    }

    if(pit_w <= max_w && pit_h <= max_h)
    {
        create_pos_it(pit_w,pit_h,pit_color)
        idn++
       
    }
}

let create_pos_it = function(w,h,c)
{
    let pit_ul = document.getElementById("pos_its_ul")


    let linha = document.createElement('li')
    //let pos_it_div = document.createElement('div')
    //pos_it_div.setAttribute("id",idn)
    
    let pos_it_text = document.createElement('text_area')
    pos_it_text.setAttribute('id',"pt"+idn)
    pos_it_text.setAttribute("cols",w)
    pos_it_text.setAttribute("rows",h)


   // pos_it_div.appendChild(pos_it_text)

    linha.appendChild(pos_it_text)

    alert(pos_it_text.clientHeight)
    pit_ul.insertBefore(linha,pit_ul.children[0])
}