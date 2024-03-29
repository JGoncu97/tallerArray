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
console.log(uniqueArray); 

//10. Crear un array con una función que genere valores dinámicamente:
function generateSequenceArray(start, end, step) {
  const sequenceArray = [];
  for (let i = start; i <= end; i += step) {
    sequenceArray.push(i);
  }
  return sequenceArray;
}

const sequence = generateSequenceArray(1, 10, 2);
console.log(sequence); 

//11 .Obtener la longitud de un array

const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);

//12. Agregar elementos al final del array usando push() :

const clothing1 = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing1.push("jean"));
console.log(clothing1)

//13. Eliminar el último elemento del array usando pop() :

const clothing2 = ['shoes', 'shirts', 'socks', 'sweaters','jean']
clothing2.pop()
console.log(clothing2)

//14. Agregar elementos al principio del array usando unshift() :

const clothing3 = ['shoes', 'shirts', 'socks', 'sweaters']
console.log(clothing3.unshift('jean'))
console.log(clothing3)

//15. Eliminar el primer elemento del array usando shift() :

const clothing4 = ['jean','shoes', 'shirts', 'socks', 'sweaters']
clothing4.shift()
console.log(clothing4)

//16. Obtener una porción del array usando slice() :

const clothing5 = ['jean','shoes', 'shirts', 'socks', 'sweaters']
const porcion=clothing5.slice(2)
console.log(porcion)

//17. Convertir un array en un string usando join() :

const clothing6 = ['jean','shoes', 'shirts', 'socks', 'sweaters']
console.log(clothing6.join('-'))

//18. Obtener una subsección del array desde un índice negativo usando slice() :

const clothing7 = ['jean','shoes', 'shirts', 'socks', 'sweaters']
const obtener=clothing7.slice(-2)
console.log(obtener)

//19. Eliminar una porción del array sin modificar el original usando slice() :

const clothing8 = ['jean','shoes', 'shirts', 'socks', 'sweaters']
const newArray=clothing8.slice(0,2)
console.log(newArray)

//20. Agregar múltiples elementos al principio del array usando unshift() con
//spread operator ( ... ):

let arrayNew=[4,5,6,7];
const elementsToAdd=[1,2,3]
arrayNew.unshift(...elementsToAdd)
console.log(arrayNew)
