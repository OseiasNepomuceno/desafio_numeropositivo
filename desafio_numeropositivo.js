let cont = 0;

for (let i = 0; i < 6; i++){
    let numero = parseFloat(gets());
    if (numero > 0) {
        cont++;
    }
}

console.log(cont + " valores positivos");