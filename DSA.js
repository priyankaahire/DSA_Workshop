//~* Data Structure
//* Data Striucture is  'Collection of data'
//* Way of storing data
//*        Convenient for retrieving and manipulating
//* [Telephone Dir: name -> number but NOT number->name]


//~%  Data Structures
//% 1. Array
//% 2. Linked List
//%    Single
//%    Double
//%    Circular
//% 3. Tree
//%    Binary Tree
//%    Binary Serach Tree
//!    B-Tree
//!    Trie
//!    AVL Tree
//!    RBT Tree
//% 4. Stack
//% 5. Queue
//% 6. Hashtable

function randomNumber(findEle) {
    let max = 100000;
    let min = 1;
    let arr = [1, 2, 4, 5]
    let randomArr = [];
    for(let i =12; i < 1000; i++) {
        let randomeEl =  arr[Math.floor(Math.random() * arr.length)];
        randomArr.push(randomeEl)
    }
    console.log(randomArr)
}
randomNumber(1234);