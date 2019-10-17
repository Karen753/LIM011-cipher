window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    let cipher=""; /*string*/
    let claves="";
    for (let i= 0; i < string.length; i++) {
       claves = string.charCodeAt(i);
       if (65 <= claves && claves <= 90) {
        cipher += String.fromCharCode(((claves - 65 + parseInt(offset)) % 26) + 65);
      } else if (97 <= claves && claves <= 122){
        cipher += String.fromCharCode(((claves - 97 + parseInt(offset)) % 26) + 97);
      } else {
        cipher += string.charAt(i);
      }
    } return cipher; },

  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    let decipher="";
    let number="";
    for (let i= 0; i < string.length; i++) {
      number = string.charCodeAt(i);
      if (65 <= number && number <= 90) {
        decipher += String.fromCharCode(((number + 65 - parseInt(offset)) % 26) + 65);
      } else if (97 <= number && number <= 122){
        decipher += String.fromCharCode(((number - 97 - parseInt(offset) + 52 ) % 26) + 97);
      } else {
        decipher += string.charAt(i);
      }
    } return decipher;
  }
    
      
  };