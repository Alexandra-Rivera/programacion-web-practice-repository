const { read } = require('fs');
const { stdin, stdout } = require('process');
const readline = require('readline');

/*Si un num es par o impar */
// const interface = readline.createInterface(
//     {
//         input: stdin,
//         output: stdout
//     }
// );

// interface.question('Ingrese un numero: ', (num) => {
//     const num2 = num % 2 == 0 ? "Par" : "Impar";
//     console.log('El numero que ingresaste es: ', num2);
//     interface.close();
// })


/*Si un num es positivo o negativo */
// const rl = readline.createInterface({
//     input: stdin,
//     output: stdout
// })


//   rl.question('Ingrese su texto: ', (num) => {
//     const result = num >= 0 ? "positivo" : "negativo";
//     console.log('El numero que ingresaste es: ' + result);
//     rl.close();
//   });



//   const it = readline.createInterface({
//     input: stdin,
//     output: stdout
//   })

//   it.question('Ingresa un numero: ', (num1) => {
//     it.question('Ingresa otro numero: ', (num2) => {
//         const num2V = num2 == 0 ? "Error! No se puede dividir entre cero" : num2;
//         const result = num1 / num2 ;

//         if(num2V != num2) {
//             console.log(num2V);
//         } else {
//             console.log(result);
//         }

//         it.close();
//     })
//   })


const ui = readline.createInterface({
    input: stdin, 
    output: stdout
})

// ui.question('Presiona una vocal ', (tecla) => {
//     tecla.toLocaleLowerCase();

//     const result = tecla.match(/^[aeiou]$/i) ? "Correcto!" : "Error!";
//     console.log(`Presionaste '${tecla}'`, result);      
//     ui.close();
// });

// function numVerification(num1, num2) {
//     const result = num1 > num2 ? num1 : num2;
//     return result;
// }


// /*Los input en js se ingresan como strings, por tanto, hay que convertirlos en numeros usando parseFloat */
// ui.question("Ingrese un numero: ", (num1) => {
//     ui.question("Ingrese otro numero: ", (num2) => {        
//         const mayorNum = numVerification(parseFloat(num1), parseFloat(num2));
        
//         const menorNum = mayorNum === parseFloat(num1) ? parseFloat(num2) : parseFloat(num1);
//         const diferencia = mayorNum - menorNum;
        
//         console.log(`${mayorNum} - ${menorNum} = `, Math.abs(diferencia));

//         ui.close();
//     })
// })


// console.log("MENU DE BEBIDAS");
// const bebidas = ['Vino', 'Cerveza', 'Agua', 'Refresco'];
// bebidas.forEach((bebida, index) => {
//     console.log(`${index + 1}. ${bebida}`);
// })

// const s = prompt("Su seleccion: ");
//Promt no puede utilizarse en un entorno de consola o node.js
// const fn = readline.Interface({
//     input: stdin,
//     output: stdout
// })

// ui.question("Ingrese el index de su seleccion: ", (selection) => {
//     const bebidasLowerCase = bebidas.map((bebida) => {
//         return bebida.toLowerCase();
//     })

//     const selectionLowerCase = selection.toLowerCase();
//     if(bebidasLowerCase.includes(selectionLowerCase)) {
//         const result = selectionLowerCase === 'vino' || selectionLowerCase === 'cerveza' ? 'Vaya a la barra' : 'Dirijase a la tienda';

//         console.log(result);
//     }
    

//     ui.close();
// })


// const vehicles = ['coche', 'tren', 'bicicleta', 'autobus'];

// console.log("LISTA DE VEHICULOS")
// vehicles.forEach((vehicles, index) => {
//     console.log(`${index + 1}. ${vehicles}`);
// });

// ui.question('Seleccione un vehiculo: ', (selection) => {
//     const selectionLowerCase = selection.toLowerCase();
//     if(vehicles.includes(selectionLowerCase)) {
//         const message = selectionLowerCase === 'tren' || selectionLowerCase === 'autobus' ? "Lleva dinero para el ticket" : ""   
//         console.log(message);
//     } else  {
//         console.log("El texto que has ingresado, no existe en nuestras opciones");
//     }
//     ui.close();
// })


// function speedCheck(length, time) {
//     const speed = length / time; 
//     const result = speed >= 40 && speed <= 60 ? "Usted ha pasado la prueba" : "Usted ha sido descalificado";
//     console.log(result);
// }


// ui.question("Longitud recorrida (km): ", (length) => {
//     ui.question("Tiempo (en horas): ", (time) => {
//         speedCheck(parseFloat(length), parseFloat(time));

//         ui.close();
//     })
// })

// function totalToPay(numArt, price) {
//     const totalPrice = numArt * price;
//     if(totalPrice >= 40) {
//         const discount = totalPrice * 0.15 
//         const priceWithDiscount = totalPrice - discount;
//         return priceWithDiscount;
//     } else {
//         return totalPrice;
//     }
// }

// ui.question("Cantidad de producto: ", (productNum) => {
//     ui.question("Precio (euros): ", (price) => {
//         const actual_price = totalToPay(parseInt(productNum), parseFloat(price));
//         console.log(actual_price);

//         ui.close();
//     })
// });

ui.question("Nota 1er trimestre: ", (nota1) => {
    ui.question("Nota 2do trimestre: ", (nota2) => {
        ui.question("Nota 3er trimestre: ", (nota3) => {
            const prom = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

            if(prom < 5) {
                console.log(`Reprobado: ${prom}`);
            } else if(prom > 5 && prom <= 7) {
                console.log(`Aprobado: ${prom}`);
            } else {
                console.log(`Notable: ${prom}`);
            };

            ui.close();
        })
    })
})