/*
    3 * { 5 - 2 / [3 * 4 + (12 / 5)]}
    8 - { 5 * (3 + 7])}
*/

const Stack = require('./lib/Stack')

let analisador = new Stack()

let expr = '3 * { 5 - 2 / [3 * 4 + (12 / 5)]}'

for(let i = 0; i < expr.length; i++) {
    
}