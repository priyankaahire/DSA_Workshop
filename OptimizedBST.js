class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.level = 0;
    }

    add(value) { //*value in the closure

        function addNode(node) { //* We need to pass ONLY node and not value repeatedly
            if(node == null) return new Node(value)

            if(value > node.right)
                node.right  =  addNode(node.right, value)
            else
                node.left   =   addNode(node.left, value)

            return node;

        } //End addNode
        this.root = addNode(this.root, value)
        
    }// End add
    remove(value) { //* Vlaue in thr clouser

        function removeNode(node) { //* We need to pass ONLY node and not value repeadtedly
            
            //~! Node is not found
            if(node == null) return null;
            //~* First find the node in the tree
            if(value > node.value)
                node.right = removeNode(node.right, value)
            else if(value < node.value)
                node.left = removeNode(node.left, value)
            else {
                //* Found the value

                //~# 1. If max one child
                if(!node.left || !node.right);
                    return node.left ?? node.right;

                //~# 2. If Both childeren present
                //* If It is successor   the next left  of right side node
                //* If it is predecessor the next right of left  side node
                //* let predecessor = node.left;
                while(successor.left != null)
                    successor = successor.left;

                //~* Steal his value
                node.value = successor.value;

                //~! Now quickely kill the successor
                value = successor.value;
                node.right = removeNode(node.right, successor.value)
            }
            return node;
        }
        this.root = removeNode(this.root, value)
    }// End Remove
    printTree() {
        let level = 0; //level in the clouser

        function print(node) {
            if(node == null) return ;

            level++;

            //! 1
            print(node.right);

            //*2 -Node

            console.log(" ".repeat(level* 4) + node.value)

            //! 3
            print(node.left);
            level--;

        }
        print(this.root);

    }//End Print Tree
}// End Tree Class

const ped = new Tree();
ped.add(4);
ped.add(6);
ped.add(1);
ped.add(200);
ped.add(123);
ped.add(123);
ped.add(3);
ped.add(2);
ped.add(30);
ped.printTree();
ped.remove(123);
ped.printTree();
