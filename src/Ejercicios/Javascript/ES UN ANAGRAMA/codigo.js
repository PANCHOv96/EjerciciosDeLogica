export function isAnagram(word1,word2){
    // verifica que sea un string lo ingresado
    if(typeof word1 !== "string" || typeof word2 !== 'string') return false
    // se cambia todo a minuscula para comprobar mas facil
    let isAnagram = true;
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    // preguntamos si el tamaño de la letra no es igual o si es la misma palabra
    if(word1 === word2 || word1.length != word2.length) return false
    // crea una cadena en forma de array
    let cadena = word2.split('');
    word1.split('').forEach(key => {
        // verifica que la letra este dentro del array
        const response = cadena.findIndex(key2 => key2==key)
        // si no se encuentra cambia la variable isAnagram a FALSE
        if(response == -1) {
            isAnagram = false
            return;
        }
        // busca la primer letra que encontro en el indice y la borra del array para que no se pueda repetir
        cadena.splice(response,1)
    });
    return isAnagram
}
