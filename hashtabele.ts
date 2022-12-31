import * as objectHash from 'object-hash';

class Entry<K, V>{
    public key: K;
    public value: V;
    public next?: Entry<K, V> | undefined;

    [offset: number | number]: Entry<K, V>
    constructor(k: K, v: V) {
        this.key = k;
        this.value = v;
        this.next = undefined;
    }

}
class Hashtable<K, V>{
    //* TABLE is an arry of 
    private table: Entry<K, V> | undefined[] = [];
    private size: number;
    //* creating table shoulb be entry type here is colliasain then we are not going to using open addressing we are going to use key value stru
    constructor(size: number = 10) {
        this.size = size;
        this.table = new Array(size);
    }
    //* THIS IS OUR 0(1)
    private hash(k: K): number {
        //this will give us some file 
        return parseInt(objectHash(new Object(k)), 16) % this.size
    }

    public put(k: K, v: V): boolean {
        const offset = this.hash(k)// find the bucket
        //once u found the bucket if may be u found the emement otherwise empty so put the for loop
        //now we r saying from from 1st
        for (let current: Entry<K, V> = this.table[offset]; current != undefined; current = current.next) {
            if (current.key == k) {
                current.value = v;
                return false; //! we did NOT insert a new value
            }
        }
        const newEntry = new Entry<K, V>(k, v);
        newEntry.next = this.table[offset];
        this.table[offset] = newEntry
        return false;

    }
    public print(): void {
        for (let offset = 0; offset < this.size; offset++) {
            console.log(`[${offset}]:`);
            let outString = '';
            for (let current = this.table[offset]; current != undefined; current != current.next) {
                outString += `{${current.key}:${current.value}}`
            }
            console.log(`[${offset}]:${outString}`);
        }
    }
}
const ht = new Hashtable<number, string>();
ht.put(224, "BigB");
ht.print();

