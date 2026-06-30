let valores = [8, 1, 7, 4, 2, 9]

//Pode se fazer asim para mostrar os valores mas não é uma maneira eficiente
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for (let pos = 0 ; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Serve para mostra a posição do item e se ele existe
/*
let posicao = valores.indexOf(3)
if(posicao == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 7 está na posição ${posicao}`)
    }
*/