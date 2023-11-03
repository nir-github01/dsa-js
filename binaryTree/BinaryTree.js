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


const tree = Array(10).fill(null);

function root(key){
  if(tree[0] ===null){
    tree[0] = key;
  }else{
    console.log("Tree already had root");
  }
}

function setLeft(key, parent){
  if(tree[parent] == null){
    console.log(`can't set child at ${parent * 2}`)
  }else{
    tree[(parent *2) + 1] = key;
  }
}

function setRight(key, parent){
  if(tree[parent] === null){
    console.log(`can't set child at ${(parent * 2)}`);
  }else{
    tree[(parent * 2) + 2] = key;
  }
}

function printTree() {
  for(let i=0; i < 10; i++){
    if(tree[i] != null){
      console.log(tree[i]);
    }else{
      console.log("_");
    }
  }
}

root("A");
setLeft("B", 0);
setRight("C", 0);
setLeft("D", 1);
setRight("E", 1);
setRight("F", 2);
printTree();