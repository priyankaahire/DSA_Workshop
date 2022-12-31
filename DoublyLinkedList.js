class Node {
    constructor(value) {
        this.prev  = null; //~^ Additional in doubly Linked list
        this.value = value;
        this.next  = null;
    }

}

class DoubleList {
    constructor() {
        this.head = null;
        this.tail = null
    }

    add(value) {
        const newNode = new Node(value);
        if(this.head == null) {
          this.head = newNode
        } 
        else {
          this.tail.next = newNode;
          newNode.prev   = this.tail; //~^ Additional in doubly Linked list
        }

        this.tail = newNode;
    }

    printForward() {
        for(let current = this.head; current != null; current = current.next) {
          console.log("Forward Value:", current.value)
        }
    }

    printBackward() {
        //% in vjavascript not need to check != null 
        for(let current = this.tail; current; current = current.prev ) {
            console.log("Backward Value:", current.value)
        }
    }

    removeValue(value) {
     // 1st we need to assign value of head to the node which we are trying to serch
     // the if need to check my passed value equal to my current head then i remove it
     // If not then I will assign my next to the my serch node 
     // while serch node != null
     
     let deleteNode = this.head;
        // while(deleteNode != null) {
        //     if(deleteNode.value == value) {
        //         //! Do delete here
        //         console.log(`Found ${value}`);
        //     } else {
        //         deleteNode =  search.next
        //     }
        // }


        //* node.next    -> go to that node
        //* node.next    -> assigb into next
        for(let deleteNode = this.head; deleteNode != null; deleteNode = deleteNode.next ) {
            if(deleteNode.value == value) {
                //! Do delete here
                //~% 1. If only one node exist
                if(this.head == this.tail) {
                    this.head = null;
                    this.tail = null;
                    return true;
                }

                //~% 2. Remove the first node: If the value found at the head
                if(deleteNode == this.head) {
                    this.head      = this.head.next; // Save your head i.e move to the next
                    this.head.prev = null            // Disconnect from the first
                    return true;
                }

                //~% 3. Remove the last node: If the value found at tail
                if(deleteNode == this.tail) {
                  this.tail      = this.tail.prev;  // Save your tail
                  this.tail.prev = null;
                  return true;
                }
                
                //~% 4. Remove the middle one node: If middle of node
                deleteNode.next.prev   = deleteNode.prev; 
                deleteNode.prev.next   = deleteNode.next;
                return true; 
            }
        }
      return false;
    }

    addValue(value) {
        let deleteNode = this.head;
        
    }
}

const doublyList = new DoubleList();
doublyList.add(5);
doublyList.add(3);
doublyList.add(7);

console.log("***************** Backward ************************")
doublyList.printBackward();
console.log("***************** Remove ************************")
doublyList.removeValue(5);
console.log("***************** Forward ************************")
doublyList.printForward();

//* If we are passing the 1st value and last value to the removeValue() it is breaking the exicuation
//* But if pass element which not exist it still work
