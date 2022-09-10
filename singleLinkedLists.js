

class SingleLinkList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //creating the push method which adds an item to the end of the list
    push(value){
        if(this.length < 1){
            this.head = value;
            this.tail = value;
        }else{
            this.tail = value
        }
        this.length++
    }
}

const listOne = new SingleLinkList();


//adding items to this thing
listOne.push('kevin')

