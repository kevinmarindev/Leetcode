class Node{
    constructor(value){
        this.value = value 
        this.next = null
        this.previous = null 
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0 
    }
    push(val){
        const newNode = new Node(val)
        if(this.length > 0){
            console.log('rur')
            const OldTail = this.tail 
            OldTail.next = newNode
            this.tail = newNode
            this.tail.previous = OldTail
        }else{
            console.log('oo')
            this.head = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}


let list = new DoubleLinkedList()
console.log(list)

list.push('kevin')
console.log(list)

list.push('mar')
console.log(list)

list.push('lon')
console.log(list)