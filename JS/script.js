function login() {

    let usuario = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(usuario === "" || password === "") {

        alert("Por favor complete todos los campos");

    } else {

        alert("Bienvenido a SmartShop");

        window.location.href = "dashboard.html";
    }
}