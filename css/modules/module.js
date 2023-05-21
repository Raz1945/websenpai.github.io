console.log("Entramos a la Matrix")
// Constantes
// toggle
const toggleMenu = document.querySelector("#navMenu");
const toggleBtn = document.querySelector(".navbar__mobile-btn");
// logIn
const logIn = document.querySelector("#logInBtn");
const loginSingUp = document.querySelector("#loginSingUp");
const logInModal = document.querySelector("#logInModal");
const exitLogInModal = document.querySelector("#exitLogInModal");
// SingUp
const singInNav = document.querySelector("#singInNav");
const singInHero = document.querySelector("#singInHero");
const singInModal = document.querySelector("#singInModal");
const singUp = document.querySelector("#singUp");
const exitSingUp = document.querySelector("#exitSingUp");
// form
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
// Up
const upBtn = document.querySelector('#upBtn');


// Muestra u Oculta la barra de Navegacion al estar en Mobile
toggleBtn.addEventListener('click', () =>{
    const visibility = toggleMenu.getAttribute('data-visible')

    if (visibility === "false"){
        toggleMenu.setAttribute("data-visible", true);
        toggleBtn.setAttribute("aria-expanded", true);
        toggleBtn.firstElementChild.classList.remove("hidden")
        toggleBtn.lastElementChild.classList.add("hidden")
    } else{
        toggleMenu.setAttribute("data-visible", false);
        toggleBtn.setAttribute("aria-expanded", false);
        toggleBtn.firstElementChild.classList.add("hidden")
        toggleBtn.lastElementChild.classList.remove("hidden")
    }
});

// Muestra el modal para Iniciar sesión
const toLogIn = () => {
    logInModal.classList.remove('hidden');
};
logIn.addEventListener('click', toLogIn);

// Para cerrar el modal de Inicio de sesión
const toCloseLogIn = () =>{
    logInModal.classList.add('hidden');
};
exitLogInModal.addEventListener('click', toCloseLogIn);

// Muestra el modal para Registrarse
const toSingUp = () => {
    singUp.classList.remove('hidden');
};
singInNav.addEventListener('click', toSingUp);
singInHero.addEventListener('click', toSingUp);
singInModal.addEventListener('click', toSingUp);

// Para cerrar el modal de Registrarse 
const toCloseSingUp = () => {
    singUp.classList.add('hidden');
};
exitSingUp.addEventListener('click', toCloseSingUp);


// -Para cuando los campos del formulario se encuentren vacios.
const validateEmptyField = (e) => {
    const field = e.target; 
    const fieldValue = e.target.value;

    if (fieldValue.length === 0) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "No puede estar vacio";
    } else  {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";       
    }
};
emailInput.addEventListener("keydown", validateEmptyField)
passwordInput.addEventListener("keydown", validateEmptyField)

// Funciones para que el boton suba.
// Toma la referencia en el eje Y 
const toggleButtonVisibility = () => {
    if (window.scrollY > 400) {
        upBtn.classList.remove('hidden');
    } else {
        upBtn.classList.add('hidden');
    }
};
window.addEventListener('scroll', toggleButtonVisibility);
// Dirige la vista del usuario al inicio 
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
upBtn.addEventListener('click', scrollToTop);