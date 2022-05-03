const nombre = document.getElementById("user_name");
const email = document.getElementById("email");
const text = document.getElementById("msg");
const form = document.getElementById("form");


form.addEventListener("submit", e=>{

    e.preventDefault();
    let approve = false;

    document.getElementById("errorNombre").innerHTML="";
    document.getElementById("errorEmail").innerHTML="";
    document.getElementById("errorMensaje").innerHTML="";
    document.getElementById("formSend").style.display="none";
    

    if(nombre.value==""){
        document.getElementById("errorNombre").innerHTML="Tenes que ingresar Nombre y Apellido.";
        document.getElementById("errorNombre").setAttribute("style","color:red;");
        approve = true;
    }

    if(email.value==""){
        document.getElementById("errorEmail").innerHTML="Tenes que ingresar un email";
        document.getElementById("errorEmail").setAttribute("style","color:red;");
        approve = true;
    }

    if(text.value==""){
        document.getElementById("errorMensaje").innerHTML="Tenes que ingresar un texto";
        document.getElementById("errorMensaje").setAttribute("style","color:red;");
        approve = true;
    }

    if(!approve){
        form.reset();
        addedAnimation()
    }
})

function addedAnimation(){
    $("#formSend").css("display", "block");
    $("#formSend").slideDown("slow", () =>{
        $("#formSend").delay(1000).slideUp("slow");
    });
}