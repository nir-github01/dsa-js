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

/*********** ((((((((((((((((((((())))))))))))))))))))) */

/**@abstract
 *  Implements two stacks in an array
 * 
 * $$ following functions must be supported by two Stacks
 *  1. push1(int x)-> pushes x to first stack
 *  2. push2(int x) -> pushes x to second stack
 *  3. pop1() -> pops an element from first stack and return the popped element
 */

// class twoStacks {
//     //constructor 
//     constructor(n) {
//         this.arr = new Array(n);
//         this.size = n;
//         this.top1 = Math.floor(n/2) + 1;
//         this.top2 = Math.floor(n/2);
//     }
//     //Method to push an element x to stack1
//     push1(x)
//     {
//         if(this.top1 > 0){
//             this.top1 --;
//             this.arr[this.top1] = x;
//         }else{
//             console.log("stack overflow" + "By element:"+" " + x );
//             return ;
//         }
//     }

//     push2(x){
//         if(this.top2 < this.size - 1)
//         {
//             this.top2++;
//             this.arr[this.top2] = x;
//         }else{
//             console.log("Stack is over flow " + "By element" + ":"+" "+ x);
//             return ;
//         }
//     }

//     pop1()
//     {
//         if(this.top1 <= this.size /2){
//             let x = this.arr[this.top1];
//             this.top1++;
//             return x;
//         }else{
//             console.log("Stack is under flow");
//         }
//         return 0;
//     }

//     pop2()
//     {
//         if(this.top2 >= Math.floor(this.size /2) + 1){
//             let x = this.arr[this.top2];
//             this.top2--;
//             return x;
//         }else{
//             console.log("Stack Under flow");
//         }
//         return 1;
//     }
// }

// let ts = new twoStacks(5);

// ts.push1(5);
// ts.push2(10);
// ts.push2(15);
// ts.push1(11);
// ts.push2(7);
// console.log("Popped element from stack1 is "
//                  + " : " +  ts.pop1() +"<br>");
// ts.push2(40);
// console.log("Popped element from stack2 is "
//                  + ": " +  ts.pop2()
//                  +"<br>");


/** 
 * Approach - 2
 */

// class TwoStacks {
//     //constructor 
//     constructor(n){
//         this.arr = Array(n).fill(0);
//         this.size = n;
//         this.top1 = -1 ;
//         this.top2 = this.size;
//     }

//     push1(x) {
//         if(this.top1 < this.top2 - 1){
//             this.top1++;
//             this.arr[this.top1] = x;
//         }else{
//             console.log("Stack OverFlow");
//             System.exit(1);
//         }
//     }

//     push2(x) {
//         if(this.top1 < this.top2 - 1)
//         {
//             this.top2--;
//             this.arr[this.top2] = x;
//         }else{
//             console.log("Stack Overflow");
//             System.exit(1);
//         }
//     }

//     pop1()
//     {
//         if(this.top1 >= 0){
//             var x = this.arr[this.top1];
//             this.top1--;
//             return x;
//         }else{
//             console.log("Stack UnderFlow");
//             System.exit(1);
//         }
//         return 0;
//     }

//     pop2() {
//         if(this.top2 < this.size){
//             var x = this.arr[this.top2];
//             this.top2++;
//             return x;
//         }else{
//             console.log("Stack underFlow");
//             System.exit(1)
//         }
//         return 0;
//     }
// }


// var ts = new TwoStacks(5);
// ts.push1(5);
// ts.push2(10);
// ts.push2(15);
// ts.push1(11);
// ts.push2(7);
// console.log("Popped element from" + " stack1 is " + ts.pop1());
// ts.push2(40);
// console.log("\n Popped element from" + " stack2 is " + ts.pop2());


