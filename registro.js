document.getElementById("formRegistro")
.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre =
    document.getElementById("nombre").value;

    let correo =
    document.getElementById("correo").value;

    let telefono =
    document.getElementById("telefono").value;

    let direccion =
    document.getElementById("direccion").value;

    let password =
    document.getElementById("password").value;

    let usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

    let existeCorreo =
    usuarios.find(u => u.correo === correo);

    if(existeCorreo){

        alert("Este correo ya está registrado");
        return;

    }

    let regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!regexPassword.test(password)){

        alert(
        "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula y un número."
        );

        return;

    }

    let nuevoUsuario = {

        id: Date.now(),
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        direccion: direccion,
        password: password,
        rol: "Administrador"

    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    alert("Usuario registrado correctamente");

    window.location.href = "index.html";

});