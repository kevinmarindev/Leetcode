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
            
            // console.log(current.next, this.tail)
        }
        currentNode = currentNode.next
        // this.length = this.length - 1
        }
        this.length--
        return removedItem
    }
}

const listOne = new SingleLinkList();


//adding items to this thing
// listOne.push('kevin')

