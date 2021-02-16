// 1. Funcion signo del zodiaco
function zodiacSign(birthdate: number[] /*[dia,mes,año]*/): string{
    let sign: string = ""
    let day: number = birthdate[0]
    let month: number = birthdate[1]

    if (month == 1){
        if (day < 21){
            sign = "Capricornio"
        }
        else{
            sign = "Acuario"
        }
    }
    else if (month == 2){
        if (day < 19){
            sign = "Acuario"
        }
        else{
            sign = "Piscis"
        }
    }
    else if (month == 3){
        if (day < 21){
            sign = "Piscis"
        }
        else{
            sign = "Aries"
        }
    }
    else if (month == 4){
        if (day < 21){
            sign = "Aries"
        }
        else{
            sign = "Tauro"
        }
    }
    else if (month == 5){
        if (day < 21){
            sign = "Tauro"
        }
        else{
            sign = "Geminis"
        }
    }
    else if (month == 6){
        if (day < 22){
            sign = "Geminis"
        }
        else{
            sign = "Cancer"
        }
    }
    else if (month == 7){
        if (day < 23){
            sign = "Cancer"
        }
        else{
            sign = "Leo"
        }
    }
    else if (month == 8){
        if (day < 23){
            sign = "Leo"
        }
        else{
            sign = "Virgo"
        }
    }
    else if (month == 9){
        if (day < 23){
            sign = "Virgo"
        }
        else{
            sign = "Libra"
        }
    }
    else if (month == 10){
        if (day < 23){
            sign = "Libra"
        }
        else{
            sign = "Escorpio"
        }
    }
    else if (month == 11){
        if (day < 23){
            sign = "Escorpio"
        }
        else{
            sign = "Sagitario"
        }
    }
    else if (month == 12){
        if (day < 22){
            sign = "Sagitario"
        }
        else{
            sign = "Capricornio"
        }
    }

    return sign
}

console.log(zodiacSign([7,1,1992]));
console.log(zodiacSign([22,1,1959]));
console.log(zodiacSign([25,4,1992]));

// 9. Funcion indica si par o impar
function evenOrOdd(num: number){
    if (num%2==0){
        console.log("El número es par");  
    }
    else {
        console.log("El número es impar");  
    }
}

evenOrOdd(2)
evenOrOdd(7)

import { sumChar } from "./RepasoFor"

// 10. Utilizando las funciones anteriores decir si todos los caracteres sumas par o impar
function arrayEvenOrOdd(arr: string[]){
    evenOrOdd(sumChar(arr))
}


arrayEvenOrOdd(["Casa", "Coche", "Ciudad", "Cesta"])
arrayEvenOrOdd(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"])
arrayEvenOrOdd(["Venezuela", "Veneno", "Voltaje"])