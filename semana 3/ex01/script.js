var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ]

var multiplicaNumeros = (num, i) => {
    listaNumeros[i] = num * 2
}

listaNumeros.forEach(multiplicaNumeros)

console.log(listaNumeros);

