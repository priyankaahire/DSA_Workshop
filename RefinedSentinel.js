class Sentinel {

    constructor() {
        this.head       = {prev:null};
        this.tail       = {next:null};
        this.head.next  = this.tail;
        this.tail.prev  = this.head;
        this._count     = 0;
    }

    _addNode(node, value) {
        const newNode       = {value:value};

        newNode.prev        = node;
        newNode.next        = node.next;
        newNode.prev.next   = newNode.next.prev = newNode;
        this._count++;

        return true;
    }

    _searchNode(value) {
        for(let current = this.head.next; current != this.tail; current = current.next) {
           if (current.value == value)
              return current;
        }
        return null;
    }

    _removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this._count--;
        return true;
    }

    addToBack(value) { //* push
     this._addNode(this.tail.prev, value)
    }

    addToFront(value) { //* unshift
     this._addNode(this.head, value)
    }

    insertAfter(searchValue, insertValue) {
     const node = this._searchNode(searchValue);
     return node ? this._addNode(node, insertValue) : false;
    }
    
    insertBefore(searchValue, insertValue) {
     const node = this._searchNode(searchValue);
     return node ? this._addNode(node.prev, insertValue) : false;
    }

    removeFirst() { //* shift
     this._removeNode(this.head.next)
    }

    removeLast() { //* pop
    this._removeNode(this.tail.prev)
    }

    removeValue(value) {
     const node = this._searchNode(value);
     return node ? this._removeNode(node): false;
    }

    
    printForward() {
        for(let current = this.head.next; current != this.tail; current = current.next) {
            console.log(current.value);
        }
    }

    get count() {return this._count;}

}

let list = new Sentinel();
list.addToFront(4);
list.addToFront(1);
list.addToBack(5);
list.addToBack(3);
list.insertAfter(3, 10);
list.insertBefore(5, 300);
list.printForward();
console.log("After Removing");
list.removeFirst();
list.removeLast();
list.removeValue(3);
list.printForward();