class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
    }

    push(value) {
        if(this.head == null) {
            this.head = new Node(value); //~* 1. Node {next:null, value:12}
        } else {
            //* Craeting node ans assign it to newNode
            const newNode = new Node(value); 
            //~* 3. newNode = Node {value:3, next:null}
                                               
            //~* 7. newNode = Node {value:4, next:null}
            //* Whatever value of head we will assign it newNode->next 
            newNode.next = this.head; 
            //~* 4. Node {value:3, next:Node {next:null, value:12}}
                                      
            //~* 8. Node {value:3, next:Node {value:12, next:Node {value:4, next:null}} }
            //* here we are assigning newNode to the current head
            this.head = newNode; 
            //~* 5. Node {value:3, next:Node {next:null, value:12}}
                                 
            //~* 9.  Node {value:3, next:Node {value:12, next:Node {value:4, next:null}} } 
        }
        console.log("Plate:", value); 
        //~* 2 -> 6 -> 10
    }

    pop() {
        if(this.head == null)
         throw new Error("stack underflow");

         const value = this.head.value;
         this.head = this.head.next;
         return value;
    }

    // isEmpty() {

    // }
}

const plates = new Stack(); //* It will call constructor and default create the head = null
plates.push(12);
plates.push(3);
plates.push(4);
console.log("Stack After push \n",plates);
plates.pop();
console.log("Stack After pop \n", plates);