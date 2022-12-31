class Node {
    constructor(value) {
        this.value = value;
        this.left  = null; //* new Node that's Why it is null
        this.right  = null; //* new Node that's Why it is null
    }
}

class Tree {
    constructor() {
        this.root = null; //? First Node 
        this.level = 0;
    }
     
    addNode(node, value) {
        if(node == null)  //* 0
           return new Node(value) //* 700*
        if(value > node.value)
            //~% using add we just creating the node and "=" sign connectiong to the node with mother and father  
            node.right = this.addNode(node.right, value)   
        else 
           //~% Child is create using add function but now mom wants her baby in her hand that why there is node.left = 
           node.left = this.addNode(node.left, value);    
        return node;
    }
    //~? Data abstractionn - don't show or accept internal data
    //~? only accept the value no node
    add(value) {
      this.root = this.addNode(this.root, value)
    }

    inOrder(node) { //* l -> N -> R
        //console.log(node);
        if(node == null) return;
        this.level++;
        this.inOrder(node.left);
        console.log(" ".repeat(this.level * 4) + node.value)
        //console.log(node.value)
        this.inOrder(node.right);
        this.level--;
        return;
    }

    preOrder(node) { //* N -> l -> R
     if(node == null) return;
     //
        //console.log(node.value)
        this.level++;
        console.log(" ".repeat(this.level * 6) + node.value)
        this.preOrder(node.left);
        this.preOrder(node.right); 
        this.level--;
     return;
    }

    postOrder(node) { //* l -> R -> N
     if(node == null) return;
     this.level++;
     this.postOrder(node.left) 
     this.postOrder(node.right)
     console.log(" ".repeat(this.level * 4) + node.value)
     this.level--;
     return;
    }

    //~? Data abstraction for print
    printTree() {
        console.log("************Pre Order***********");
        console.log(this.root);
        this.inOrder(this.root);
    }

    remove(value) {
        this.root = this.removeNode(this.root, value)
    }
    removeNode(node, value) {
        //~! Node was not found
        if(node == null) return null;

        //~* First find the node in the tree
        //* step1 1. 7 > 5
        //* step3. 7 > 7
         if(value > node.value) 
          //* step2
            node.right = this.removeNode(node.right, value) 
        else if(value < node.value)
            node.left =  this.removeNode(node.left, value)
        else {
             //* If value is equeal I.e you find the value then we need to go throught the below steps
            //~# 1. node has no children
             //* step4
            if(node.left == null && node.right == null) {
                console.log(`node ${node.value} left and right is null`);
                return null;
            }
            //~# 2. node has right child but left null
            if(node.right != null && node.left == null) {
                console.log(`Node ${node.value} left null`)
                return node.right;
            }
                
            //~#3. node has left child but right null
            if(node.left != null && node.right == null) {
                console.log(`Node ${node.value} right null`)
                return node.left;
            }
            
            //~# 4. Both childeren present
            //* We are assiging value 9 node to the successor
            let successor = node.right; //~* First we assigned it then start our exicution
            console.log("successor is", successor)
            while(successor.left != null) {
                //not null then left as sucessor 
                successor = successor.left
            }
                //~* Steal his value
                console.log("successor value is", successor.value);
                console.log("whats is node before assign successor to it", node.value)
                node.value   = successor.value;

            //! Now quietly kill the successor
            value = successor.value;
        node.right = this.removeNode(node.right, value);
        console.log("This is what we want to", node.right);

        }
        return node;
    }
}

const ped = new Tree();

ped.add(5)
ped.add(1)
ped.add(7)
ped.add(6)
ped.add(9)
ped.printTree();
console.log("After removing");
ped.remove(7);
ped.printTree();
// const ped2 = new Tree();
// ped2.add(4)
// ped2.add(2)
// ped2.add(5)
// ped2.add(1)
// ped2.add(3)
// ped2.printTree();
// const ped3 = new Tree();
// ped3.add(1)
// ped3.add(5)
// ped3.add(6)
// ped3.add(7)
// ped3.add(9)
// ped3.printTree()

