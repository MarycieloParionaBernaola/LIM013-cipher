import cipher from './cipher.js';

// eslint-disable-next-line no-console
console.log(cipher);


const encodebutton = document.getElementById("encodebutton");
    encodebutton.addEventListener('click', () => {
        let enterText = document.getElementById("entertexthtml").value;
		let offset = document.getElementById("offset").value;
		if(parseInt(offset)<1){ 
			alert("¡Ingrese una clave con valor positivo :)!");
		} else {
        document.getElementById("outputtexthtml").innerHTML= cipher.encode(offset,enterText);  
        }
    })



const decodeButton = document.getElementById("decodebutton");
    decodeButton.addEventListener('click', () => {
        let enterText = document.getElementById("entertexthtml").value;
        let offset = document.getElementById("offset").value;
        if(parseInt(offset)<1){ 
            alert("¡Ingrese una clave con valor positivo :)!");
        } else { 
             document.getElementById("outputtexthtml").innerHTML= cipher.decode(offset,enterText);
            }  
    })


const restoreButton = document.getElementById("restorebutton");
restoreButton.addEventListener('click', () => {
	document.getElementById("outputtexthtml").innerHTML= "";   
	document.getElementById("entertexthtml").value = ""; 
	document.getElementById("offset").value = ""; 
	})


const startButton = document.getElementById("enjoybutton");
startButton.addEventListener('click', () => {
    document.getElementById("firstscreen").style.display = "none";
	document.getElementById("secondscreen").style.display = "block";
})


