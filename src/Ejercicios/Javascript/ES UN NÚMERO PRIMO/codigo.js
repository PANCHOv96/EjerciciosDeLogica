export function esPrimo(num){
    if(typeof num !== 'number') return false
    if(num<2) return false
    if(num % 2 == 0 && num > 2) return false
    if(num % 3 == 0 && num > 3) return false
    return true
}

export function primeros100Primos(){
    for(let i=0 ; i <= 100 ; i++){
        console.log(`El numero ${i} ${esPrimo(i) ? '"ES' : '"NO ES'} PRIMO"`);
    }
}

// primeros100Primos()