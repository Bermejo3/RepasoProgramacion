// 2. Procedimiento continente
function continent(pais: string){
    let europe: string[] = ["Alemania", "Andorra", "Luxemburgo", "Monaco", "Estonia"];
    let africa: string[] = ["Lesoto", "Swatini", "Nigeria", "Marruecos", "Uganda"];
    let asia: string[] = ["Japon", "India", "Kazagistan", "Uzbekistan", "China"]
    let oceania: string[] = ["Australia", "Indonesia", "Nueva Zelanda", "Papua Nueva Guinea", "Fiji"]
    let america: string[] = ["Peru", "Chile", "Venezuela", "Mexico", "Canada"]

    for (let i=0; i<europe.length; i++){
        if (europe[i] == pais){
            console.log("Europe");
        }
        else if (africa[i] == pais){
            console.log("Africa");
        }
        else if (asia[i] == pais){
            console.log("Asia");
        }
        else if (oceania[i] == pais){
            console.log("Oceania");
        }
        else if (america[i] == pais){
            console.log("America");   
        }
    }
}

continent("Peru")
continent("Lesoto")
continent("India")
continent("Andorra")
continent("Fiji")
continent("España")

// 3. Funcion numeros impares hasta parametro de entrada
function showEven(n: number){

    for (let i=1; i<=n; i+=2){
        console.log(i);
    }
}

showEven(8)
showEven(1)
showEven(11)

// 4. Array invertido
function revertArray(array: string[]){
    let newArray: string[] = [];

    for (let i=array.length-1; i>=0; i--){
        newArray.push(array[i])
    }
    return newArray
}

console.log(revertArray(["hace","dia","buen","Que"]));

// 5. Colores del arcoiris
function isRainbow(colores: string[]){
    let rainbow: string[] = ["rojo", "naranja", "amarillo", "verde", "azul", "indigo", "violeta"]

    for (let i=0; i<colores.length; i++){
        for (let j=0; j<rainbow.length; j++){
            if (colores[i] == rainbow[j]){
                console.log(`${colores[i]} está en el arcoiris`);
            }
        }
    }
}

isRainbow(["rojo", "rosa", "verde", "morado", "gualda"])

// 7. Ver si un array de nombres empieza por M
function isM(nombres: string[]){
    let count: number = 0

    for (let i=0; i<nombres.length; i++){
        if (nombres[i][0] == "M"){
            count++
        }
    }
    console.log(count == nombres.length);
}

isM(["Mariano", "Maria", "Marta"]);
isM(["Alberto", "Maria", "Marta"]);

// 8. Funcion suma de los caracteres de un array
export function sumChar(palabras: string[]): number{
    let suma: number = 0

    for (let i=0; i<palabras.length; i++){
        suma += palabras[i].length
    }
    return suma
}

console.log(sumChar(["hace","dia","buen","Que"]));
console.log(sumChar(["rojo", "rosa", "verde", "morado", "gualda"]));
