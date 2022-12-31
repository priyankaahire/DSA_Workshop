class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const spot = new Node(value);

        if(this.head == null)
          this.head = spot;      //* First time , there is no nodes
        else
          this.tail.next = spot; //* Second time , connect privious node to the new one
        this.tail = spot         //* Track of tail is important other wise we loss middle data otherwise last elm always pointing to the head 
    }

    print() {
        for(let current = this.head; current != null; current = current.next){
            console.log("Current Place:", current.value)
        }
    }
}

const list = new List();
list.add("Church ke peeche");
list.add("Iron track - station");
list.add("Tal to the sky - airport");

list.print();
