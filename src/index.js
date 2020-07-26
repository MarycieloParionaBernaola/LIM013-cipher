
import cipher from './cipher.js';

// eslint-disable-next-line no-console
console.log(cipher);


const enjoyButton = document.getElementById("enjoybutton");
enjoyButton.addEventListener('click', () => {
    document.getElementById("firstscreen").style.display = "none";
    document.getElementById("secondscreen").style.display = "block";
})

const encodeButton = document.getElementById("encodebutton");
encodeButton.addEventListener('click', () => {
    const keyValue = document.getElementById("key").value;
    const enterTextValue = document.getElementById("entertext").value;
    if(parseInt(keyValue)<1){ 
        alert("¡Ingrese una clave con valor positivo :)!");
    } else {
    document.getElementById("outputtext").innerHTML=cipher.encode(keyValue,enterTextValue);
    }
})

const decodeButton = document.getElementById("decodebutton");
decodeButton.addEventListener('click', () => {
    const keyValue = document.getElementById("key").value;
    const enterTextValue = document.getElementById("entertext").value;
    if(parseInt(keyValue)<1){ 
        alert("¡Ingrese una clave con valor positivo :)!");
    } else {
    document.getElementById("outputtext").innerHTML=cipher.decode(keyValue,enterTextValue);
    }
})

const cleanButton = document.getElementById("cleanbutton");
cleanButton.addEventListener('click', () => {
    document.getElementById("entertext").value = ''; 
    document.getElementById("key").value = ''; 
    document.getElementById("outputtext").value = ''; 
})


const sendWhatsapp= document.querySelector("#sendwhatsapp"),
    outPutTextFinal = document.querySelector("#outputtext");
sendWhatsapp.addEventListener("click", () => {
    let mensaje = outPutTextFinal.value;
    if(!mensaje) return alert("escribe algo");
    window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(mensaje));
})



