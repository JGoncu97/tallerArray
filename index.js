//1. Crear un array vacío:
let arrayVacio=[]

//2. Crear un array con elementos:
let arrayElements=[1,2,3,4,5,6]

//3. Crear un array con elementos de diferentes tipos de datos:
let arrayElementsDiferent=[1,"hola",true,cubo,false]

//4. Crear un array utilizando el constructor Array():
const language = new Array("HTML", "CSS", "Javascript"); 

//5. Crear un array con una secuencia numérica usando el método Array.from() :
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)
 
  //   6. Crear un array mediante la repetición de un valor utilizando el método 
// Array.fill() :
const array = [1, 2, 3, 4];


console.log(array.fill(3, 2, 4));

//7. Crear un array a partir de una cadena de texto usando el método 
//String.split() :

let familia= "Diego tenia 10 hijos, de los cuales 2 son de 5 años";
let palabras = familia.split(" ");
console.log(palabras); 

//8. Crear un array combinando dos arrays existentes utilizando el operador
//spread ( ... ):


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayCombinado = [...array1, ...array2];
console.log(arrayCombinado); 

//9. Crear un array con valores únicos utilizando el método Set() y el operador
//spread ( ... ):

const arrayuni1 = ['apple', 'banana', 'banana', 'orange', 'apple'];
const uniqueArray = [...new Set(arrayuni1)];
console.log(uniqueArray); // Output: ['apple', 'banana', 'orange']
