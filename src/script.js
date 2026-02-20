// VARIÁVEIS e CONSTANTES

console.log("Digite um nome do seu jogador.");

// declara uma variável
let nickname = "NatanCav"

// concatenando mensagem + variável
console.log("Bem Vindo " + nickname)

// Conteúdo fixo se torna uma constante.
const notificacao = "Pokemon Go diz: "

console.log(notificacao + "tem um novo pokemon na região!")

// pokemon

// string - são variaveis que armazenam texto
// number - são variaveis que armazenam números
// boolean - são variaveis que armazenam valores verdadeiros ou falsos (true ou false)

let nomePokemon = "Pikachu"
let pokemonSexo = "M"
let nivelPokemon = 20
let pontosVidaPokemon = 150
let selecionavel = true

// EXERCÍCIO 

//nome, idade, número, CPF, endereço e recebe pensão?
// String, Number, Boolean

let nomePessoa = "Sônia"
let idadePessoa = 59
let numeroPessoa = "(81)98765-4321"
let cpfPessoa = "123.456.789-00"
let enderecoPessoa = "Rua das Flores, 123, Santa Cruz do Capibaribe - PE"
let recebePensao = true

// VETORES E MATRIZES

// Para guardar coleções de itens, se usa vetores

let pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
let timePokemon = [
    ["Bulbasaur", "M", 1],
    ["Charmander", "M", 5],
    ["Squirtle", "F", 3]
]

// pokemon.pop() // remove o último item do vetor
// pokemon.push("Pikachu") // adiciona um item no final do vetor
// pokemon.shift() // remove o primeiro item do vetor

console.log("Sua lista atual de pokémons: " + pokemon)

// MATRIZES: Vários tipos de dados em um mesmo vetor, ou seja, um vetor dentro de outro vetor
//[][], onde o primeiro colchete é a linha e o segundo colchete é a coluna

console.log(" O pokemon: " + timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + " e está no level " + timePokemon[1][2])

// OPERADORES E EXPRESSÕES

// Operadores de comparação: ==, !=, >, <, >=, <=
// Operadores lógicos: && (AND), || (OR), ! (NOT)
// Operadores aritméticos: +, -, *, /, %

let idade = 18

console.log(idade)

idade = 30 + 6

console.log(idade)

let primerioNumero = 1023
let segundoNumero = 23

console.log(primerioNumero - segundoNumero)

// Incremento e decremento

// ++ incremento
let contador = 1
contador++ // contador = contador + 1

// -- decremento
contador-- // contador = contador - 1

// EXPRESSÕES

let resultado = (10 + 5) * 2 // expressão aritmética

console.log(resultado)