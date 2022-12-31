class Entry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class Hashtable {
    constructor(size=10) {
        this.size  = size;
        this.table = new Array(size)
    }
    hash(key) {
        return key % this.size
    }
    put(key, value) { //* key:224, value: "BigB"
     const offset           = this.hash(key);
     const newEntry         = new Entry(key, value)
     //*momB.next           = BigB
     newEntry.next          = this.table[offset];
     this.table[offset]     = newEntry;
     //this.table[offset]   = {key:key, value:value}
    }
    get(key) { //* O(1)
        const offset = this.hash(key);
        for(let current = this.table[offset]; current != null; current = current.next)
            if(key == current.key)
        return current.value;
    } 
    remove(key) {
        const offset = this.hash(key);

        let back = this.table[offset];
        for(let current = this.table[offset]; current; current = current.next) {
            if(key == current.key) {
                if(back == current)
                    this.table[offset] = current.next;
                else
                    back.next = current.next;
                return;
            }
            back = current
        }
    }

    print() {
        for(let i=0; i < this.table.length; i++) {
            //console.log(this.table[i])
            let output = "";
            output = `[${i}]: `;
            for(let current = this.table[i]; current; current = current.next) {
                output += `{${current.key}:${current.value}}`;
            }
            console.log(output)
        }
          //  console.log(`[${i}]:${this.table[i]?.key}:${this.table[i]?.value}`)
    }
}

const hf = new Hashtable();
hf.put(224, "BigB");
hf.put(420, "SmallB");
hf.put(533, "QueenB");
hf.put(420, "SmallB2");
hf.put(814, "MomB");
//hf.remove(533);
hf.print();