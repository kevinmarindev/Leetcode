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
            oldTail.previous = null
        }
        this.length--
        return oldTail
    }
    shift(){
        if(this.length < 1) return undefined
        const odldHead = this.head
        if(this.lenght === 1){
            this.tail = null;
            this.head = null;
        }else{
            this.head = odldHead.next
            this.head.previous = null
            odldHead.next = null
        }
        this.length--
        return odldHead
    }
    unshift(val){
        const newNode = new Node(val)
        if(this.length < 1){
            this.head =  newNode
            this.tail = newNode
        }else{
            this.head.previous = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(idx){
        if(idx < 0 || idx >= this.length) return null
        if(idx === 0) return this.head
        if(idx === this.length - 1) return this.tail 
        let startingPoint = null
        let currentNode = null
        console.log((this.length / 2))
        idx <= this.length / 2 ? startingPoint = 0 : startingPoint = this.length - 1
        console.log(startingPoint)
        startingPoint === 0 ? currentNode = this.head : currentNode = this.tail
        if(startingPoint < 1){
            for (let i = 0; i < this.length; i++) {
                if(i === idx) return currentNode
                currentNode = currentNode.next
                console.log(currentNode)
            }
        }
        else{
            for (let i = startingPoint; i > 0; i--) {
                if(i === idx) return currentNode
                currentNode = currentNode.previous
                console.log(currentNode)
            }
        }
    }
    set(val, idx){
        let nodeToUpdate = this.get(idx)
        console.log(nodeToUpdate) 
        return nodeToUpdate ? nodeToUpdate.value = val : false 
    }
    insert(val, idx){
        if(idx < 0 || idx > this.length) return null
        else if(idx === 0) this.unshift(val)
        else if(idx === this.length) conosle.log('working'), this.push(val)
        else {
            const itemBefore = this.get((idx-1))
            const itemAfter = itemBefore.next
            const newNode = new Node(val)
            itemBefore.next = newNode
            newNode.previous = itemBefore
            newNode.next = itemAfter
            itemAfter.previous = newNode
        }
        return true
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

list.push('ramirez')
console.log(list)

list.push('celis')
console.log(list)

list.push('florez')
console.log(list)

list.push('garcia')