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
    pop(){
        if(this.length < 1) return undefined
        const oldTail = this.tail
        if(this.lenght === 1){
            this.tail = null;
            this.head = null;
        }
        else{
            this.tail = oldTail.previous
            this.tail.next = null
            //complety remove any reference the old tail has to the list
            oldTail.prev = null
        }
        this.length--
        return oldTail
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