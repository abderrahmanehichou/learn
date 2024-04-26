document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email= document.getElementById('email').value;

    // Verificar si el usuario existe en el localStorage
    var user = JSON.parse(localStorage.getItem(username));


    if (user && user.password === password){
        alert("Inicio de sesión exitoso");
        window.location.href = "index.html"; // Redirigir a la página inicial
    } else {
        document.getElementById("error").innerText = "Nombre de usuario o contraseña incorrectos";
    }
});