class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail;
    }

    enqueue(value) {
        const newNode = new Node(value);
        /* Node {
            value:5, next:null
        }*/
        console.log(this);
        if(this.tail == null) {
            this.head = this.tail = newNode;
             //~* 1st exicution
                /*Node {
                    {value:5, next:null}
                    {value:7, next:null}
                }*/
                console.log(this);
        } else {
            this.tail.next = newNode; 
           
            this.tail = newNode; //Here we make it pointer
             //~* 2nd exicution
                // {
                //     head:Node{value:5, next: Node {value:7, next:null}}
                //     tail:Node{value:8, next:null}
                // }
            //~* 3rd Exicution 
                /*{
                    head:Node{value:5, next:Node{value:7, next:Node{value:8, next:null}}}
                    tail:Node{value:8, next:null}
                }*/
        }
    }
    dequeue() {
        if(this.head == null)
            throw new Error("Empty queue")
        const value = this.head.value;
        this.head = this.head.next;

        if(this.head == null)
            this.tail = null;
        console.log(value)
        console.log(this)
        return value;
    }
}

const que = new Queue();
console.log(que);
que.enqueue(5);
que.enqueue(7);
que.enqueue(8);
console.log("After dequeue");
que.dequeue()