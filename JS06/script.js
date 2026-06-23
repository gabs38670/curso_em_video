var n1 = Number.parseInt(prompt("Digite um número: "))
var n2 = Number.parseInt(prompt("Digite um número: "))
var s = n1 + n2

window.alert('A soma dos valores é ' + s)


/*
conversão de número inteiro -> parseInt
conversão de número com virgula -> parseFloat
conversão sem força deixa o javascript decidir qual é o tipo de dado -> Number 
*/

/*
COVERTENDO NÚMERO PARA STRING
string(n1)
*/

/*
s.length   quantos caracteres a string tem
s.toUpperCase() tudo para MAISUCULAS
s.toLoweCase() tudo para minúsculas
*/
 var nome = window.prompt('Qual é seu nome?')
 document.write(`Olá ${nome}. Seu nome tem ${nome.length} letras.`)
 document.write(`Olá ${nome}. Seu nome é ${nome.toUpperCase()}.`)

 /*
 transformar no valor BRL
 n1.tolocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
 */