const { stdin, stdout } = require("process");
const readline = require("readline");

// const isArrayFunction = (input) => {  
//     try {
//         const parseInput = JSON.parse(input);
//         return Array.isArray(parseInput);
//     } catch(e) {
//         return false;
//     }
// }

const ui = readline.createInterface({
    input: stdin,
    output: stdout
})

// ui.question("Ingrese un arreglo: ", (input) => {
//     const result = isArrayFunction(input);
//     console.log(result ? true : false);
//     ui.close();
// })


// ui.question("Enter an array: ", (input) => {
//     const newArray = input.split(',');
//     const arrayTwo = [...newArray];

//     console.log("First array: ", newArray);
//     console.log("Copy: ", arrayTwo);

//     ui.close();
// })

// function getFirstElement(nElement, array) {
//     if(array == "") {
//         return "You entered an empty space";
//     } else if(nElement == null || isNaN(parseInt(nElement))) {
//         return "You did not enter a valid n element";
//     } else {
//         const nElementArr = array.slice(0, parseInt(nElement) + 1);
//         return nElementArr;
//     }
// }

function getLastElement(array, n) {
    const lastElement = array.pop();
    return lastElement;
    // const verifyingN = parseInt(n) * -1;
    // console.log(verifyingN);
    // const newArray = array.slice(0, verifyingN);
    // return newArray;
}

// ui.question("Enter the array: ", (inputArray) => {
//     ui.question("Enter the n element: ", (n) => {
//         const result = getLastElement(n, inputArray.split(','));
//         console.log(result);

//         ui.close();
//     })
// })

ui.question("Enter an array: ", (inputArr) => {
    ui.question("Enter the n element: ", (n) => {
        const result = getLastElement(inputArr.split(','), n);
        console.log("The last element of the array is: ", result);
    
        ui.close();
    })
})