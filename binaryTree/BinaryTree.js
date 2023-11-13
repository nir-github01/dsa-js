// class Node{
//   constructor(val){
//     this.key = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// var root = null;

// root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left=new Node(4);
// root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);
// console.log(root)


// const tree = Array(10).fill(null);

// function root(key){
//   if(tree[0] ===null){
//     tree[0] = key;
//   }else{
//     console.log("Tree already had root");
//   }
// }

// function setLeft(key, parent){
//   if(tree[parent] == null){
//     console.log(`can't set child at ${parent * 2}`)
//   }else{
//     tree[(parent *2) + 1] = key;
//   }
// }

// function setRight(key, parent){
//   if(tree[parent] === null){
//     console.log(`can't set child at ${(parent * 2)}`);
//   }else{
//     tree[(parent * 2) + 2] = key;
//   }
// }

// function printTree() {
//   for(let i=0; i < 10; i++){
//     if(tree[i] != null){
//       console.log(tree[i]);
//     }else{
//       console.log("_");
//     }
//   }
// }

// root("A");
// setLeft("B", 0);
// setRight("C", 0);
// setLeft("D", 1);
// setRight("E", 1);
// setRight("F", 2);
// printTree();


// class Node {
//   constructor(data) {
//     this.data = data;
//     this.right = null; 
//     this.left = null;
//     this.count = 0;
//   }
// }

// class BST {
//   constructor(){
//     this.root = null;
//   }
//  insert(data){
//   var newNode = new Node(data);
//   if(this.root === null){
//     this.root = newNode;
//   }else{
//     this.insertNode(this.root, newNode)
//   }
//  }
//  insertNode(node, newNode){
//   if(newNode.data < node.data){
//     if(node.left === null){
//       node.left = newNode;
//     }else{
//       this.insertNode(node.left, newNode)
//     }
//   }else{
//     if(node.right === null){
//       node.right = newNode;
//     }else{
//       this.insertNode(node.right, newNode);
//     }
//   }
//  }
// }

// let tree = new BST();
// tree.insert(8);
// tree.insert(2);
// tree.insert(11);
// tree.insert(4);
// tree.insert(9);
// tree.insert(6);

// console.log( tree)


class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
    this.count = 0;
  };
};

class BST {
  constructor() {
    this.root = null;
  }
  create(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    };
    let current = this.root;

    const addSide = side => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      };
      current = current[side];
    };

    while (true) {
      if (val === current.val) {
        current.count++;
        return this;
      };
      if (val < current.val) addSide('left');
      else addSide('right');
    };
  };
};

let tree = new BST();
tree.create(10);
tree.create(4);
tree.create(4);
tree.create(12);
tree.create(2);
console.log(tree);