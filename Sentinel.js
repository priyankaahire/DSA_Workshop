class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null
    }
}

class Sentinel {
    constructor() {
        this.head = new Node(undefined); 
        this.tail = new Node(undefined);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    //* Add using Back: Like Shift
    addNodeBack(value) {
     const newNode = new Node(value);
    
     newNode.next = this.tail;
     newNode.prev = this.tail.prev;

     this.tail.prev.next = newNode;
     this.tail.prev      = newNode;
      
    }

    /**
     * addNodeFront
     * @param {*} value 
     * Add using front : Like Unshift
     */
    addNodeFront(value) {
     const newNode = new Node(value);

     newNode.next = this.head.next;
     newNode.prev = this.head;

     //~% Boy talks to two node to pull him up
     newNode.prev.next = newNode;
     newNode.next.prev = newNode;
            
    }
    /**
     * removeValue
     * @param {*} value 
     * @returns 
     */
    removeValue(value) {
        for(let deleteNode = this.head.next; deleteNode != this.tail; deleteNode=deleteNode.next) {
            if(deleteNode.value == value) {
                deleteNode.prev.next = deleteNode.next;
                deleteNode.next.prev = deleteNode.prev;
                return true
            }
        }
        return false;
    }
    
    /**
     * 
     * @param {*} searchValue 
     * @param {*} insertValue 
     * @returns 
     */
    insertAfter(searchValue, insertValue) {
        for(let searchNode = this.head.next; searchNode != this.tail; searchNode = searchNode.next) {
              if(searchNode.value == searchValue) 
              {

                const newNode = new Node(insertValue);

                //~* After this line Boys is hanging position
                newNode.next = searchNode.next;
                newNode.prev = searchNode;
                
                //~* After this boys will on wall
                //~* Boys need to talk his left and right side 
                //~* give me your hand so I will be part of wall
                newNode.next.prev = newNode;
                newNode.prev.next = newNode;
                return true;
              }
        }
        return false;
    }
    /**
     * insertBefore
     * @param {*} searchValue 
     * @param {*} insertValue 
     * @returns 
     */
    insertBefore(searchValue, insertValue) {
     
        for(let searchNode = this.tail.prev; searchNode != this.head; searchNode = searchNode.prev) {
            if(searchNode.value == searchValue) {

                const newNode = new Node(insertValue);

                newNode.next = searchNode;
                newNode.prev = searchNode.prev;

                newNode.next.prev = newNode;
                newNode.prev.next = newNode;

                return true;
            }
        }
     return false;

    }
    /***
     * Remove the first node after Head
     * 
     */
    removeFirst() {
        for(let deleteNode = this.head.next; deleteNode != this.tail; deleteNode = deleteNode.next) {
            deleteNode.next.prev   = deleteNode.prev; 
            deleteNode.prev.next   = deleteNode.next;
            return true;
        }
        return false;
    }
    /**
     * Remove the rist node before the Tail
     * 
     */
    remoevLast() {
        for(let deleteNode = this.tail.prev; deleteNode != this.head; deleteNode = deleteNode.prev) {
            deleteNode.next.prev =   deleteNode.prev;
            deleteNode.prev.next =   deleteNode.next;
            return true;
        }
        return false;
    }
   /**
    * removeFromFront
    * @param {*} searchValue 
    * @returns 
    * Delete the first node after head
    */
    removeFromFront(searchValue) {
        for(let searchNode = this.head.next; searchNode != this.tail; searchNode = searchNode.next) {
            if(searchNode.value == searchValue) {

            }
        }
        return false;
    }

    printForward() {
        for(let current = this.head.next; current != this.tail; current = current.next) {
            console.log(current.value)
        }
    }
}

const sentinelList = new Sentinel();
// console.log("*************** Add Node from Back ****************");
sentinelList.addNodeBack(5);
sentinelList.addNodeBack(6);
sentinelList.addNodeBack(12);
// sentinelList.printForward();

console.log("**************** Add Node from Front *****************");
// sentinelList.addNodeFront(5)
// sentinelList.addNodeFront(6);
// sentinelList.addNodeFront(12);
//sentinelList.printForward();

// console.log("***************** Remove node ***********")
// sentinelList.removeValue(6);
// sentinelList.printForward(5);

console.log("***************** insert After node ***********")
sentinelList.insertAfter(6, 45);
sentinelList.insertBefore(5, 55);
sentinelList.insertBefore(12, 100)
sentinelList.printForward();

// console.log("***************** remove first & last***********")
// sentinelList.removeFirst();
// sentinelList.removeLast();
// sentinelList.printForward();

console.log("***********************Remove from front**********")
//55, 5, 6, 45, 100, 12
sentinelList.removeFromFront(6); //Expetced 45
sentinelList.printForward();
