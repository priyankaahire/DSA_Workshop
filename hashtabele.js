"use strict";
exports.__esModule = true;
var objectHash = require("object-hash");
var Entry = /** @class */ (function () {
    function Entry(k, v) {
        this.key = k;
        this.value = v;
        this.next = undefined;
    }
    return Entry;
}());
var Hashtable = /** @class */ (function () {
    //* creating table shoulb be entry type here is colliasain then we are not going to using open addressing we are going to use key value stru
    function Hashtable(size) {
        if (size === void 0) { size = 10; }
        //* TABLE is an arry of 
        this.table = [];
        this.size = size;
        this.table = new Array(size);
    }
    //* THIS IS OUR 0(1)
    Hashtable.prototype.hash = function (k) {
        //this will give us some file 
        return parseInt(objectHash(new Object(k)), 16) % this.size;
    };
    Hashtable.prototype.put = function (k, v) {
        var offset = this.hash(k); // find the bucket
        //once u found the bucket if may be u found the emement otherwise empty so put the for loop
        //now we r saying from from 1st
        for (var current = this.table[offset]; current != undefined; current = current.next) {
            if (current.key == k) {
                current.value = v;
                return false; //! we did NOT insert a new value
            }
        }
        var newEntry = new Entry(k, v);
        newEntry.next = this.table[offset];
        this.table[offset] = newEntry;
        return false;
    };
    Hashtable.prototype.print = function () {
        for (var offset = 0; offset < this.size; offset++) {
            console.log("[".concat(offset, "]:"));
            var outString = '';
            for (var current = this.table[offset]; current != undefined; current != current.next) {
                outString += "{".concat(current.key, ":").concat(current.value, "}");
            }
            console.log("[".concat(offset, "]:").concat(outString));
        }
    };
    return Hashtable;
}());
var ht = new Hashtable();
ht.put(224, "BigB");
ht.print();
