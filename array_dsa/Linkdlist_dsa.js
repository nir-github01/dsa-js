// class Node {
//     constructor(){
//       this.data = null;
//       this.next = null;
//     }
// }

// class NodeOperation{
//     //Function to add a new node
//        pushNode(headRef, dataVal){
//         // Allcode node
//           const newNode = new Node();
//           //Put in the data

//           newNode.data = dataVal;
//           //Link the old list odf the new node
//            newNode.next = headRef[0];
//            //move the head to point to the new node
//             headRef[0] = newNode;
//        }
// }

// //Driver Code 
//  const head = [null];
//  const temp = new NodeOperation();
//  for(let i=5; i> 0; i--){
//     temp.pushNode(head, i);
//  }

//  const v = [];
//  let curr = head[0];
//  while(curr !== null) {
//     v.push(curr.data);
//     curr= curr.next;

//  }

//  var middle = Math.floor(v.length/2);
//  console.log("Middle Value of Linked List is : " + v[middle]);

// var head ; //head of the linked list.

// /** Linked list node */

// class Node {
//     constructor(val) {
//         this.data = val; 
//         this.next = null;
//     }
// }

// /** Function to add a new node */

// function pushNode(new_data) {
//     var new_node = new Node(new_data);
//     new_node.next = head; 
//     head = new_node;
// }

// /**
//  * This function prints contents of linked List starting from the given node
//  */

// function printNode() {
//     var tnode = head; 
//     while(tnode != null){
//         console.log(tnode.data + " ->");
//         tnode = tnode.next;
//     }
//     console.log("NULL <br/>")
// }

// function getLen() {
//     let length = 0;
//     var temp = head;
//     while(temp != null){
//         length += 1;
//         temp = temp.next;
//     }
//     return length;
// }

/** Printing the middle elenment of the list  */

// function printMiddle(){
//     if(head != null ){
//         let length = getLen();
//         var temp = head;
//         let middleLength = length/2;
//         while(parseInt(middleLength) != 0){
//             temp = temp.next;
//             middleLength--;
//         }
//         console.log("The middle element is [" +temp.data+"]")
//     }
// }

// for(let i=5; i >=1; --i){
//     pushNode(i);
//     printNode();
//     printMiddle(); 
// }

/******************************* */
/** counts the number of times a given int occurs in a linked list 
 * 
 * Method 1- without recursion
 * 
 * Algorithm
 * 
 * step 1 - start
 * step 2 - Create a function of linked list, Pass a number as arguments and provide.
 *          The count of the number to the function
 * step 3 - Intialize count equal to 0;
 * step 4 - Traverse in linked list until equal number found
 * step 5 - If found a number equal to update count by 1.
 * step 6 - After reaching the end of the linked list return count.
 * step 7 - Call the function.
 * step 8 - Prints the number of Int occurrencess
 * step 9 - stop.
 * 
 *
*/


// var head;
// class Node {
//     constructor(val){
//        this.data = val; 
//        this.next = null;
//     }
// }

// /** Inserts a new Node at front of the list */

// function push (new_data){
//     /**
//      * 
//      * 1 & 2: Allocate the Node & put in the data
//      */

//     new_node = new Node (new_data);
//     /** Make next of new Node as head  */

//     new_node.next = head;

//     /**4. Move the head to point to new Node */
//     head = new_node;
// }

// /** 
//  * Counts the no. of occurrences of a node (search for) in a line 
//  */

// function count(search_for) 
// {
//     current = head; 
//     var count = 0; 
//     while(current != null){
//         if(current.data == search_for){
//             count++;
//         }
//         current = current.next;
//     }
//     return count;
// }

// /** Driver code */

// /**
//  * Use push() to constructor below list 
//  */

// push(1);
// push(2);
// push(1);
// push(3);
// push(1);

// console.log("Count of 1 is" + count(1));

/** ################################################### */

//Method 2 - with recursion
/** 
 * Algorithm
 * 
 * count(head, key);
 * if head is NULL
 * return frequency
 * if(head->data == key)
 * increase frequecy by 1
 * count(head -> next, key);
 */

// class Node {
//     constructor(val) 
//     {
//         this.data = val;
//         this.next = null;
//     }
// }

// //Global variable for counting frequency of given element k

// let frequency = 0;

// /** Given a reference (pointer to pointer)  to the head of a list and an int, push a 
//  * new node on the front of the list
// */

// function push(head, new_data){
//     //Allocate node
//     let new_node = new Node(new_data);
//     //Link the old list of the new node

//     new_node.next = head;
//     //Move the head to point to the new node
//     head = new_node;
//     return head;
// }

// /** Count the no. of occurrences of a node (search for) in a list (head) */
// function count(head, key){
//     if(head== null){
//         return frequency;
//     }
//     if(head.data == key ){
//         frequency++;
//     }
//     return count(head.next, key);
// }

// //Driver code

// //Start with the empty list
// let head = null;
// /** Use push() to construct below list */

// head = push(head, 1);
// head = push(head, 3);
// head = push(head, 1);
// head = push(head, 2);
// head = push(head, 1);

// /** Check the count function  */

// console.log("Count of 1 is " + " " + count(head, 1));
