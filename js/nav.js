const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const botonesBurguer1 = document.getElementById("Ham-todos");
const botonesBurguer2 = document.getElementById("Ham-medicamentos");
const botonesBurguer3 = document.getElementById("Ham-cuidado");
const botonesBurguer4 = document.getElementById("Ham-herbolario");
const botonesBurguer5 = document.getElementById("Ham-ortopedia");
const botonesBurguer6 = document.getElementById("Ham-contacto");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

botonesBurguer1.addEventListener("click", () => {

    nav.classList.remove("visible");
})

botonesBurguer2.addEventListener("click", () => {

    nav.classList.remove("visible");
})

botonesBurguer3.addEventListener("click", () => {

    nav.classList.remove("visible");
})

botonesBurguer4.addEventListener("click", () => {

    nav.classList.remove("visible");
})

botonesBurguer5.addEventListener("click", () => {

    nav.classList.remove("visible");
})

botonesBurguer6.addEventListener("click", () => {
    window.location.href = "/contacto.html";
    nav.classList.remove("visible");

})