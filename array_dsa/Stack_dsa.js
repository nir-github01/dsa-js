// var t = -1;
// var MAX = 1000;
// var a = Array(MAX).fill(0);

// function  isEmpty() {
//     return (t < 0);
// }

// function push(x){
//     if(t >= (MAX - 1)){
//         console.log("Stacki Overflow");
//         return false;
//     }else{
//         t += 1;
//         a[t] = x;
//         console.log(x + "Pushed into stack ");
//         return true
//     }
// }

// function pop() {
//     if(t < 0) {
//         return 0;
//     }else{
//         var x = a[t];
//         t -=1;
//         return x;
//     }
// }

// function peek() {
//     if(t < 0) {
//         console.log("Stack Underflow");
//         return 0;
//     }else{
//         var x = a[t];
//         return x;
//     }
// }

// function print() {
//     for(let i=0; i> -1; i--){
//         console.log(" " + a[i]);
//     }
// }

// push(10);
// push(20);
// push(30);
// console.log(pop() + "Poped from stack");
// console.log("Top element is" + peek());
// console.log("Element present in stack ");
// print();

/**  Another approach */

// var root; 
//  class StackNode {
//     constructor(data) {
//         this.data = data;
//         this.next = null;

//     }
//  }

//  function isEmpty(){
//     if(root == null){
//         return true;
//     }else{
//         return false
//     }
//  }
//  function push(data) {
//     var newNode = new StackNode(data) ;
//     if(root == null ){
//         root = newNode;
//     }else{
//         var temp = root;
//         root = newNode;
//         newNode.next = temp;
//     }
//     console.log(data + "pushed to stack node");
//  }

//  function pop() {
//     var popped = Number.MIN_VALUE;
//     if(root == null) {
//             console.log("Stack is empty");
//     }else{
//         popped = root.data;
//         root = root.next;
//     }
//     return popped;

// }

// function peek() {
//     if(root ==null) {
//         console.log("Stack is empty");
//         return Number.MIN_VALUE;
//     }else{
//         return root.data;
//     }
// }

// push(10);
// push(20);
// push(30);
// console.log(pop() + "Popped from stack ");
// console.log("Top element is " + peek());