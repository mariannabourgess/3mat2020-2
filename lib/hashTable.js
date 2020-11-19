module.exports = class HashTable{
    constructor(){
        this.data = [[],[],[],[],[],[],[],[],[],[]]
    }
    insert(value) {
        const indiceData = value % 10
        
        this.data[indiceData].push(value)
    }
}

