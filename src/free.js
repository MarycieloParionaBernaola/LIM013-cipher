import cipher from './cipher.js';

// eslint-disable-next-line no-console
console.log(cipher);



//Botón codificar 
const encodeButton = document.getElementById("encodebutton");
encodeButton.addEventListener('click', () => {
    const keyValue = document.getElementById("key").value;
    const enterTextValue = document.getElementById("entertext").value;
    if(keyValue<1 || keyValue>10 || keyValue === 0 || keyValue === null || enterTextValue ==='' || /^\s*$/.test(enterTextValue)) { 
        alert("¡Recuerde ingresar su mensaje y clave correcta! :)");
    } else {
        document.getElementById("outputtext").innerHTML=cipher.encode(keyValue,enterTextValue);
    }
})

//Botón decodificar
const decodeButton = document.getElementById("decodebutton");
decodeButton.addEventListener('click', () => {
    const keyValue = document.getElementById("key").value;
    const enterTextValue = document.getElementById("entertext").value;
    if(keyValue<1 || keyValue>10 || keyValue === 0 || keyValue === null || enterTextValue ==='' || /^\s*$/.test(enterTextValue)) { 
        alert("¡Recuerde ingresar su mensaje y clave correcta! :)");
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

