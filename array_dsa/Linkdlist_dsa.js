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

/** #################################################### */
/** Follow the steps below to solve the problem
 * 
 * 1. Initialize three pointers prev as NULL, curr as head, and next as NULL
 * 2.Iterate through the linked list, In a loop, do the following
 *   a) Before changing the next of curr, store the next node
 *       i) next = curr -> next
 *   b) Now update the next pointer of curr to the prev
 *      ii) curr -> next = prev
 *   c) Update prev as curr and curr as next
 *       i)  prev = curr
 *       ii) curr = next
 */
// var head;

// class Node{
//      constructor(val){
//           this.data = val;
//           this.next = null;
//      }
// }

// /** Function to reverse the linked list */

// function reverse(node){
//      var prev = null;
//      var current = node;
//      var next = null;

//      while(current != null){
//           next = current.next;
//           current.next = prev;
//           prev = current;
//           current = next;
//      }
//      node  = prev ;
//      return node ;

// }

// /** Print content of double linked list */

// function printList(node)
// {
//      while(node !=null){
//           console.log(node.data + " ");
//           node = node.next;
//      }
// }

// //Driver code 
// head = new Node(85);
// head.next = new Node(15);
// head.next.next = new Node(4);
// head.next.next.next = new Node(20);

// console.log("Given linked List");
// printList(head);
// head = reverse(head);
// console.log("\n");
// console.log("Reversed linked list \n");
// printList(head);

/** $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

/** Reverse Linked List Using Recursion 
 * 
 * 1. Divide the list in two parts - first node and rest of the linked list
 * 2. Call reverse for the rest of the linked list
 * 3. Link the rest linked list to first
 * 4. Fix head pointer to NULL
*/


// var head;
// class Node{
//      constructor(val){
//           this.data = val;
//           this.next = null;
//      }
// }

// function reverse(head){
//      if(head == null || head.next == null){
//           return head;
//      }

//      /** 
//       * reverse the list and put the first element at the end
//       */

//      var rest = reverse(head.next);
//      head.next.next = head;

//      head.next = null;

//      //fix the head pointer

//      return rest;
// }

// /** Function to print linked list */

// function print() {
//      var temp = head;
//      while(temp != null){
//           console.log(temp.data + " ");
//           temp = temp.next;
//      }

// }

// function push(data) {
//      temp = new Node(data);
//      temp.next = head;
//      head = temp;
// }

// //Driver code

// push(20);
// push(4);
// push(15);
// push(85);

// console.log("Given linked list")
// print();
// head = reverse(head);
// console.log("Reversed Linked List");
// print();

/*** ###################################### */

/**
 * 1. First update with next node of current i.e next = current-> next;
 * 2. Now make a reverse link from current node to previous 
 * node curr->next = prev
 * 3. If the visited node is the last node then just make a reverse
 *   link from the current node to previous node and update
 *   head.
 */

// var head ;
// class Node{
//      constructor(val) {
//           this.data = val;
//           this.next = null;
//      }
// }

// /** 
//  * A simnple and tail recursive function to reverse a linked list. prev is passed 
//  * as NULL initially
//  */

// function reverseUtil(curr, prev){
//      /** If head is initially null OR list is empty */
//           if(head == null){
//                return head;
//           }
//           /** If last node mark it head */
//           if(curr.next == null){
//                head = curr;

//                /** Update next to prev node */

//                curr.next = prev;
//                return head;
//           }

//         /** Save curr-> next node for recursive call */
//         var next1 = curr.next;
        
//         /** and Update next .... */

//         curr.next = prev;

//         reverseUtil(next1, curr);
//         return head;
// }

// //prints content of var linked list
// function printList(node){
//      while(node != null){
//           console.log(node.data + " ");
//           node = node.next;
//      }
// }

// //Driver code
// var head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next= new Node(4);

// console.log("Original linked list");
// printList(head);
// var res = reverseUtil(head, null);
// console.log("Reversed linked list");
// printList(res)


/** ########################################### */

/**
 * Reverse a linked list using Stack
 * 
 * 1. Store the nodes (values and address) in the stack until all
 *    the values are entered.
 * 2. Once all entries are done, Update the Head pointer to the 
 *    last location (i.e. the last value).
 * 3. Start popping the nodes (value and address) and store
 *     them in the same order until the stack is empty.
 * 4. Update the next pointer of last Node in the stack by NULL.
 */


// class Node{
//      constructor(val){
//           this.data = val;
//           this.next = null;
//      }
// }

// var head = null; 

//Function to reverse the linked list

// function reverseLL()
// {

//      //Create a stack "s" of Node type

//      var s = [];
//      var temp =  head;
//      while(temp.next != null){
//           s.push(temp);
//           temp = temp.next;
//      }

//      head = temp;
//      while(s.length !=0)
//      {
//           /**
//            * Store the top value in list
//            */

//           temp.next = s.pop();

//           /**
//            * Update the next pointer in the list
//            */

//           temp = temp.next;
//      }
//      temp.next = null;

// }

// //Function to Display the elements in list

// function printList (temp){
//      while(temp != null){
//           console.log(temp.data + " ");
//           temp = temp.next;
//      }
// }

// //Program to insert back of the linked list

// function insert_back(value) {

//      var temp = new Node();
//      temp.data = value;
//      temp.next = null;

//      //If *head equals to null
//      if(head == null){
//           head = temp;
//           return;
//      }else{
//           var last_node = head; 
//           while(last_node.next != null)
//           {
//                last_node = last_node.next;
//           }
//           last_node.next = temp;
//           return;
//      }
// } 

// insert_back(1);
// insert_back(2);
// insert_back(3);
// insert_back(4);
// console.log("Given linked list\n");
// printList(head);
// reverseLL();
// console.log("<br/>Reversed linked list\n");
// printList(head);


/** ############################################ */

/**
 * Delete from a Linked List
 * 
 * delete an element in a list from
 * 
 * 1. Beginning
 * 2. End
 * 3. Middle
 */

/**
 * 1. Delete from Beginning
 * 
 * point head to the next node i.e. second node
 *  temp = head
 *   head = head -> next
 * 
 * Make sure to free unused memory
 * 
 *   free(temp); or delete temp;
 * 
 *   ## Delete from End
 * 
 * Point head to the previous element i.e. last second element
 * 
 *      Change next pointer to null
 *      struct node *end = head;
 *      struct node *prev = NULL
 *      while(end -> next)
 *      {
 *          prev = end;
 *          end = end -> next;
 *      }
 *      prev ->next = NULL
 * 
 * Make sure to free unused memory
 *     free(end); or delelte end;
 * 
 * 3) Delete from Middle:
 * 
 * 
 *     Keeps track of pointer before node to delete node and pointer 
 *      to node to delete
 * 
 *          temp = head;
 *          prev = head;
 *           for(int i=0; i < position; i++)
 *           {
 *               if(i==0 && position ==1)
 *                 head = head -> next;
 *                  free(temp) 
 *           }else{
 *                  if(i == position - 1 && temp){
 *                        prev -> next = temp -> next;
 *                         free(temp)
 *                    } else{
 *                        prev = temp;
 *                         if(prev == NULL) // position was greater than 
 *                               number of nodes in the list
 *                               break;
 *                             temp = temp ->next;       
 *                    }
 *           }
 * 
 */



// class Node {

//      constructor(number) {
//           this.number = number; 
//            this.next = null;
//      }
// }

// function push (head, number){

//      const node = new Node(number);
//       node.next = head;
//         head = node;
//          return head;
// }

// function deleteN(head, position){
//      let temp = head;
//      let prev = head;

//      for(let i=0; i< position; i++){
//           if(i === 0 && position === 1){
//                head = head.next;
//                temp =null;
//           }else{

//                if(i === position - 1 && temp){
//                     prev.next = temp.next;
//                     temp = null;
//                }else{
//                     prev = temp;

//                     //position was greater than number of nodes in the list
//                     if(prev == null )
//                     break;
//                     temp = temp.next;
//                }
//           }
//      }
//      return head;
// }

// function printList(head){
//      while(head){
//           if(head.next === null){
//                console.log(`[${head.number}][${head}]->(nil)`);
//           }else{
//                console.log(`[${head.number}][${head}] -> ${head.next}`)
//                 head = head.next;
//           }
//      }
//  console.log('\n');
// }

// //Driver code

// let list = new Node(0);
// list.next = null;
// list = push(list, 1);
// list = push(list, 2);
// list = push(list, 3);

// printList(list);

// list = delete(list, 1);
// printList(list);


// class Node {
//        constructor(data){
//           this.data = data;
//           this.next = null;
//        }  
// }

// function deleteNode(head, val){
//      if(!head){
//           console.log("Element not present in the list");
//           return -1;
//      }

//      if(head.data == val){

//            if(head.next){
//                head.data = head.next.data;
//                head.next = head.next.next;
//                return 1;

//            }else{
//                return 0;
//            }
//      }
//      if(deleteNode(head.next, val) == 0){
//            head.next = null;
//            return 1;
//      }
// }

// function push(head, data){
//      let newNode = new Node(data);
//      newNode.next = head;
//      head = newNode;
//      return head;
// }

// function printLL (head){
//      if(!head) return;

//      let temp = head;
//      while(temp) {
//           console.log(temp.data, " ");
//           temp = temp.next;
//      }
//      console.log();
// }

// //Driver code

// let head = null;

// head = push(head, 10);
// head = push(head, 12);
// head = push(head, 14);
// head = push(head, 15);

// printLL(head);
// deleteNode(head, 20);
// printLL(head);
// deleteNode(head, 10);
// printLL(head);
// deleteNode(head, 14);
// printLL(head);

/************************************ */


//head of list

// var head;

// /** Linked list Node */

// class Node{
//      constructor(val){
//           this.data =val;
//           this.next =null;
//      }
// }

// /** Insert a new Node at front of the list */

// function push(new_data){
//       var new_node = new Node(new_data);
//       new_data.next = head;
//       head = new_node;
// }

// function deleteNode(position)
// {
//      if(head == null){
//           return;
//      }

//      var temp = head;
//      if(position == 0){
//           head =temp.next;
//           return;
//      }
//      //Find previous node  of the node to be deleted
//       for(i=0; temp !=null && i < position -1; i++)
//       {
//           temp =temp.next;
//           if(temp == null || temp.next == null){
//                return;
//           }
//           var next = temp.next.next;
//           temp.next = next;
//      }
// }

// function printList()
// {
//      var tnode = head;
//      while(tnode !=null)
//      {
//          console.log(tnode.data + " ");
//      }
// }

// push(7);
// push(1);
// push(3);
// push(2);
// push(8);
// console.log("created linked list is");
// printList();
// //Delete node at position 4
// deleteNode(4);
// console.log("Linked List after ");
// printList();

/********************************************* */

/** 
 * Delete Linked List
 */

// var head;
// class Node {
//      constructor(val){
//           this.data = val;
//           this.next =  null;
//      }
// }

// function deleteList() 
// {
//      head = null;
// }

// function push(new_data){
//      var new_node = new Node(new_data);
//      new_node.next = head;
//      head = new_node;
// }

//         push(1);
//         push(4);
//         push(1);
//         push(12);
//         push(1);
 
//         console.log("Deleting the list<br/>");
//         deleteList();
 
//         console.log("Linked list deleted");


/** ##################################################### */

   //Function to Get Nth Node in Linked List 

//    class Node{
//       constructor(d){
//           this.data = d;
//           this.next = null;
//       }
//    }

//    var head;

//    function GetNth(index)
//    {
//          var current = head;
//          var count = 0;

//          while(current != null){
//           if(count == index)
//           {
//                return current.data;
              
//           }
//            count++;
//            current = current.next;
       
//          }
//           assert(false);
//           return 0;
//    }

//    function push(new_data)
//    {
//      var new_Node = new Node(new_data);
//      new_Node.next = head;
//      head = new_Node;
//    }

//    push(1);
//     push(4);
//      push(1);
//       push(12);
//        push(1);
//         push(14);

//         console.log("Element at index 3 is" + GetNth(3));


/**   Program for Nth node from the end of a Linked List */

// class Node {
//      constructor(d){
//           this.data = d;
//           this.next = null;
//      }
// }

// class LinkedList
// {
//      constructor(d) 
//      {
//           this.head = d;
//      }
// }

// printNthFromLast(n) 
// {
//      let len = 0;
//      let temp = this.head;

//      while(temp != null) 
//      {
//           temp = temp.next;
//           len++;
//      }
//       //Check if value of n is not more than length of the linked list

//           if(len < n) 
//           {
//                return;
//           }
//           temp = this.head;

//           //get the (len - n+ 1)th node from the beginning
//           for(let i= 1; i< len - n + 1; i++)
//           {
//                temp = temp.next;
//           }
//           console.log(temp.data);
// }



/** ################################################ */


/** Check Linked List is circular or not */

// class Node{
//      constructor(val){
//           this.data = val ;
//           this.next = null;
//      }
// }
// function isCricular(head)
// {
//      if(head == null)
//      return true;

//      //Next of head
//      node = head.next;

//      while(node !=null && node != head){
//           node = node.next;
//      }
//      return (node == head);
// }

// function newNode(data){
// temp = new Node();
// temp.data = data;
// temp.next = null;
// return temp;
// }

// //Driver code

// head = newNode(1);
// head.next = newNode(2);
// head.next.next = newNode(3);
// head.next.next.next = newNode(4);

// console.log(isCricular(head) ? "Yes" : "No");
// head.next.next.next.next = head;
// console.log(isCricular(head) ? "Yes" : "No");

/** %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

// class Node{
//      constructor(){
//           this.data = 0;
//           this.next =null;
//      }
// }

// function push(head_ref, data){
//      var ptr1 = new Node();
//      var temp = head_ref;
//      ptr1.data = data;
//      ptr1.next = head_ref;

//      /**
//       * If linked list is not null then set the next of last node
//       */
//      if(head_ref !=null){
//           while(temp.next != head_ref){
//                temp = temo.next;
//           }
//           temp.next = ptr1;
//      }else{
//           ptr1.next =ptr1 ;
//           head_ref = ptr1;
//           return head_ref;
//      }
// }

// function countNodes(head){
//      var temp =head;
//           var result = 0;
//            if(head != null){
//                do{
//                     temp =temp.next;
//                     result++;
//                }while(temp != head)
//            }
//            return result;
// }

// var head = null;
// head = push(head, 12);
// head = push(head, 56);
// head = push(head, 2);
// head = push(head, 11);

// console.log(countNodes(head));


/** %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */


/** 
 * Convert singly linked list into circular linked list
 * 
 * //Algorithms
 * 
 * 1. Initialize a pointer current to the head node of the singly linked list
 * 2. Traverse the linked list by moving the current pointer to the next untill it 
 *    reaches the last node(i.e. the node whose next pointer is null)
 * 3. Set the next pointer of the last node to point back to thge head node of 
 *    the linked list.
 * 4. The singly linked list is now a circular linked list
 */

// class Node {
//    constructor(val) {
//       this.data = val;
//       this.next = null;
//    }
// }

// function circular (head) {
//     start = head;

//    while(head.next != null){
//       head = head.next;
//       head.next = start;
//       return start;
//    }
// }

// function push(head, data) 
// {
//    newNode = new Node();

//    newNode.data = data;
//    newNode.next = (head);

//    (head) = newNode;
//    return head;
// }

// function displayList(node) 
// {
//    start = node;
//    while(node.next != start){
//       console.log(" " + node.data)
//       node = node.next;
//    }

//    console.log(" " + node.data);
// }


// //Driver Code 
// head = null ;
// head = push(head, 15);
// head = push(head, 14);
// head = push(head, 13);
// head = push(head, 22);
// head = push(head, 17);

// circular(head);

// console.log("Display List");

// displayList(head);


/**   (((((((((((((((((((((((()))))))))))))))))))))))) */


// class Node{
//    constructor(value) {
//       this.data = value;
//       this.next = null;
//    }
// }

// function convertToCircular(head){
//    let current = head;
//    while(current.next !== null){
//       current = current.next;
//    }
//    current.next = head;
// }
// function printList(head)
// {
//    let current = head;
//    do {
//       console.log(current.data + " ");
//       current = current.next;

//    }while(current !== head);
// }

// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);

// convertToCircular(head);
// console.log("To the circular linked list is : ");
// printList(head);



// class Node {
//    constructor() {
//       this.data = null;
//       this.next = null;
//    }
// }

// class NodeOperation{
//    pushNode(headRef, dataVal) {
//       const newNode = new Node();
//       newNode.data = dataVal ;
//       newNode.next = headRef[0];
//       headRef[0] =newNode;
//    }
// }

// const head = [null];
// const temp = new NodeOperation();
// for(let i=5; i> 0; i--){
//    temp.pushNode(head, i);
// }
// const v = [];
// let curr = head[0];
// while(curr !== null) {
//    v.push(curr.data);
//    curr = curr.next;
// }
// var middle = Math.floor(v.length/2);
// console.log(v[middle]);

// var head; 
// class Node{
//    constructor (val) {
//       this.data = val ;
//       this.next = null;

//    }
// }

// function pushNode(new_data) {
//    var new_node = new Node(new_data);
//    new_node.next = head;
//    head = new_node;
// }

// function printNode() {
//    var tnode = head;
//    while(tnode != null) {
//       console.log(tnode.data + "->");
//       tnode = tnode.next;
//    }
//    console.log("NULL");
// }

// function getLen(){
//    let length = 0; 
//    var temp = head;
//    while(temp != null){
//       length += 1;
//       temp0 = temp.next;
//    }
//    return length;
// }

// function printMiddle (){
//    if(head != null){
//       let length = getLen();
//       var temp = head;
//       let middleLength = length/2;

//       while(parseInt(middleLength) != 0){
//          temp =temp.next;
//          middleLength --;
//       }
//       console.log(temp.data);
//    }
//    for(let i=5; i>=1; i--){
//       pushNode(i);
//       pushNode();
//       printMiddle();
//    }
// }


