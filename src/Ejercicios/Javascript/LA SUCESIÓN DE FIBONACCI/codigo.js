export function fibonacci(){
    let arreglo = [0,1]
    for(let i=2;i<50;i++){
        arreglo.push(arreglo[i-2]+arreglo[i-1])
    }
    return arreglo
}

console.log(fibonacci());