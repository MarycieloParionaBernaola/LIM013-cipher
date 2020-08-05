import cipher from './cipher.js';

// eslint-disable-next-line no-console
console.log(cipher);


//Botón disfrutar
const enjoyButton = document.getElementById("enjoybutton");
enjoyButton.addEventListener('click', () => {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    if(user === "user" && password === "user"){
    document.getElementById("loginscreen").style.display = "none";
    document.getElementById("plusscreen").style.display = "block";
    } else {
        alert ("Oops! usuario y contraseña inválidos :(");
    }
})


//Botón codificar 
const encodeButton = document.getElementById("encodebutton");
encodeButton.addEventListener('click', () => {
    const keyValue = document.getElementById("key").value;
    const enterTextValue = document.getElementById("entertext").value;
    if(keyValue<1 || keyValue>25 || keyValue === 0 || keyValue === null || enterTextValue ==='' || /^\s*$/.test(enterTextValue)) { 
        alert("¡Recuerde ingresar su mensaje y clave del 1 al 25! :)");
    } else {
        document.getElementById("outputtext").innerHTML=cipher.encode(keyValue,enterTextValue);
    }
})


//Botón decodificar
const decodeButton = document.getElementById("decodebutton");
decodeButton.addEventListener('click', () => {
    const keyValue = document.getElementById("key").value;
    const enterTextValue = document.getElementById("entertext").value;
    if(keyValue<1 || keyValue>25 || keyValue === 0 || keyValue === null || enterTextValue ==='' || /^\s*$/.test(enterTextValue)) { 
        alert("¡Recuerde ingresar su mensaje y clave del 1 al 25! :)");
    } else {
        document.getElementById("outputtext").innerHTML=cipher.decode(keyValue,enterTextValue);
    }
})


//Botón Reiniciar
const restoreButton = document.getElementById("restorebutton");
restoreButton.addEventListener('click', () => {
    document.getElementById("entertext").value = ''; 
    document.getElementById("key").value = ''; 
    document.getElementById("outputtext").innerHTML = ''; 
})


//Enviar mensaje codificado por Whatsapp
const sendWhatsapp= document.querySelector("#sendwhatsapp"),
outPutTextFinal = document.querySelector("#outputtext");
sendWhatsapp.addEventListener("click", () => {
let message = outPutTextFinal.value;
if(!message) return alert("Oops! aún no hay nada por enviar :(");
window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(message));
})


//Cambiar imagen login
const switchButton = document.getElementById("switch-label");
switchButton.addEventListener('click', () => {
    const image = document.getElementById("imagelogin");
    if(image.src.match("boy")){
        image.src="images/girlavatar.jpg";
    } else {
        image.src="images/boyavatar.jpg";
    }
})