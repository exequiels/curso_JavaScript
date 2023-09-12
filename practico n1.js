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

const resultadoMultiplicacion = multiplicarNotas(notasAlumno);
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