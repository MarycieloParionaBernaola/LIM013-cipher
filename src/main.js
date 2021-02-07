import cipher from './cipher.js';


// ENCODE 
const encodeButton = document.getElementById("encodebutton");
encodeButton.addEventListener('click', () => {
    const keyValue = document.getElementById("key").value;
    const enterTextValue = document.getElementById("entertext").value;
    if(keyValue<1 || keyValue>25 || keyValue === 0 || keyValue === null || enterTextValue ==='' || /^\s*$/.test(enterTextValue)) { 
        alert("Enter a message and a key from 1 to 25!");
    } else {
        document.getElementById("outputtext").innerHTML=cipher.encode(keyValue,enterTextValue);
    }
})


// DECODE
const decodeButton = document.getElementById("decodebutton");
decodeButton.addEventListener('click', () => {
    const keyValue = document.getElementById("key").value;
    const enterTextValue = document.getElementById("entertext").value;
    if(keyValue<1 || keyValue>25 || keyValue === 0 || keyValue === null || enterTextValue ==='' || /^\s*$/.test(enterTextValue)) { 
        alert("Enter a message and a key from 1 to 25!");
    } else {
        document.getElementById("outputtext").innerHTML=cipher.decode(keyValue,enterTextValue);
    }
})


// RESTART
const restartButton = document.getElementById("restartbutton");
restartButton.addEventListener('click', () => {
    document.getElementById("entertext").value = ''; 
    document.getElementById("key").value = ''; 
    document.getElementById("outputtext").innerHTML = ''; 
})


// SEND MESSAGE BY WHATSAPP
const sendWhatsapp= document.querySelector("#sendwhatsapp"),
outPutTextFinal = document.querySelector("#outputtext");
sendWhatsapp.addEventListener("click", () => {
let message = outPutTextFinal.value;
if(!message) return alert("Oops! there is nothing to send yet");
window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(message));
})

