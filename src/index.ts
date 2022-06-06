import "./styles.css";

/**
 * Dado un arreglo cuyos elementos son caracteres que forman una única palabra.
 *  Realizar una función que verifique si la información dentro del arreglo es un palíndromo (es capicúa)
 * y devuelva verdadero o falso según corresponda.  La función no debe tener en cuenta minúsculas o mayúsculas.
 */

let arrayLetras: string[] = ["N", "e", "u", "q", "u", "e", "n"];

function verificaCapicua(array: string[]) {
  // Paso todo a minuscula
  let primerLetra: string = array[0].toLowerCase();
  let ultimaLetra: string = array[array.length - 1].toLowerCase();

  if (primerLetra === ultimaLetra) {
    console.log(`El arreglo ${array} : es capicua`);
  } else {
    console.log(`El arreglo ${array} : no es capicua`);
  }
}

verificaCapicua(arrayLetras);
