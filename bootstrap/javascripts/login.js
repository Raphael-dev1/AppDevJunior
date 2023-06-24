let email = "admin@admin.com"
let password = "123"

let cadastrar_senha_e_usuario = function()
{
    let email_cadastrado = document.getElementById("email_cd").value
    let senha_cadastrada = document.getElementById("senha_cd").value

    email = email_cadastrado;
    password = senha_cadastrada;
    console.log(email + password)
    window.location = "../login.html"
    
    return true
}

let validar_usuario = function(email_p,senha_p)
{
    console.log(email + password)
    if(email_p.toLowerCase() === email && senha_p.toLowerCase() === password){
        return true
    }else {
        return false
        
    }
}

let efetuar_login = function(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let error_alert = document.getElementById("erro")
   
    if(validar_usuario(email,senha) === true)
    {
        alert("Usuario validado com sucesso");
        window.location = "./index.html";
        return true;
    } else{
        error_alert.innerHTML =  "<div class='alert alert-danger' role='alert'> Usuário ou senha invalidos  ! ! ! </div>"
        
        return false;
    }

}
