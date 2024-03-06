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