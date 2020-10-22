const Stack = require('./lib/Stack')

let texto = 'AS ARMAS E OS BARÕES ASSINALADOS QUE DA OCIDENTAL PRAIA TAPROBANA'

let pilha = new Stack()

for(let i = 0; i < texto.length; i++) {
    // Inserindo na pilha: SEMPRE no final, usando push()
    pilha.push(texto.charAt(i))
}

console.log(pilha)

let invertido = ''

while(pilha.size() > 0) { // Enquanto a pilha não estiver vazia
    // Retirando da pilha: SEMPRE do final, usando pop()
    invertido += pilha.pop()
}
console.log(invertido)