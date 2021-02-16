// 6. Si hay un numero par entre un array
function isPar(numeros: number[]): boolean{
    let result: boolean = false
    let i=0

    while (result == false && i<numeros.length){
        if (numeros[i]%2==0){
            result = true
        }
        i++
    }
    return result
}

console.log(isPar([1,3,5,1,3]));
console.log(isPar([1,3,6,1,3]));
console.log(isPar([2,3,6,1,3]));

// 7. Ver si un array de nombres empieza por M
function isM(nombres: string[]){
    let i=0
    let interruptor = true

    while (interruptor == true && i<nombres.length){
        if (nombres[i][0] != "M"){
            interruptor = false
        }
        i++
    }
    console.log(interruptor);
    
}

isM(["Mariano", "Maria", "Marta"]);
isM(["Alberto", "Maria", "Marta"]);