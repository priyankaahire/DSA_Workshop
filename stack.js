class Stack {
    constructor() {
        this.array = [];
        this.top = -1;
    }

    push(value) {
        try {
            this.array.push(value)
        } catch(e) {
            throw new Error("Stack overflow")
        }
    }

    pop() {
        try {
            return this.array.pop()
        } catch(e) {
           throw new Error("Stacl Underflow")
        }
    }

    get size() {
        return this.array.length;
    }
}

const plates = new Stack();
let i =0;
//for(let i = 0; i < 100; i++) {
    while(i < 0) {
        plates.push("Plates " + i);
        console.log("Add plates:", plates.array[i]);
        i++;
    }
   
//}
// while(plates.size != 0)
//     console.log("remove plates:", plates.pop());