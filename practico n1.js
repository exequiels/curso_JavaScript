// Trabajo Practico 1

// reduce()

// 1 - Suma
const notasAlumnoSuma = [4,7,8,10,7,9];

function sumarNotas (alumno) { 
    let total = alumno.reduce((a, b) => a + b);
    return total;
}

const resultadoSuma = sumarNotas(notasAlumnoSuma);
console.log(resultadoSuma);

// 2 - Multiplicacion
const notasAlumnoMultiplicar = [4,7,8,10,7,9];

function multiplicarNotas (alumno) { 
    let total = alumno.reduce((a, b) => a * b);
    return total;
}

const resultadoMultiplicacion = multiplicarNotas(notasAlumnoMultiplicar);
console.log(resultadoMultiplicacion);

// 3 - Concatenar
const notasParaConcatenar = [4,7,8,10,7,9];

function concatenarNotas (notas) {
    let resultado = notas.reduce((a, b) => {
        return a + b.toString();
    });
    return resultado;
}

const notasConcatenadas = concatenarNotas(notasParaConcatenar);
console.log(notasConcatenadas);

// 4 - Promedios
const notasAlumnoPromediar = [4,7,8,10,7,9];

function promediarNotas (promediar) {
    let resultadoSuma = promediar.reduce((a, b) => a + b, 0);
    let promedios = resultadoSuma / notasAlumnoPromediar.length;
    return promedios;
}

const resultadoPromedios = promediarNotas(notasAlumnoPromediar);
console.log(resultadoPromedios);

// 5 - Valor máximo
const notasAlumnoMaximo = [4,7,8,10,7,9];

function valorMaximo (maximo) {
    return maximo.reduce((a, b) => {
        return Math.max(a, b);
    });
};

const vMaximo = valorMaximo(notasAlumnoMaximo);
console.log(vMaximo);

// 6 - Contar ocurrencias
const notasAlumnoContar = [4, 7, 8, 10, 7, 9, 5, 7, 8];
const notaBuscar = 7;

function buscarNumero(notas, nota) {
    return notas.reduce((a, b) => {
        return b === nota ? a + 1 : a;
    }, 0);
}

const resultadoBusqueda = buscarNumero(notasAlumnoContar, notaBuscar);
console.log(`El número ${notaBuscar} aparece ${resultadoBusqueda} veces.`);

// 7 - Ordenar palabras por longitud
const palabrasParaOrdenar = ["palabras", "para", "ordernar", "con", "una", "funcion"];

function ordernar (palabras) {
    let palabrasOrdenadas = palabras.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        }
        return 0;
   });
    return palabrasOrdenadas;
}

const ordenarPalabras = ordernar(palabrasParaOrdenar);
console.log(ordenarPalabras);

// 8 - Búsqueda de un elemento en un arreglo
const notasAlumnoBuscar = [4, 7, 8, 10, 7, 9, 5, 7, 8];
const valorDeBusqueda = 8;

function buscarCosas(arr, valor) {
    return arr.includes(valor)
}

const busqueda = buscarCosas(notasAlumnoBuscar, valorDeBusqueda);
console.log(busqueda);

// 9 - Búsqueda de la primera coincidencia
const numeros = [4,7,8,10,7,9];
const buscar = 10;

function buscarIndice (arr, elemento) {
    let indice = arr.indexOf(elemento);
    return (indice !== -1) ? indice : -1;         
};

const buscadorIndice = buscarIndice(numeros, buscar);
console.log(buscadorIndice);

// 10 - Búsqueda de la última coincidencia
const numeros_2 = [4,7,8,10,7,9];
const buscar_2 = 7;

function buscarUltimaInstancia (arr, elemento) {
    let ultimo = arr.lastIndexOf(elemento);
    return (ultimo !== -1) ? ultimo : -1;         
};

const buscadorUltimo = buscarUltimaInstancia(numeros_2, buscar_2);
console.log(buscadorUltimo);