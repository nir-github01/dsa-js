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

/** ########################################################## */
/***   How to insert a Node at the Front/ Begining of Linked List */

//Approach :
/** Need to insert a node at the start 
 * 
 * 1. Make the first node of linked list linked to the new node
 * 2. Remove the head from the original first node of linked List
 * 3. Make the new node as the Head of the Linked List
*/

//      function push(new_data)
//      {
//              var new_node = new Node(new_data);
//              new_node.next = head;
//              head = new_node;
//      }

     /*** How to insert a Node after a Given Node in Linked List */
     //Approach:
     //To  insert a node after a given node in a linked List, we need to:
/**
 * 
 * 1. Check if the given node exists or not 
 *    a) If it do not exists,
 *        i) terminate the process.
 *     b)If the given node exists,
 *         i) Make the element to be inserted as a new node 
 *         ii) Change the next pointer of given node to the new node
 *         iii) Now shift the original next pointer of given node to the next pointer
 *              of new node.
 */
             
        // function insertAfter(prev_node, new_data){
               
        //         if(prev_node ==null){
        //                 console.log("The given previous node cannot be null");
        //                 return;
        //         }
        //         /** 2. Allocate the Node & 3. Put in the data */
        //         var new_node = new Node(new_data);
        //         /**4 Make next of new Node as next of prev_node */
        //            new_data.next = prev_node.next;
        //         /**5. make next of prev_node as new_node */
        //            prev_node.next =new_node;   
        // }
         /** ################################################## */
        /** How to insert a Node at the End of Linked List  */
           /** 
            *   1. Go to the last node of the linked list 
            *   2. Change the next pointer of last node from NULL to the new node
            *   3. Make the next pointer of new node as NULL to show the end of 
            *      Linked List
            */
        // function append(new_data){
        //         /**Allocate the Node & 2. Put in the data 3. Set next as null */
        //         var new_node = new Node(new_data);
        //         /**4. If the Linked List is empty, then make the new node as head */
        //         if(head == null){
        //                 head = new Node(new_data);
        //                 return;
        //         }
        //         /**4. This new node is going to be the last node, so make next of 
        //          *     it as null  */
        //         new_node.next = null;
                
        //         /**5. Else traverse till the last node  */
        //         var last = head;
        //         while(last.next != null){
        //                 last = last.next;
        //         }
        //         /**6. Change the next of last node */
        //         last.next =new_node;
        //         return;
        // } 

        /*********************************************** */

        /**  Search an element in a Linked List (Iterative and Recursive) */

        // class Node{
        //         constructor(key){
        //                 this.key = key;
        //                 this.next = null; 
        //         }
        // }

        // //Class definition for Linked List
        // class LinkedList{
        //         constructor (){
        //                 this.head = null;
        //         }

        //         //Add a new node with key"new_key" at the beginning of the linked list
        //         push(new_key) {
        //                 let new_node = new Node(new_key);
        //                 new_node.next = this.head;
        //                 this.head = new_node;
        //         }
        // }

        // let llist = new LinkedList();
        // llist.push(10);
        // llist.push(30);
        // llist.push(11);
        // llist.push(21);
        // llist.push(14);

        // //Key to search for in the linked list
        // let x= 22;

        // //Create a temp variable to traverse the linked list
        // let temp = llist.head;

        // //Array to store the keys in the linked list 
        // let v = [];

        // //Traverse the linked list and store the keys in the array "v"

        // while(temp) {
        //         v.push(temp.key);
        //         temp= temp.next;
        // }

        // //Check if "x" is in the array "v"
        // if(v.includes(x)){
        //         console.log("YES");
        // }else{
        //         console.log("NO");
        // }

        
        /********************************** */

        /*** Find Length of a Linked List(Iterative and recursive )
         * 
         * An iterative approach for finding the length of the linked list
         * 
         * Follow the given steps to solve the problem:
         *
         * 1. Initialize count as 0;
         * 2. Initialize a node pointer, current = head
         * 3. Do following while current is not null 
         *     a) current = current -> next
         *     b) Increment count by 1
         * 4. Return count
         */


//         class Node {
//                 constructor(val) {
//                         this.data = val ;
//                         this.next =null;

//                 }
//         }
//         //Linked List class
//         var head; //head list
//         /** Insert a Node at front of the data */
//        function push(new_data){
//         //1 & 2 allocate the Node and put in the data 

//         var new_node = new Node(new_data);
//         //Make next of new Node as head
//         new_node.next = head;
//         head = new_node;
//        }

//        /** Returns count of nodes in linked list */
        
//        function getCountRec (node){
//         //Base case
//         if(node == null)
//                 return 0;
        
//         return 1 + getCountRec(node.next);
//        }

//        //Wrapper over  grtCountRec

//        function getCount(head){
//              return getCountRec(head);
//        }

//        //Driver code
        
//        push(1);
//        push(3);
//        push(1);
//        push(2);
//        push(1);
//        console.log("Count of node is " + getCount());


// Recursive javascript program to count number of nodes in
// a linked list
 
/* Linked list Node*/
// class Node {
//         constructor(val) {
//                 this.data = val;
//                 this.next = null;
//             }
//         }
     
//         // Linked List class
//         var head; // head of list
     
//         /* Inserts a new Node at front of the list. */
//         function push( new_data) {
//             /*
//              * 1 & 2: Allocate the Node & Put in the data
//              */
//             var new_node = new Node(new_data);
     
//             /* 3. Make next of new Node as head */
//             new_node.next = head;
     
//             /* 4. Move the head to point to new Node */
//             head = new_node;
//         }
     
//         /* Returns count of nodes in linked list */
//          function getCountRec(node) {
//             // Base case
//             if (node == null)
//                 return 0;
     
//             // Count is this node plus rest of the list
//             return 1 + getCountRec(node.next);
//         }
     
//         /* Wrapper over getCountRec() */
//          function getCount() {
//             return getCountRec(head);
//         }
     
//         /*
//          * Driver program to test above functions. Ideally this function should be in a
//          * separate user class. It is kept here to keep code compact
//          */
         
//             /* Start with the empty list */
         
//             push(1);
//             push(3);
//             push(1);
//             push(2);
//             push(1);
     
//             console.log("Count of nodes is " + getCount());

/** ############################################################## */

//Tail Recursive javascript program to count number of nodes in linked list

/** Linked List Node */

// class Node {
//         constructor(val){
//                 this.data = val;
//                 this.next = null;
//         }
// }
// //Linked List class

// var head; 
// /** Inserts a new Node at front of the list */

// function push(new_data){
//         var new_node = new Node(new_data);
        
//         new_node.next = head;

//         head = new_node;
// }

// function getCountRec(node,  count )
// {
//         if(node == null)
//                 return count;

//                 return getCountRec(node.next, count+1);
        
// }

// function getCount(){
//         return getCountRec(head, 0);
// }

// push(1);
// push(2);
// push(3);
// push(2);
// push(1);

// console.log("Count of node is" +" "+ getCount());