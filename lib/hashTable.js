module.exports = class HashTable{
    constructor(){
        this.data = [[],[],[],[],[],[],[],[],[],[]]
    }
    hash(value){
        return value % 10
    }
    insert(value) {
        const indiceData = this.hash(value)
        
        this.data[indiceData].push(value)
    }
}

