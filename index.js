let numeros=[1,2,3,4,5];
let soma = 0;

for(let i =0; i<numeros.length; i++){
    console.log('i: ${i}, numeros[i]: ${numeros[i]}, soma antes: ${soma}'),
    soma += numeros[i],
    console.log('soma despois')
}
