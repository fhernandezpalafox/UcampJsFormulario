function registrar() {
    const name = document.getElementById("nombre").value;
    const email = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!emailRegex.test(email)) {
      alert("Email incorrecto");
      return false;
    }

    const resgistry = {
      name: name,
      email: email,
      password: password
    };

    console.log(resgistry);

    if (resgistry.email == "felipe.hernandez.palafox@gmail.com"){
        console.log("Bienvenido Couch");
    }else {
        console.log("Bienvenido Ucamper")
    }

    document.getElementById("informacion").innerHTML = name;
   
    
    var formulario = document.getElementById("frmprincipal");

    formulario.reset();

    document.getElementById("nombre").focus();
  


    document.getElementById("titulo").style.display = 'none';
}


function enterCajaTexto(e) {
    
    if (e.keyCode == 13) {
        registrar();
    }

}

function funcionColor() {
    var name = document.getElementById("nombre").value;
    
    document.getElementById("nombre").style.color = name;
}