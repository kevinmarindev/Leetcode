//you also need to create a node class which spits out node objects
class Node{
    constructor(value){
        this.value = value;
        this.next = null 
    }
    setNext(node){
        this.next = node
    }
}

class SingleLinkList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //creating the push method which adds an item to the end of the list
    push(value){
        const newNode = new Node(value)
        if(this.length < 1){
            this.head = newNode;
            this.tail = newNode;
        }else{
            //set the next property on the node already on the list to the new node added
            this.tail.setNext(newNode)
            this.tail = newNode;
        }
        this.length++
        return this
    }
    //creating the pop method which removes the last item and returns it. 
    pop(){
        //cant pop items if there are none
        if(this.length < 1) return undefined

        let currentNode = this.head
        let removedItem  
        while(currentNode){
            if(currentNode.next === this.tail){
                removedItem = this.tail
                this.tail = currentNode 
                currentNode.next = null 
            }
            currentNode = currentNode.next
        }
        this.length--
        if(this.length === 0) this.head = null, this.tail = null
        return removedItem
    }
    //add shift methods whcih removes the 1st item from the list. 
    shift(){
        if(this.length < 1) return undefined
        const oldHead = this.head;
        this.head = this.head.next;
        this.length--
        if(this.length === 0) this.tail = null
        return oldHead
    }
    //adding unshift method which will add a node at the begining of the list 
    unshift(value){
        const newNode = new Node(value);
        if(this.length < 1) this.head = newNode, this.tail = newNode
        else{
            const oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
        }
        this.length++
        return this
    }
    //return item at desired position
    get(idx){
        if(idx < 0 || idx >= this.length) return null
        let counter = 0
        let currentItem, nextitem; 
        while(counter <=  idx){
            counter === 0 ? currentItem = this.head : currentItem = currentItem.next;
            nextitem = currentItem.next 
            counter++
        }
        return currentItem
    }
    //change item at desired position 
    set(idx, val){
        let desiredItem = this.get(idx)
        if(desiredItem){
            desiredItem.value = val
            return true
        }
        return false

    }
    //insert item at desired index 
    insert(idx, val){
        if(idx > this.length || idx < 0) return false
        else if(idx === this.length) return Boolean(this.push(val))
        else if(idx === 0) return Boolean(this.unshift(val))
        else{
            const newNode = new Node(val)
            let insertAt = this.get((idx - 1))
            const previousNext = insertAt.next
            insertAt.next = newNode
            newNode.next = previousNext
            this.length++
            return true
        }
    }
}

const listOne = new SingleLinkList();



listOne.push('kevin')
listOne.push('jacob')
listOne.push('marin')
console.log(listOne)


