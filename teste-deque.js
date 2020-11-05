const Deque = require('./lib/Deque2')

let fila = new Deque()

// Inserções ao final da fila (como uma fila tradicional)
fila.insertRear('Jurema')
fila.insertRear('Basílio')
fila.insertRear('Ricardo')
fila.insertRear('Creuza')

console.log(fila)

// Fura-fila: inserção no início
fila.insertFront('Marizete')

console.log(fila)

// Desistência: remoção do final da fila
let desistente = fila.removeRear()

console.log({desistente})
console.log(fila)

// Fura-fila
fila.insertFront('Alípio')
console.log(fila)

// Inserindo no final da fila
fila.insertRear('Otília')
console.log(fila)

// Removendo do início da fila
let removido = fila.removeFront()
console.log({removido})
console.log(fila)