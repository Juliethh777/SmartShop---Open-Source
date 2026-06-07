let intentos =
Number(localStorage.getItem("intentosLogin")) || 0;

document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let correo =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    let usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuarioEncontrado =
    usuarios.find(u =>

        u.correo === correo &&
        u.password === password

    );

    if(usuarioEncontrado){

        localStorage.removeItem("intentosLogin");

        localStorage.setItem(
            "usuarioActivo",
            JSON.stringify(usuarioEncontrado)
        );

        alert(
            "Bienvenido " +
            usuarioEncontrado.nombre
        );

        window.location.href =
        "dashboard.html";

    }else{

        intentos++;

        localStorage.setItem(
            "intentosLogin",
            intentos
        );

        let restantes =
        3 - intentos;

        if(intentos >= 3){

            alert(
                "Acceso bloqueado. Se agotaron los 3 intentos."
            );

            localStorage.removeItem("intentosLogin");

            return;
        }

        alert(
            "Correo o contraseña incorrectos.\n\nIntentos restantes: "
            + restantes
        );

    }

});