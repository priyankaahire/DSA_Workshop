namespace Colleaction {
    type Nullable<T> = T | null;
    class Node<T> {
        public prev: Nullable<Node<T>> = null;
        public value?: T;
        public next: Nullable<Node<T>> = null;

        public constructor(values?: T) {
         this.value = values
        }
    }



    export class List<T> {
        private head: Node<T> = new Node<T>();
        private tail: Node<T> = new Node<T>();
        private count: number = 0;

        public constructor() {
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }

        private addNode(node:Nullable<Node<T>>, value: T) {
            const newNode = new Node<T>(value);

            newNode.prev = node;
            newNode.next = node!.next;

            newNode!.prev!.next = newNode.next!.prev = newNode;
            this.count++;

            return true;
        }

        private serachNode(value:T) {
           for(let serachNode = this.head.next; serachNode != this.tail; serachNode = serachNode!.next) {
                if(serachNode!.value == value)
                  return serachNode;
           }
           return false;
        }

        private removeNode(node:Nullable<Node<T>>) {
            node!.prev!.next = node!.next // Find node next node we assign it to find node prev's next
            node!.next!.prev = node!.prev;
            this.count--;

            return true;
        }
       
        public addToFront(...values:T[]) {
          values.forEach(value => this.addNode(this.head, value))
        }

        public addToBack(...values:T[]) {
            values.forEach(value => this.addNode(this.tail.prev, value))
        }
        
        public insertAfter(serachValue:T, ...values:T[]) {
            const node = this.serachNode(serachValue);
            if(!node) return false;
            values.forEach(insertValue => this.addNode(node.next, insertValue))
            return true;
        }
        public insertBefore(serachValue:T, ...values:T[]) {
            const node = this.serachNode(serachValue);
            if(!node) return false;
            values.forEach(insertValue => this.addNode(node.prev, insertValue))
        }

        public removeFirst() {
            this.removeNode(this.head.next);
        }

        public removeLast() {
            this.removeNode(this.tail.prev);
        }

        public removeNextNode(value:T) {
            const node = this.serachNode(value);
            if(!node) return false;
            return node!.next != this.tail ? this.removeNode(node!.next) :  false;
        }

        public removePrevNode(value:T) {
            const node = this.serachNode(value);
            if(!node) return false;
            return node!.prev != this.head ? this.removeNode(node!.prev) : false;
        }
        public removeValues(...values:T[]) {
            const removed = [];
            for(let current = this.head.next; current != this.tail; current = current!.next) {
               // if(values) return false;
                if(values.includes(current?.value)) {
                    removed.push(current?.value);
                    current = current!.prev;
                    this.removeNode(current!.next);
                }
            }
            return removed;
        }

        public printForward() {
            for(let current = this.head.next; current != this.tail; current = current!.next ) {
             console.log(current?.value)
            }
        }


    } //End List



let list = new Colleaction.List<Number>();
list.addToFront(5, 4, 3, 2, 1);
list.addToBack(500, 400, 300, 200, 100);
list.insertAfter(4, 700, 800);
list.insertBefore(5, 333, 55);
list.removeFirst();
list.removeLast();
let result = list.removeValues(3,2,300,100);
console.log({result})

list.printForward();

}//End collection