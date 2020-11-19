const hashTable = require("./lib/hashTable") 

const tabela = new hashTable()

tabela.insert(21)
tabela.insert(36)
tabela.insert(42)
tabela.insert(55)
tabela.insert(90)
tabela.insert(23)
tabela.insert(80)
tabela.insert(79)
tabela.insert(64)
tabela.insert(87)
tabela.insert(78)

console.table(tabela)

