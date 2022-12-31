class SentinelLinkedListRefined {

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

    addToBack(...values) { //* push
     values.forEach(value => this._addNode(this.tail.prev, value));
    }

    addToFront(...values) { //* unshift
     values.forEach(value => this._addNode(this.head, value));
    }

    insertAfter(searchValue, ...insertValues) {
        const node = this._searchNode(searchValue);
        if(!node) return false;
        insertValues.forEach(insertValue => this._addNode(node, insertValue))
        return true;
    }
    
    insertBefore(searchValue, ...insertValues) {
        const node = this._searchNode(searchValue);
        if(!node) return false;
        insertValues.forEach(insertValue => this._addNode(node.prev, insertValue));
        return true;
    }

    removeFirst() { //* shift
     this._removeNode(this.head.next)
    }

    removeLast() { //* pop
    this._removeNode(this.tail.prev)
    }


    removeValues(...values) { //! 100 values to delete
        // values.forEach(value =>  { //! will happens 100 million times !!!
        //     const node =  this._searchNode(value) //! Highly unoptimized (1 million)
        //     this._removeNode(node)
        // })
        const removed = [];
        for(let current = this.head.next; current != this.tail; current = current.next) { //~* 1 Million search only
            if(values.includes(current.value)) {
                removed.push(current.value);
                current = current.prev;
                this._removeNode(current.next);
            }
        }
        return removed;
    }

    //~* generator ~give the values to the caller and let called decide
    *values() {
        for(let current = this.head.next; current != this.tail; current = current.next) {
             yield current.value;
        }
    }
    removeNextValue(value) {
        const node = this._searchNode(value);
        return node?.next != this.tail ? this._removeNode(node.next) :  false;
    }
    removePrevValue(value) {
        const node = this._searchNode(value);
        return node?.prev != this.head ? this._removeNode(node.prev) :  false;
    }
    printForward() {
        for(let current = this.head.next; current != this.tail; current = current.next) {
            console.log(current.value);
        }
    }

    get count() {return this._count;}

}

let list = new SentinelLinkedListRefined();
list.addToFront(1, 3, 4, 5);
list.addToBack(100, 200, 300, 400);
// list.insertAfter(3, 10, 45, 67);
// list.insertBefore(5, 700, 90, 67, 45);
//list.printForward();
list.addToBack({id:1, name:"Brendan"});
list.addToBack(true);
console.log("After Removing");
// list.removeFirst();
// list.removeLast();
// list.removeNextValue(400);
// list.removePrevValue(200);
let removeResult = list.removeValues(4, 5, 300)
console.log({removeResult})
//list.printForward();

for(let val of list.values()) {
console.log({val})
}