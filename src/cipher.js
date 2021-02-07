const cipher ={
  encode: (offset, string) => {
    if (offset === null || offset === 0){
      throw new TypeError(); 
    }
    let newText = '';
    for (let i = 0; i < string.length; i++) {
      let convAscii = string.charCodeAt(i);
  
      if (convAscii >= 65 && convAscii <= 90) {
        newText += String.fromCharCode((convAscii - 65 + parseInt(offset)) % 26 + 65); // Mayus Ascii: 65 - 90
      } else if (convAscii >= 97 && convAscii <= 122) {
        newText += String.fromCharCode((convAscii - 97 + parseInt(offset)) % 26 + 97); // Minus Ascii: 97 - 122
      } else if (convAscii >= 34 && convAscii <= 63) {
        newText += String.fromCharCode((convAscii - 34 + parseInt(offset)) % 30 + 34); // numbers plus others
      } else {                            
        newText += string[i];       
      }
    }
    return newText;
  },

  decode: (offset, string) => {
    if (offset === null || offset === 0){
      throw new TypeError(); 
    }
    let newText = '';
    for (let i = 0; i < string.length; i++) {
      let convAscii = string.charCodeAt(i);
  
      if (convAscii >= 65 && convAscii <= 90) {
        newText += String.fromCharCode((convAscii - 90 - parseInt(offset)) % 26 + 90); // Mayus Ascii: 65 - 90
      } else if (convAscii >= 97 && convAscii <= 122) {
        newText += String.fromCharCode((convAscii - 122 - parseInt(offset)) % 26 + 122); // Minus Ascii: 97 - 122
      } else if (convAscii >= 34 && convAscii <= 63) {
        newText += String.fromCharCode((convAscii - 63 - parseInt(offset)) % 30 + 63); // numbers plus others
      } else {                            
        newText += string[i];       
      }
    }
    return newText;
  },


};
   

export default cipher;