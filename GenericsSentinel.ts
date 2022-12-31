//* Template or Generics
//* TYPE is provided to complier and it substitutes in the class
//* type Nullable<U> = u | null; //~* It can be any Varibale instaed of 'T'
namespace Collection {
    type Nullable<T> = T | null;
    class Node<T> {
        public prev: Nullable<Node<T>> = null;
        public value?: T; //! It is optional because when we create dummy head n tail that time we are not passing value
        public next : Nullable<Node<T>> = null;

        public constructor(value?: T) {
            this.value = value;
        }
    }

    export class List<TYPE> {
        private head: Node<TYPE> = new Node<TYPE>()
        private tail: Node<TYPE> = new Node<TYPE>();
        private count:  number = 0;

        public constructor() {
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }
        private addNode(node:Nullable<Node<TYPE>>, value: TYPE) {
          const newNode = new Node<TYPE>(value);

          newNode.prev = node;
          newNode.next = node!.next;

          newNode.prev!.next = newNode.next!.prev =newNode;
          this.count++;

          return newNode;

        }

        public searchNode(value:TYPE) {
            for(let current = this.head.next; current != this.head; current = current!.next) {
                if(current!.value == value)
                  return current
            }
            return false;
        }

        public removeNode(node:Nullable<Node<TYPE>>) {

            node!.prev!.next = node!.next // Find node next node we assign it to find node prev's next
            node!.next!.prev = node!.prev;
            this.count--;

            return true;
        }
        public addToBack(value: TYPE) {
          this.addNode(this.tail.prev, value);
          return true;
        }

        public addToFront(value: TYPE) {
            this.addNode(this.head, value)
            return true;
        }

        public insertAfter(serachValue:TYPE, insertValue:TYPE) {
            const node  = this.searchNode(serachValue);
            return node ? this.addNode(node, insertValue) : false;
        }
        
        public insertBefore(serachValue: TYPE, insertValue: TYPE) {
            const node  = this.searchNode(serachValue);
            return node ? this.addNode(node.prev, insertValue) : false;
        }

        public removeFirst() {
            this.removeNode(this.head.next);
        }

        public removeLast() {
            this.removeNode(this.tail.prev);
        }

        public removeNextValue(value: TYPE) {
            const node = this.searchNode(value);
            if(!node) return false;
            return node.next != this.tail ? this.removeNode(node.next) : false;
        }

        public removePrevValue(value: TYPE) {
            const node = this.searchNode(value);
            if(!node) return false;
            return node.prev != this.head ? this.removeNode(node.prev) : false;
        }
        public printForward() {
            for(let current = this.head.next; current != this.tail; current = current!.next) {
                console.log(current?.value)
            }
        }
    }


    let listStr =  new Collection.List<string>();
    //list.addToBack(5) //! It will give me an error because iT is saying I want String because u added Type as "String"
    listStr.addToBack("Brendan");
    listStr.addToBack("Javascript");
    listStr.printForward();

    console.log("****************************************")
    let listNum = new Collection.List<Number>();
    listNum.addToFront(3);
    listNum.addToFront(2);
    listNum.addToFront(1);
    listNum.addToBack(4);
    listNum.addToBack(5);
    listNum.addToBack(6);
    listNum.addToBack(7);
    listNum.insertAfter(5, 500);
    listNum.insertBefore(4, 400);
    listNum.removeFirst();
    listNum.removeLast();
    listNum.removeNextValue(2);
    listNum.removePrevValue(400)
    listNum.printForward();
}