/**
 * 1. Initialize the largest three elements as minus infinite
 *     first= second= third = -infinite
 * 2. Iterate through all elements of array. 
 *    a) Let current array element of array.
 *    b) If(x > first)
 *    {
 *      //This order of assignment is important
 *         third =second 
 *          second = first
 *         first = x
 *     }
 *    
 *    c) Else if(x > second and x != first )
 *      { 
 *        third = second
 *         second = x
 *       }
 *   d)
 * 
 *    Else if(x >  third and x != second)
 *    {
 *       third = x
 *    }
 * 
 * 3. Print first, second and Third.
 */

// function threeGreaterNum(arr, arr_size) {
     
//     let first;
//     let second;
//     let third;
//     if(arr_size < 3){
//         console.log("Invalid Input");
//         return;
//     } 

//     third = first= second= Number.MIN_VALUE;
//     for(let i=0; i < arr_size; i++){
//         //If current element is 
//         //Greater than first

//         if(arr[i] > first)
//         {
//             third = second;
//             second= first;
//             first= arr[i];
//         }
//         //If arr[i] is in between first
//         //and second then update second
//         else if(arr[i] >second)
//         {
//             third = second;
//             second = arr[i];
//         }else if(arr[i] >third)
//         {
//             third = arr[i];
//         }
    
//     }
//     console.log("Three largest elements are" + first, + second, + third);

// }

// //Driver code 
// let arr = [12, 13, 1, 10, 10, 34, 1];
// let n = arr.length;
// threeGreaterNum(arr, n);


/**Find Second Largest number in array 
 * 
 * 1. function of array
 * 2. Check array size
 * 3. Iterate array 
 *    a). Check array largest number
 *    b). check second largest number
*/

// function secondLargestNum(array, array_size) {

//     let firstlargestnum;
//     let secondlargestnum;
//     firstlargestnum=secondlargestnum=Number.MIN_VALUE;
//     //console.log(firstlargestnum, secondlargestnum);

//     for(let i=0; i<array_size; i++){
//         if(array[i] > firstlargestnum){
//             secondlargestnum=firstlargestnum;
//             firstlargestnum=array[i];
//         }else if(array[i] > secondlargestnum){
//             secondlargestnum=array[i];
//         }
//     }
//     console.log("Second Largest Number " + secondlargestnum);

// }

// let array=[12, 34, 5, 56, 3, 57];
// let m = array.length;

// secondLargestNum(array, m);

/**Second Method */


// function findSecondLargest(a, n) 
// {
//     /**Initialize first largest value with thae value 0 and second largest value with -1 */

//     let first_largest = 0;
//     let second_largest = -1;

//     /**
//      * Now update  the values of first largest and second largest in each itterartion as per the approch
//      */

//     for(let i=0; i< n; i++)
//     {
//         if(a[i] > a[first_largest]) {
//             second_largest = first_largest;
//             first_largest = i;
//         }else if(a[i] < a[first_largest]){
//             if(second_largest == -1 || a[second_largest < a[i]]){
//                 second_largest = i;
//             }
//         }
//     }
//     // return a[second_largest];
//     console.log(a[second_largest]);
// }

// let a = [123, 35, 1, 10, 34, 1]
// let n = a.length;
// findSecondLargest(a, n);


/** Move all zeros at end of the array
 * 
 * Function which pushes all zeros to end of an array.
 */

// A JavaScript program to move all zeroes at the end of array
 
// Function which pushes all zeros to end of an array.
// function pushZerosToEnd(arr, n)
// {
//     let count = 0; // Count of non-zero elements
 
//     // Traverse the array. If element encountered is non-
//     // zero, then replace the element at index 'count'
//     // with this element
//     for (let i = 0; i < n; i++){
//         if (arr[i] != 0){
//         arr[count++] = arr[i]; // here count is
//                             // incremented
//        }
//     }
     
 
//     // Now all non-zero elements have been shifted to
//     // front and 'count' is set as index of first 0.
//     // Make all elements 0 from count to end.
//     while (count < n){
//         arr[count++] = 0;
//     }
// }
 
// // Driver code
//     let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
//     let n = arr.length;
//     pushZerosToEnd(arr, n);
//     console.log("Array after pushing all zeros to end of array :<br>");
//     for (let i = 0; i < n; i++){
//         console.log(arr[i] + " ");
//     }

/**Swap zero at end */

// function swapNumber(A, n){
//     let a;
//     for(let i=0; i<n; i++){

//         for(let j=i+1; j<n; j++){
//             if(A[i] == 0 && A[j] !=0){
//                 a=A[i];
//                 A[i] =A[j];
//                 A[j] = a;
//             }
//         }
       
//     }
//     console.log(A);
// }
// let arr = [3, 5, 0, 7, 0, 9, 5, 4, 0, 0];
// let n=arr.length;
// swapNumber(arr, n);


/**Swap zero at start */

// function SwapzeroStart(arr, n){
//     let A;
//      for(let i=n; i>0; i--){
//         for(let j=i-1; j>=0; j--){
//             if(arr[i] ==0){
//                A=arr[i];
//                arr[i] =arr[j];
//                arr[j] =A;
//             }
//         }
       
//      }
//      console.log(arr);
// }
// let arr=[12, 0, 4, 0, 6, 0, 7, 0];
// let n=arr.length;
// SwapzeroStart(arr, n);


/**Method 2 */

// const arr = [5, 0, 1, 0, -3, 0, 4, 6];
// const moveAllZero = (arr=[]) => {
//     const res = [];
//     let currIndex = 0;
//     for(let i=0; i<arr.length; i++){
//         const el =arr[i];
//         if(el===0){
//             res.push(0);
//         }else{
//             res.slice(currIndex, undefined, el);
//             currIndex ++;
//         }
//     }
//     return res;
//     // console.log(res);
// }

// console.log(moveAllZero(arr));

/**Rearrange array such that even positioned are greater than odd */

// function RearrangeArray(arr, n)
// {
//     let A;
//     let B;
//   for(let i=0; i<n; i++) 
//   {
//     if(i==0 && arr[i] > arr[i+1])
//     {
//       B=arr[i];
//       arr[i] = arr[i+1];
//       arr[i+1] = B;
//     }
//     if(i % 2 != 0 && arr[i] < arr[i+1])
//     {
//         A=arr[i];
//         arr[i] =arr[i+1];
//         arr[i+1] =A;
//     }
//   }
//   console.log(arr);
// }
// let arr=[12, 4,7, 8, 0, 3];
// let n =arr.length;
// RearrangeArray(arr, n);

/**Sorting of array  */
// function MaxMinPoint(arr, n)
// {
//     let A;
//     for(let i=0; i<n; i++)
//     {
//         for(let j=0; j < n-i; j++)
//         if(arr[j] > arr[j+1])
//             {
//                A=arr[j];
//                arr[j] = arr[j+1];
//                arr[j+1] =A;
//             }
//     }
//     console.log(arr);
// }
// let arr=[2,4, 1, 6, 3, 8, 1, 3, 1,2];
// let n= arr.length;
// MaxMinPoint(arr, n);


/**Rearrange an array in decreasing order */


// function MaxMinPoint(arr, n)
// {
//     let A;
//     for(let i=0; i<n; i++)
//     {
//         for(let j=0; j < n-i; j++)
//         if(arr[j] < arr[j+1])
//             {
//                A=arr[j];
//                arr[j] = arr[j+1];
//                arr[j+1] =A;
//             }
//     }
//      console.log(arr);
// }
// let arr=[2,4, 1, 6, 3, 8, 1, 3, 1,2];
// let n= arr.length;
// MaxMinPoint(arr, n);


/**Rearrange array alternatively */

/**
 * even index: remaining maximum element.
 * odd index : remaining minimum element.
 * 
 * max_index : Index of remaining maximum element
 *          (Moves from right to left)
 * min_index : Index of remaining minimum element
 *              (Moves from left to right)
 * 
 * Initializing : max_index = 'n-1'
 *                 min_index = 0
 *                max_element = arr[max_index] + 1 //can be any element 
 *        which is more than maximum value in array
 * 
 * For i =0 to n-1
 *         If 'i' is even
 *            arr[i] += arr[max_index] % max_element * max_element
 *            max_index --
 *     ELSE //if 'i' is odd
 *         arr[i] += arr[min_index] % max_element * max_element
 *          min_index ++
 */

//Approach 1;

// function rearrange(arr, n)
// {
//      //initialize index of first minimum and first maximum element
//        let max_idx = n - 1;let min_idx =0;

//        //store maximum element of array
//        let max_elem = arr[n-1] + 1;

//        //traverse array elements
//         for(let i=0; i < n; i++)
//         {
//             //at even index: we have to put maximum element
//             if(i % 2 == 0)
//             {
//                 arr[i] += (arr[max_idx] % max_elem) * max_elem;
//                 max_idx --;
//             }
//             //at odd index : we have to put minimum
//             else{
//                 arr[i] += (arr[min_idx] % max_elem) * max_elem;
//                 min_idx++;
//             }
//         }

//         //array elements back to it's original form
//         for(let i=0; i < n; i++)
//         {
//             arr[i] =Math.floor(arr[i] /max_elem);
//         }
     
// }

// //Driver code 

// let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let n= arr.length;

// console.log("Original array");
// for(let i=0; i<n; i++)
// {
//     console.log(arr[i] + " ");
// }


/**Approach 2 */

// function rearrange(arr, n)
// {
//     //initialize index of first minimum and first maximum element

//     let max_ele = arr[n-1];
//     let min_ele = arr[0];

//     //traverse array elements
//     for(let i=0; i < n; i++)
//     {
//         //at even index : we have to put maximum element
//         if(i % 2 == 0)
//         {
//             arr[i] =max_ele;
//             max_ele -=1;
//         }

//         //at odd index : we gahave to put mi9nimum element
//         else{
//             arr[i] = min_ele;
//             max_ele -= 1;
//         }
//     }
// }

// //Driver code 
// let arr = [1, 2, 3, 4, 5, 6,7 ,8 ,9]
// let n = arr.length;

// for(let i=0; i < n; i++)
// {
//     console.log(arr[i] + " ");
// }
// rearrange(arr, n);

// console.log('\n Modified Array' );
// for(let i=0; i< n; i++){
//     console.log(arr[i] + " ");
// }

//Initializing an array a
// let a = [11, 12, 13, 14, 15, 16];

// //finding the length of array a
// let n = a.length;
// //Initialize amn array last with size n

// let last = new Array(n).fill(0);
// //Initialize variables min and max
// let min_val = 0; 
// let max_val = n -1;

// //Initializing a variable count to keep track of iterations
// let count = 0;
// //looping through the array
// for(let i=0; i< n; i++)
// {
//     //If count is even, store the value of a[max_val] in last [i] and decrement max_val
//     if(count % 2 == 0)
//     {
//         last[i] = a[max_val];
//         max_val--;
//     }
//     //If count is odd, store the value of
//     // a[min_val] in last[i] and increment min_val
//     else{
//         last[i] = a[min_val];
//         min_val ++;
//     }
//     //Increment the value of count
//     count ++;
// }
// console.log(last.join(' '));


/** Duplicate array elements */

// function duplicateArray(arr, n) 
// {

//     let A = []; 
//     let count =0;
//     for(let i= 0; i < n; i++)
//     {
//         for(let j=i+1; j < n; j++)
//         {
//             if(arr[i] == arr[j])
//              {
//                  A.push(arr[i])
//              }
//         }
//     }
//     console.log(A);
// }

// let arr= [1, 2, 3, 4, 1, 3, 5,5, 2];
// let n= arr.length;
// duplicateArray(arr, n);



/** Duplicate array elements with count of repeatation of elements */

// function duplicateArray(arr, n) 
// {

//     let A = []; 
//     let count =0;
//     let count_1= 0;
//     for(let i= 0; i < n; i++)
//     {
//         count_1++;
//         for(let j=i+1; j < n; j++)
//         {
//             count++;

//             if(arr[i] == arr[j])
//              {
//                  A.push(arr[i]);
//              }
//         }
//     }

//     console.log(A, count, count_1);
// }

// let arr= [1, 2, 3, 4, 1, 3, 5,5, 2];
// let n= arr.length;
// duplicateArray(arr, n)
// const elementsCounts = {};
// arr.forEach(element => {
//     elementsCounts[element] = (elementsCounts[element] || 0) + 1;
// });
// console.log(elementsCounts);

// //Approach 2 - counting duplicate elements (Using reduce method)

// var eleCounts = arr.reduce((count, item)=> (count[item]=count[item]+1 || 1, count), {})
// console.log(eleCounts);

// //Approach 3 - counting duplicate elements using Map and filter method

// let uniqueElements = [...new Set(arr)];
// const element_Counts = uniqueElements.map(value => [value, arr.filter(str=>str===value).length]);
// console.log(element_Counts);


/** Segregate even and odd numbers - Approach 1*/

// function segregateEvenNum(arr, n) 
// {
//     let A;
//     for(let i=n; i>0; i--)
//     {
//         for(let j=i-1; j>0 ; j--)
//         {
//             if(arr[i] % 2 ==0){
//                 A=arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = A;
//             }
//         }
//     }
//     console.log(arr);
// }

// let arr=[2, 4, 3, 6, 8, 9, 12];
// let n = arr.length;
// segregateEvenNum(arr, n);


/** Approach - 2 */

// function arrayEvenAndOdd(arr, n)
// {
//     let a = [];
//     let index = 0;
//     for(let i=0; i< n; i++)
//     {
//       if(arr[i] % 2 == 0)
//       {
//         a[index] = arr[i];
//         index++;
//       }
//     }
//     for(let i=0; i<n; i++)
//     {
//         if(arr[i] % 2 !=0)
//         {
//             a[index] = arr[i];
//             index++;
//         }
//     }
//     for(let i=0; i < n; i++)
//     {
//         console.log(a[i] + " ")
//     }

// }

// //Driver Code 
// let arr = [1, 3, 2, 4, 7, 6, 9, 10];
// let n=arr.length;
// //function call 
// arrayEvenAndOdd(arr, n);

// /** Approach - 3 using while loop */

// function ArrayEvenOdd(arr, n)
// {
//     let i=-1
//     let j=0;
//     let t;
//     while(j !=n){
//         if(arr[j] % 2 == 0){
//             i++;
//             //swaping even and odd numbers
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;

//         }
//         j++;
//     }
//     //Printing segregate array
//     for(let i=0; i< n; i++){
//         console.log(arr[i] + " ");
//     }
// }

// //Driver Code 

// let arr_1 = [ 1, 3, 2, 4, 5, 6, 7, 9];
// let n_1 = arr_1.length;
// ArrayEvenOdd(arr_1, n_1);


/**Rotation of array from n positioned */

// function RotationArray(arr, n, p)
// {
//     let A=[];
    
//     for(let i=p; i<n; i++){
//             A.push(arr[i]);
//     }
//     for(let j=0; j<p; j++){
//       A.push(arr[j]);  
//     }
//     console.log(A)
// }
// //Driver code 

// let arr= [34, 5, 6, 7,8, 9, 12, 43];
// let n= arr.length;
// let p=7;
// RotationArray(arr, n, p);


//Approach - 2
/**
 *  Algorithm -
 * 
 * Algorithm reverse(arr, start, end)
 * mid=(start+ end)/2
 * loop from i = start to mid:
 * swap(arr[i], arr[end-(mid-i+1)])
 * 
 * Algorithm rotate(arr, d, N):
 * reverse(arr, 1, d);
 * reverse(arr, 1, N);
 * 
 */

// function reverseArray(arr, start, end) 
// {
//     while(start < end)
//     {
//         var temp= arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

// /**function to left rotate arr[] of size n by d */

// function leftRotate(arr, d, n){
//     if(d==0){
//         return;
//     }
//     //in case the rotating factor is greater than array length
//     d= d % n;
    
//     reverseArray(arr, 0, d-1);
//     reverseArray(arr, d, n-1);
//     reverseArray(arr, 0, n-1);
// }

// //Function to print an array

// function printArray(arr, size)
// {
//     for(var i=0; i< size; i++){
//         console.log(arr[i]);
//     }
// }

// //Driver Code 
// var arr = [1, 2, 3, 4, 5,6 ,7, 8, 9];
// var n= arr.length;
// var d=2;
// leftRotate(arr, d, n);
// printArray(arr, n);


/**  Print left rotation of array in O(n) time and O(1) space */

//Javascript implememntation of left rotation of an array k number times
//Function to left rotate array multiple times

// function leftRotate(arr, n, k)
// {
//     /**To get the starting point of rotated array */
//     let mod = k % n;
//     console.log("mod" + mod, "K" + k);
//     //Prints the starting array from start position

//     for(let i=0; i<n; i++)
//     {
//         console.log(arr[(mod + i) % n])
//     }
// }

// //Driver code
// let arr = [1, 2, 3, 4, 5, 6];
// let n = arr.length;
// // let k=1;
// // while(k <n-1){
//     // leftRotate(arr, n, k);
// // }
// // k++;
// // k=2;
// // leftRotate(arr, n, k);

// for(let k=1; k< n; k++)
// {
//     leftRotate(arr, n, k);
// }

// function leftRotate(arr, d, n)
// {
//     for(let i=0; i<d; i++)
//     {
//         leftRotateOne(arr, n);
//     }

// }
// function leftRotateOne(arr, n)
// {
//     let i, temp= arr[0];
//     for(i=0; i<n-1; i++)
//     {
//         arr[i] =arr[i+1];
//     }
//     arr[n-1] =temp;
// }
// function printArray(arr, size)
// {
//     for(let i=0; i< size; i++){
//         console.log(arr[i]);
//     }
// }

// //Driver code 
// let arr= [1, 2, 3, 4, 5, 6, 7];
// let n= arr.length;
// let k=1;
// leftRotate(arr, k, n);
// printArray(arr, n);

// function leftRotate(arr, k) 
// {
//     //Reverse the first k elements
//     arr = reverseArray(arr, 0, k-1);
//     //Reverse the remaining n-k elements
//     arr= reverseArray(arr, k, arr.length-1);
//     //Reverse the entire array
//     arr= reverseArray(arr, 0, arr.length - 1);

//     //Print the rotated array from start position
//     console.log(arr.join(" "));
// }

// //helper function to reverse a section of an array from start to end;
// function reverseArray(arr, start, end) 
// {
//     while(start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
//     return arr;
// }

// //Driver code 
// let arr = [1, 2, 3, 4, 5,6];
// let n=arr.length;
// let k= 1;

// //Function call
// leftRotate(arr, k, n);

/**Sort an array in wave form  */

// function waveArraySort(arr, n)
// {
//    let m= Math.floor(n/2);
//    let smallNumArr = [];
//    let largeNumArr = [];

//    for(let i=0; i<n; i++)
//    {
//     //Sorting array
//     for(let j=i+1; j<=n; j++)
//     {
//         if(arr[i] > arr[j]){
//             let temp=arr[i];
//             arr[i] = arr[j];
//             arr[j] =temp;
//         }
//     }

//    }
//    console.log(arr);
   
// }

// let arr= [10, 12, 4, 5, 6,7,32, 45, 66, 66, 45];
// let n = arr.length;
// waveArraySort(arr, n);


/**Approch Array -1 
 * 
 * Algorithm 
 * 
 * 1. Sort the array.
 * 2. Traverse the array from index 0 to N-1, and Increase the value of the index by 2.
 * 3. While traversing the array swap arr[i] with arr[i+1]
 * Print the final array.
 */


//Function to swap numbers
//  function swap(arr, x, y)
//  {
//     let temp = arr[x];
//     arr[x] = arr[y];
//     arr[y] = temp;
//  }

//  //This function sorts arr[0...n-1] wave form 
//  //arr[0] > =arr[1]<=arr[2]>=arr[3]

//  function sortInWave(arr, n)
//  {
//     //Sort the input array
//     arr.sort((a, b) => a - b);
//     console.log("Sorted Array:"+" "+arr);

//     //Swap adjacent elements
//     for(let i=0; i< n-1; i+=2)
//     {
//         swap(arr, i, i+1);
//     }
//  }

//  //Driver Code 
//  let arr = [12, 3, 4, 23, 1, 56, 78, 98];
//  let n= arr.length;
//  sortInWave(arr, n);
// for(let i=0; i< n; i++){
//     console.log(arr[i]);
// }
 //console.log(arr[i]);

 /**Approach - 2 */

//  function swapAdjacentEle (arr, x, y)
//  {
//     let temp = arr[x];
//     arr[x] = arr[y];
//     arr[y] = temp;
//  }

//  function arrSortWave(arr, n)
//  {
//     //Traverse all even elements
//     for(let i=0; i<n; i+=2)
//     {
//         //If current even element is smaller than previous
//         if(i>0 && arr[i-1] > arr[i]){
//             swapAdjacentEle(arr, i-1, i);
//         }

//         //If current even element is smaller than next element
//         if(i< n-1 && arr[i] < arr[i+1])
//         {
//             swapAdjacentEle(arr, i, i+1);
//         }
//     }
//     console.log(arr);
//  }

//  //Driver Code 
//  let arr = [12, 2,34, 12, 45, 67, 23, 45, 67];
//  let n= arr.length;
//  arrSortWave(arr, n);

//  for(let i=0; i<n; i++)
//  {
//     console.log(arr[i] + " ");
//  }
 

/** Count the number of possible triangles */

/**
 *  Follow the given steps to solve the problem
 *  1. Run three nested loops each starting from the index of the previous loop
 *     to the end of the array i.e. run first loop from 0 to n, loop 
 *      j from i to n, and k from j to n
 *  2. Check if array[i] + array[j] > array[k], i.e sum of two sides is greater 
 *     than the third
 *  3. Check condition 2 for5 all combinations of sides by interchanging
 *     i, j, k
 *  4. If all three conditions match, then increase the count
 *  5. Print Content;
 * 
 * 
 */


// function PossibleTriangle (arr, n)
// {
//     let count = 0;
//     for(let i=0; i<n; i++){
//         for(let j=i+1; j<n; j++){
//             for(let k=j+1; k< n; k++){
//                 if(arr[i] + arr[j] >arr[k] && arr[j] + arr[k] > arr[i] && arr[i] + arr[k] > arr[j]){
//                     count ++;
//                 }
//             }
//         }
//     }
//     console.log(count);
// }

// //Driver Code 
// let arr =  [ 10, 21, 22, 100, 101, 200, 300 ];
// let n = arr.length; ;
// PossibleTriangle(arr, n);

//Approach - 2

// function countTriangle(arr, n){
//     arr.sort((a, b) => a-b);
//       let count = 0;
//     console.log("Sorted array in increasing order"+" " +arr);
//     for(let i=0; i<n; i++){
//         for(let j=i+1; j<n; j++){
            
//             if(arr[i] + arr[j] > arr[j+1] ){
//                 count++;
//             }
//         }
//     }
//     console.log(count)
// }
// let arr= [ 10, 21, 22, 100, 101, 200, 300 ];
// let n= arr.length; 
// countTriangle(arr, n);

//Approach 3;

// function TriangleCounting(arr, n){
//       arr.sort((a,b)=> a-b);
//       let count = 0; 
//       for(let i=0; i< n; i++){
//         let k = i + 2;
//         for(let j=i+1; j<n; j++){
//             while(k<n && arr[i] + arr[j] > arr[k])
//                 ++k;
//                 if(k> j){
//                     count += k - j-1;
//                 }
            
//         }
//       }
//       console.log(count);
// }

// //Driver Code 
// let arr= [10, 21, 22, 100, 101, 200, 300];
// let n= arr.length;
// TriangleCounting(arr, n);

// function CountTrinagles(arr){
//     var n = arr.length;
//     arr.sort();
//     var count = 0; 
//     for(let i = n-1; i>=1; i--){
//         var l=0, r=i-1;
//         while(l < r) {
//             if(arr[l] + arr[r] > arr[i]){
//                 count += r - l;
//                 r--;
//             }else{
//                 l++;
//             }
//         }
//     }
//     console.log(count);
// }

// let arr= [ 10, 21, 22, 100, 101, 200, 300 ];
// CountTrinagles(arr);


/** Print all distinct ele4ments of a given integer array */

// function duplicateNum(arr, n){
  
//     let A=[];
//    for(let i=0; i< n -1; i++){
//         for(let j=i+1; j<n; j++){
//             if(i != j){
//             if(arr[i] == arr[j]){
//                 A.push(arr[i]);
//             }
//         }
//         }
//    }
//    console.log(A);
// }
// let arr= [1, 2, 3, 1, 3, 2, 5, 3, 6, 7, 6, 5, 4, 7, 6];
// let n=arr.length;
// duplicateNum(arr, n);


/** Finding duplicate element using indexOf method */

// function duplicateIdxMeth(arr, n){
//     let A = [];
//     for(let i=0; i<n; i++){
//         if(arr.indexOf(arr[i]) !=i){
//              A.push(arr[i]);
//         }
//     }
//     console.log(A);
// }

// //Driver Code 
// let arr =[12, 13, 12, 14, 15, 16, 12, 14, 15];
// let n= arr.length;
// duplicateIdxMeth(arr, n);

// const array = [1, 2, 1, 3, 4, 3, 5, 3, 4, 5, 3];
// const toFindDuplicates = array =>array.filter((item, index)=> array.indexOf(item) != index)
// const duplicateElements = toFindDuplicates(array);
// console.log(duplicateElements);

//Program to print all distinct elements in a given array

// function printDistinct(arr, n){
//     //Pick all elements one by one
//     for(let i=0; i<n;i++){
//         //Checked if the picked element is already printed
//         var j;
//         for(j=0; j<i; j++){
//             if(arr[i] == arr[j]){
//                 break;
//             }
//             //If not printed earlier, then print it
          
//         }
//         if(i == j){
//             console.log(arr[i]);
//         }
//     }
// }

// //Driver Code 
// let arr = new Array(6, 10, 5, 4, 9, 120, 4, 6, 10);
// let n= arr.length;
// printDistinct(arr, n);


//Approach -3

// function PrintDistinct(arr, n){
//     // sort array 
//     arr.sort((a,b)=>a-b);

//     //Traverse the soreted array
//     for(let i=0; i<n; i++){
//         while(i< n-1 && arr[i] == arr[i+1]){
//             i++;
//         }
//         console.log( "Distinct value of an array"+""+arr[i]);

//     }
//        //console.log("Distinct Value of an array"+ ""+arr)
// }

// //Driver Code 
// let arr= [6, 10, 5, 4, 9, 120,4, 6, 10];
// let n= arr.length;
// PrintDistinct(arr, n);

// let v= [10, 5, 3, 4, 3, 5, 6];
// v.sort(function(a, b){return a-b});
// let s= new Set(v);
// console.log("All the distinct value give below");
// s.forEach(function(value){
//     console.log(value )
// })

//Approach -4 has Method

// function DistinctVal(arr, n){
//     let set = new Set();
//     //Traverse the input array
//     for(let i=0; i< n; i++){
//         if(!set.has(arr[i]))
//         {
//             set.add(arr[i]);
//             console.log(arr[i]);
//         }
//     }
// }

// //Driver code
// let arr= [10, 5, 3, 4, 3, 5, 6];
// let n= arr.length;
// DistinctVal(arr, n);

// var arr= [10, 5, 3, 4, 3, 5, 6];
// var hm= new Map();
// for(let i=0; i<arr.length; i++){
//     hm.set(arr[i], i);
// }
// var key = hm.keys();
// for(var k of key){
//     console.log(k)
// }


/**Find non repeating elements in array  */


// function repeatArray(arr, n){
//     let A= new Array();
//    //sorting array
//     arr.sort((a,b) => a-b)
//     for(let i=0; i<n; i++){
//         let count =0;
//         for(let j=0; j<n; j++){
//                 if(arr[i] ==arr[j]){
//                   count++;   
//                 }
//         }
//         if(count == 1){
//             A.push(arr[i]);
//             console.log("Non repeating numbers in array->"+" "+arr[i]);
//         }
//     }
//     console.log("Non repedating numbers in array"+" -> "+"[" +A +"]")
//     console.log("sorted array"+arr);
// }

// let arr= [1, 2, 3, 4, 1, 2, 3, 4, 6, 3, 3, 4, 4, 5, 6, 6, 7, 8, 9];
// let n= arr.length;
// repeatArray(arr, n);


/** 
 * 1. Traverse all elements and put them in a hash table. Element is used 
 *     as key and the count of occurances is used as the value in the table.
 * 2.Traverse the array again and print the element with count 1 in the
 * hash table.
 */

// function findSingle(arr, n){
//        //Do xor of all elements and return 
//        let res = arr[0];
//        for(let i=1; i< n; i++){
//         res = res ^ arr[i];
//        }
//       return res;
// }

// //Driver Code
// let arr= [1, 2, 3, 2, 4, 3, 6, 5, 4];
// let n= arr.length;
// console.log("Elements occurance one time are : ->" + findSingle(arr, n));


//Approach -3 using binary methods;

// function findSingleElements(arr, n){
//     let low=0; 
//     let high= n - 1;
//     let mid;
//     // arr.sort((a, b) => a-b)
//     while(low <= high) 
//     {
//         mid=(low + high) /2;
//         if(arr[mid] = arr[mid^1]){
//             low = mid + 1;

//         }else{
//             high = mid - 1;
//         }
//     }
//     return arr[low];
// }

// //Driver code
 
// let arr = [12, 3, 21, 3, 4, 5, 6, 6, 54,21];
// let n= arr.length;
// arr = arr.sort(function(a, b){return a-b})
// console.log(findSingleElements(arr, n));


// function singlElement(arr, n){
//     let mm= new Map();
//     for(let i=0; i<n; i++){
//         if(mm.has(arr[i])){
//             mm.set(arr[i], mm.get(arr[i]) + 1);
//         }else{
//             mm.set(arr[i], 1);
//         }
//     }
//     //Iterarting over map
//     for(let [key, value] of mm.entries()){
//         if(value == 1){
//             return key;
//         }
//     }
// }

// //Driver code 
// let arr = [1, 2, 3, 4 ,5, 6,7, 3]
// let n= arr.length; 
// console.log(singlElement(arr, n));


/** Leaders elements */


//Approacch -1 ;

// function printLeaders(arr, n) {
//     for(let i=0; i< n; i++){
//         for(let j= i+ 1; j<n; j++){
//             if(arr[i] <= arr[j]){
//                 break;
//             }
           
//             if(j==n){
//                 console.log(arr[i]);
//             }
//         }
  
//     }

//     }
//  //Driver Code 
//   let arr= [12, 3, 4, 5,6 , 7,8 , 2, 3, 4,5 ,6 ];
//   let n= arr.length;
//   printLeaders(arr, n);

//Approach - 2

// function printLeaders(arr, n){
//     let max_form_right = arr[n-1];

//     /**Rightmost elements is always leader */

//     console.log(max_form_right + " ");
//     for(let i=n-2; i>=0; i--){
//         if(max_form_right < arr[i]){
//             max_form_right = arr[i];
//             console.log(max_form_right+ " ");
//         }
//     }
// }

// //Driver Code 
//  let arr = [12, 23, 12, 34, 23, 34, 35];
//  let n= arr.length;
//  printLeaders(arr, n);


// function printLeaders(arr, n) {
//      let stack = [];
//      stack.push(arr[n-1]);

//      for(let i= n-2; i>=0; i--){
//         let temp = stack.pop();
//         stack.push(temp);
//         if(arr[i] >=temp){
//             stack.push(arr[i]);
//         }
//      }
//      while(stack.length > 0){
//         console.log(stack.pop());
//      }
// }

// //Driver Code

// let arr= [12, 2,3, 43, 21, 23, 24, 25];
// let n= arr.length;
// printLeaders(arr, n);

/** Find Subarray with given sum | Set 1 Non-negative numbers */

// function subArraySum(arr, n, sum){
//         for(let i=0; i< n; i++){
//             let currentSum = arr[i];
//             if(currentSum == sum){
//                 console.log("Sum found at indexes" + i)
//                     return;
//                 }else{
//                     for(let j=i+1; j< n; j++){
//                         currentSum  += arr[j];
//                         if(currentSum == sum){
//                             console.log("Sum found b/w indexes " + i +"and" + j);
//                             return ;

//                         }
//                     }
//                 }
//             }
//             console.log("No Subbarray found");
//             return;
//         }


//         let arr = [12, 2,3 , 4, 5, 56, 67];
//         let n= arr.length;
//         let sum = 60;
//         subArraySum(arr, n);

// function subArraySum(arr, n, sum){
//     let currentSum = arr[0], start = 0, i;

//     //Pick a starting point

//     for(let i=1; i<=n; i++){
//         while(currentSum > sum && start < i - 1) {
//             currentSum = currentSum - arr[start];
//             start++;
//         }

//         if(currentSum == sum ) {
//             let p = i - 1;
//             console.log("Sum found between indexes" + start + "and" + p+"<br>");
//             return 1;
//         }

//         if(i< n){
//             currentSum = currentSum + arr[i];

//         }
//     }
//     console.log("No subarray found");
//     return 0;
// }

// let arr= [ 15, 2, 4, 8, 9, 5, 10, 23];
// let n= arr.length;
// let sum = 23;
// subArraySum(arr, n, sum);

//Approach -3

// function findSubarrayWithGivenSum(arr, sum){
//     let map = new Map();
//     let currentSum = 0;

//     for(let i=0; i< arr.length; i++){
//         currentSum += arr[i];

//         if(map.has(currentSum - sum)) {
//             return arr.slice(map.get(currentSum - sum) + 1, i+ 1);

//             map.set(currentSum, i);
//         }
       
//     }
//     return [];
// }

// let arr= [15, 2, 4, 8, 9, 5, 10, 25];
// let subarray = findSubarrayWithGivenSum(arr, 23);
// if(subarray.length === 0){
//     console.log("No subarray with given sum");

// }else{
//     console.log("Sub array :[" + subarray.join(" ") + "]");
// }


/** ************************************************************* */
/** $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

/** Rearrange an array such that arr[i] = i */
// 1. check if number exist then swap on same position;
// 2. if number is not exist of specific position replace with -1;

// function rearrangeWithPosition(arr, n){
//     for(let i=0; i<n; i++){
//           for(let j=0; j<n; j++){
//           if(arr[i] > n-1 ){
//                 arr[i] = -1;
//             }else if(arr[i] < n-1){
//                  if(i == arr[j]){
//                     let temp = arr[i];
//                     arr[i] = arr[j];
//                     arr[j] = temp;

//                 }
//             }
//         }
//     }
//     console.log(arr);

// }

// let arr= [ 12, 23, 24, 34, 3, 1, 2, 5, 0, 4, 6, 7];
// let n= arr.length;
// rearrangeWithPosition(arr, n);

// function fixPositionWithNum(arr, n){
//     for(let i=0; i<n; i++){
//         if(arr[i] !=-1 && arr[i] !=i){
//             let x = arr[i];
//             while(arr[x] !=-1 && arr[x] !=x){
//                 let y = arr[x];
//                 arr[x] = x;
//                 x=y;
//             }
//             arr[x] = x;
//             if(arr[i] != i){
//                 arr[i] = -1;
//             }
//         }
//     }
// }

// //Driver code
// let arr = new Array(2, 3, 4, 5, 6, 1, 0, 6, 7, 8);
// let n= arr.length;
// fixPositionWithNum(arr, n);
// for(let i=0; i<n; i++){
//     console.log(arr[i]);
// }

/************************************ */

//Approach - 3 using has methods

// function fixPositionNum(arr, n){
//     let s= new Set();

//     //Storing all the values in the HashSet
//     for(let i=0; i<n; i++)
//     {
//         s.add(arr[i]);
//     }

//     for(let i=0; i<n; i++){
//         if(s.has(i) ){
//             arr[i] = i;
//         }else{
//             arr[i] = -1;
//         }
//         return arr;
//     }
// }

// let arr = [1, 2, 3, 1, 4, 2, 5, 6, 7, 89, 0];
// let n= arr.length;
// let ans =fixPositionNum(arr, n);
// for(let i=0; i<ans.length; i++){
//     console.log(arr[i]);
// }

/*************************************** */

//Rearrange positive and negative numbers

// function rearrange(arr, n){
//     let i=-1, temp = 0;
//     for(let j=0; j<n; j++){
//         if(arr[j]> 0) {
//             i++;
//             temp= arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;

//         }
//     }

//     let pos= i + 1; neg = 0;
//     while(pos < n && neg < pos && arr[neg] < 0){
//         temp = arr[neg];
//         arr[neg] = arr[pos];
//         arr[pos] = temp;
//         pos ++;
//         neg += 2;
//     } 
// }

// //A utility function to print an array
// function printArray(arr, n) {
//     for(let i=0; i<n; i++){
//         console.log(arr[i] + " ");
//     }
// }
// //Driver code 
// let arr = [-1, 2, -3, -6, 5, 3, 2, 1];
// let n = arr.length;
// rearrange(arr, n);
// printArray(arr, n);

/**** ################################# */
//Approach -2

//1. function
//2. Itterare each and every elements
//3. Using nested loop
//4. Outer loop iterrate all array elements
//5. Inner Loop iterrate all elements according to requirements

// function RearrangeNum(arr, n){
//     let temp;
//     for(let i=0; i<n; i++){
//         for(let j=i+1; j<n; j++)
//         {
//             if( arr[j] < 0){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     console.log(arr);
// }

// //Driver Code 

// let arr = [2, 3, 4, 1, -1, -3, -2, -5, 7, 8, 9];
// let n = arr.length;
// RearrangeNum(arr, n);


/********************************** */

// function reorder(arr, index, n){
//     var temp =[...Array(n)];
  
//     for(var i=0; i< n; i++){
//         temp[index[i]] = arr[i];
//         console.log(temp[index[i]]);
//     }
//     console.log(temp);
//     console.log(index);
//     console.log(arr);

//     //Copy temp[] to arr[];

//     for(var i=0; i< n; i++) {
//         arr[i] = temp[i];
//         index[i] = i;
//     }
// }

// //Driver Programm
// var arr = [50, 40, 70, 60, 90]
// var index= [3, 0, 4, 1, 2];
// var n = arr.length;
// reorder(arr, index, n);
// console.log("Reorder array is:");
// console.log("<br>");
// console.log("Modified Index array is ");
// for(var i= 0; i<n; i++){
//     console.log(index[i] + " ");
// }

/** ######################################## */
//Approach -2

/** Algorithm 
 * 
 * 1. Do following for every element arr[i];
 *  a) while index[i] is not equal to i;
 *      i) Store array and index values of the target (or correct) position
 *         where arr[i] should be placed
 *       The correct position for arr[i] is index[i];
 *      ii) Place arr[i] at ites correct position. Also
 *          Update index  value of correct position.
 *      iii) Copy old values of correct position (stored in step(i) to arr[i])
 *          and index[i] as the while loop continues for i.
 */

//Function to reorder elements of arr[] according to index[]

// function reorder(arr, index, n) {
//     //Fix all elements one by one
//       for(let i=0; i<n; i++){
//         //While index[i] and arr[i] are not fixed
//         while(index[i] != i)
//         {
//             //Store values of the target(or correct)
//             //Position before placing arr[i] there;
//             let oldTargetI = index[index[i]];
//             let oldTargetE = arr[index[i]];

//             /** Place arr[i] at its target (or correct) position. also copy corrected index for new position */

//             arr[index[i]] = arr[i];
//             index[index[i]] = index[i];
            
//             //Copy old target values to arr[i] and index[i];
//             index[i] = oldTargetI;
//             arr[i]  = oldTargetE;
//         }
//       }

//       console.log(arr);
//       console.log(index);
// }

// //Driver code
//  let arr= [50, 40, 70, 60, 90];
//  let index = [3, 0, 4, 1, 2]
//  let n= arr.length;

// reorder(arr, index,  n);

/***************************************** */

//Approach -3

// let heapSize;
// function heapify(arr, index, i){
//     let largest = i;
//     //left child in 0 based indexing
//      let left = 2 * i + 1;

//      //right child in 1 based indexing 
//      let right = 2 * i + 2;

//      //Find largest index from root left and right child
//      if(left < heapSize && index[left] > index[largest])
//      {
//         largest = left; 

//      }
//      if(right < heapSize && index[right] > index[largest])
//      {
//         largest = right;
//      }

//      if(largest != i){
//         //swap arr whenever index is swapped
//         let temp = arr[largest];
//         arr[largest] = arr[i];
//         arr[i] = temp;

//         temp = index[largest];
//         index[largest] = index[i];
//         index[i] = temp;

//         heapify(arr, index, largest);
//      }
// }

// function heapSort(arr, index, n){
//     //Build Heap 
//     for(let i=(n-1) /2; i>=0; i--){
//         heapify(arr, index, i);
//     }
//     /** Swap the largest element of index(first element) with the last elemnent */
//     for(let i= n- 1; i> 0; i--){
//         let temp = index[0];
//         index[0] = index[i];
//         index[i] = temp;

//         heapSize --;
//         heapify(arr, index, 0);

//     }
//     console.log(arr)
//     console.log(index);
// }

// //Driver code 
// let arr = [50, 40, 70, 60, 90];
// let index = [3, 0, 4, 1,2];
// let n = arr.length;
// heapSize = n;
// heapSort(arr, index, n)

/********************************************* */

//Approach - 3

// function reorderArrayNindex(arr, index_arr, n){
//     for(let i=0; i<n; i++){
//         //while index[i] and arr[i] are not fixed
//         while(index_arr[i] != i) 
//         {
//             let temp = arr[i]; 
//             arr[i] = arr[index_arr[i]];
//             arr[index_arr[i]] =temp;

//             let temp_1 = index_arr[i];
//             index_arr[i] = index_arr[index_arr[i]];
//             index_arr[index_arr[i]] = temp_1;
//         }
//     }
//     console.log("ReOrder array according to indexing"+" >"+arr);
//     console.log("Reaarange indexing" +" " + index_arr);
// }

// let arr= [50, 40, 70, 60, 90];
// let n = arr.length; 
// let index_arr = [3, 2, 0, 1, 4]
// reorderArrayNindex(arr, index_arr, n);

// console.log("Reordered array is: <br>");
// for(let i=0; i< n; i++){
//     console.log(arr[i]);
// }

// console.log("Modified Index array is : <br>");

// for(let i=0; i< n; i++){
//     console.log(index[i]);
// }


/** $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

//Search an elemnent in a sorted and rotated Array
//Binary Search 

// function binarySearch(arr, low, high, key){
//     if(high < low){
//         return -1;
//     }

//     let mid = Math.floor(low + high /2);

//     if(key == arr[mid]){
//         return mid;
//     }
//     if(key > arr[mid]){
//         return binarySearch(arr, (mid+1), high, key);
//     }
// }

// function findPivot(arr, low, high){
//     if(high < low){
//         return -1;
//     }
//     if(high == low){
//         return low;
//     }

//     let mid = Math.floor((low + high) / 2);
//     if(mid < high && arr[mid] > arr[mid + 1]){
//         return mid;
//     }

//     if(mid > low && arr[mid] < arr[mid - 1]){
//         return (mid- 1);
//     }

//     if(arr[low] >= arr[mid]){
//         return findPivot(arr, low, mid - 1)
//     }
//     return findPivot(arr, mid + 1, high);
// }

// function pivotedBinarySearch(arr, n, key){
//     let pivot = findPivot(arr,0, n - 1);

//     if(pivot == -1){
//         return binarySearch(arr, 0, n - 1, key);
//     }

//     if(arr[pivot] == key){
//         return pivot;
//     }
//     if(arr[0] <= key){
//         return binarySearch(arr, pivot + 1, n - 1, key);
//     }
//     return binarySearch(arr, pivot + 1, n - 1, key);
// }

// //Driver code

// let arr1 = [5, 6, 7, 8,9, 10, 1, 2, 3];
// let n = arr1.length; 
// let key = 3;
// console.log("Index of the element is" + " " + pivotedBinarySearch(arr1, n , key));


/** %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

// function searchElement(arr, l, h, key){
//     if( l > h){
//         return -1;
//     }

//     let mid = Math.floor((l + h) / 2);
//     if(arr[mid] == key){
//         return mid;
//     }

//     /** If arr[l....mid] is sorted */
//     if(arr[l] <= arr[mid]){
//         if(key >= arr[l] && key <= arr[mid]){
//             return searchElement(arr, l, mid-1, key);
//         }
//         return searchElement(arr, mid + 1, h, key);

//     }

//     if(key >= arr[mid] && key <= arr[h]){
//         return searchElement(arr, mid + 1, h, key);
//     }
//     return searchElement(arr, l, mid - 1, key);
// }

// //Driver code
// let arr = [4, 5, 6, 7, 8,9, 1, 2, 3];
// let n=arr.length;
// let key = 3; 
// let i = searchElement(arr, 0, n - 1, key);
// if( i != -1){
//     console.log("Index" + i+ "\n");
// }else{
//     console.log("Key not found");
// }


/** ******************************************* */


/**Searching Algoritm
 * 
 * 1. Linear Search
 */

// function LinearSearch(arr, n, key)
// {
  
//     for(let i=0; i< n; i++){
//         if(arr[i] === key){
//             let found = `Element found at index ${i}`;
//             console.log(found)
          
//         }
        
//     }
    
   
// }

// //Driver Code 


// let arr = [12, 34, 23, 56, 78, 90, 43, 45, 65];
// let n = arr.length;
// let key = 90;
// LinearSearch(arr, n, key);


// function sentinelSearch(arr, n, key){
//     var last = arr[n-1];
//     arr[n-1] = key;
//     var i=0;
//     while(arr[i] !=key){
//         i++;
//     }
//     arr[n-1] = last;
//     if((i< n -1) || (ar[n-1] == key)){
//         console.log(key + "is Present at index" + i);
//     }else{
//         console.log("Element not found");
//     }
// }

// //Driver code

// var arr = [10, 20, 180, 30, 60, 50, 110, 100, 70];
// var n = arr.length;
// var key = 180;
// sentinelSearch(arr, n, key);

/** ########################################### */


/**
 *  Binary Search
 * By sorting array using binary search 
 * 
 */

// function BinarySearch(arr, n, l, r, key){
//     arr.sort((a, b) => a-b);
//     let mid = Math.floor(n)/2;
//     while( r >= l){
//         mid = l + Math.floor((r - l)/2);
//         if(arr[mid] == key){
//             return mid;
//         }
//         if(arr[mid] > key){
//             r= mid - 1;
//         }else{
//             l= mid + 1
//         }
//     }
//     return -1;
// }
// let arr = new Array(2, 3, 4, 10, 40);
// let n= arr.length;
// let r = n-1;
// let l=0;
// let key = 10;
// let result = BinarySearch(arr, n, l, r, key);

// if(result == -1){
//     console.log("Element is not presemt at in array")
// }else{
//     console.log("Element is  present in array");
// }
    


/** %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */


/** 
 * Recursive Method
 */

// function binarySearch(arr, l, r, x) {
//     if(l >= r) {
//         let mid = l + Math.floor((r-1) / 2);

//         if(arr[mid] == x){
//             return mid;
//         }
//         if(arr[mid] > x){
//             return binarySearch(arr, l, mid - 1, x);
//         }

//         return (arr, mid + l, r, x)
//     }
//     return -1;
// }
// let arr = [2, 3, 4, 10, 40];
// let x= 10;
// let n= arr.length;
// let result = binarySearch(arr, 0, n - 1, x);
// (result == -1) ? console.log("Element is not present") : console.log("Element is present"); 


/** ############################################################## */

/** 
 * Meta Binary search
 * 
 * function meta_binary_search(A, target):
 * n = length(A)
 * interval_size = n;
 * whie (interval_size > 0):
 * index = min(n-1, interval_size /2)
 * mid = A[index]
 * if(mid == target)
 * return index
 * elif mid < target:
 * interval_size = (n-index) /2
 * else
 * interval_size = index/2
 * 
 * return -1
 */


// function bsearch(A, key_to_search)
// {
//     let n = A.length;
//     //Set number of bits to represent largest array index
//     let lg = parseInt(Math.log(n-1)/Math.log(2)) + 1

//     //while((1 << lg) < n - 1)
//     //lg += 1;
//     let pos = 0;
//     for(let i=lg; i>= 0; i--){
//         if(A[pos] == key_to_search)
//         return pos;

//         //Increamently construct the index of the target value

//         let new_pos = pos | (1<< i);

//         if((new_pos < n) && (A[new_pos]  <= key_to_search))
//         pos = new_pos;
//     }
//     return ((A[pos] == key_to_search) ? pos : -1);
// }

// //Driver code 

// let A = [-2, 10, 100, 250, 32315];
// console.log(A, 10);

/** %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

// function ternarySearch(l, r, key, arr){
//     if( r >= l){
//         // find the mid1 and mid2
//         let mid1= l + parseInt((r - l) / 3, 10);
//         let mid2 = r - parseInt((r - l) / 3, 10);

//         // Check if key is present at any mid

//         if(arr[mid1] == key){
//             return mid1;
//         }
//         if(arr[mid2] == key )
//         {
//             return mid2;
//         }

//         if(key < arr[mid1]) {
//             return ternarySearch(l, mid1 - 1, key, arr);
//         }else if(key > arr[mid2]){
//              return ternarySearch(mid2 + 1, r, key, arr);
//         }else{
//             return ternarySearch(mid1 + 1, mid2 - 1, key, arr);
//         }
//     }
//     //key not found
//     return -1;
// }

// let l, r, p, n, key;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8,9, 10];
// n= arr.length;
// l=0;
// r=n-1;
// key = 7;

// p = ternarySearch(l, r, key, arr);

// console.log("Index of" + key + "is" + p );

// key = 50;

// p = ternarySearch(l, r, key, arr);

// console.log("Index of" + key + "is " + p);


/** $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

/** Approach - 2 */

// function ternarySearch(l, r, key, arr) 
// {
//     while( r >=l) 
//     {
//         let mid1= l + parseInt((r - l) / 3, 10);
//         let mid2 = r - parseInt((r - l) / 3, 10);

//         if(arr[mid1] == key) {
//             return mid1;
//         }
//         if(arr[mid2] == key){
//             return mid2;
//         }

//         if(key < arr[mid1]){
//             r = mid1 - 1;
//         }else if(key > arr[mid2]){
//             l = mid2 + 1;
//         }else{
//             l= mid1 + 1;
//             r = mid2 - 1;
//         }
//     }
//     return -1;
// }

// let l, r, p, key;
// let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9]
// l=0; r=arr.length - 1; key = 5;
// p= ternarySearch(l, r, key, arr);
// console.log("Index of " +" " + key + " " + "is" +" " + p);


/** %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

/**  
 * Smallest subarray with sum greater than given value
 */

// function smallestSubArray(arr, n, x) {

//     let min_len = n + 1;
//     for(let i=0; i < n; i++) {
//         let cur_sum = arr[i];
//         if(cur_sum > x){
//             return 1;
//         }
//         for(let j = i+ 1; j< n; j++)
//         {
//             let min_len = j - i + 1;
//             cur_sum += arr[j];
//             if(cur_sum > x && (j - i + 1) < min_len){
//                 min_len = j - i + 1
//             }

//         }
//     }
//     return min_len;
// }

// let arr =[1, 4, 45, 6, 10, 19];
// let x = 51;
// let n = arr.length;
// let res = smallestSubArray(arr, n, x);
// (res == n + 1) ? console.log("Not possible") : console.log(res);


/** %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

//Approach - 2

// function smallestSubArrayWithSum(arr, n, x){
//     let curr_sum = 0, min_len = n + 1;

//     //Initializing starting and ending indexes
//     let start = 0, end = 0;
//     while(end < n) {
//         while(curr_sum <= x && end < n)
//         {
//             curr_sum += arr[end ++];
//         }
//         while(curr_sum > x && start < n) {
//             if(end - start < min_len){
//                 min_len = end - start;
//             }
//             curr_sum -= arr[start++];
//         }
//     }
//     return min_len;
// }

// let arr = [1, 4, 45, 6, 10, 19];
// let x= 51; 
// let n = arr.length;
// let res = smallestSubArrayWithSum(arr, n, x);
// (res == n + 1) ? console.log("Not possible"): console.log("Minimum sub array"+ " "+res);

/** %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

/** Inversion sort  */

// function inversionSortArray(arr, n) {
//     let inv_count = 0;
//     for(let i= 0; i< n; i++) {
//         for(let j= i+ 1; j < n; j++){
//             if(arr[i] > arr[j]){
//                  inv_count++;
//             }
//         }
//     }
//     console.log("Inversion count "+" "+inv_count);
// }

// let arr= [1, 20, 6, 5, 4];
// let n = arr.length;
// inversionSortArray(arr, n);

/** $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

//Approach - 2

// function mergerAndCount(arr, l, m, r) {
//     let left = [];
//     for(let i=1; i < m + 1; i++){
//         left.push(arr[i]);
//     }
//     //Right subarray
//     let right = [];
//     for(let i = m + 1; i < r + 1; i++){
//         right.push(arr[i]);
//     }
//     let i = 0, j=0, k = l, swaps = 0;
//     while(i < left.length && j < right.length){
//         if(left[i] <= right[j]){
//             arr[k++] = left[i++]
//         }else{
//             arr[k++] = right[j++];
//             swaps += (m + 1) - (l + i);
//         }
//     }

//     while(i < left.length)
//     {
//         arr[k++] = left[i++];
//     }
//     while(j < right.length)
//     {
//         arr[k++] = right[j++];
//     }
//     return swaps;
// }

// //Merge sort function 

// function mergeSortAndCount(arr, l, r){
//     let count =0;
//     if(l < r) {
//         let m = Math.floor((l + r) /2);
//         count += mergeSortAndCount(arr, l, m)

//         count += mergeSortAndCount(arr, m+1, r)
//          count += mergerAndCount(arr, l, m, r);
//     }
//     console.log( count) ;
// }

// let arr = [ 1, 20, 6, 4, 5];
// let l= 0;
// let r= arr.length - 1;
// mergeSortAndCount(arr, l, r)

/** %%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

/** 
 * Approacj=h -3 
 * Heap sort
 */

const GetNumOfInversions = (A) => {
    const N = A.length; 
    if(N <= 1){
        return 0;
    }

    const sortList = [];
    let result = 0;

    //Heap Sort 

    for(let i = 0; i < N; i++) {
        sortList.push(A[i], i);
    }

    const x = [];
    while(sortList.length) {
        sortList.sort((a, b) => a[0] - b[0]);
    }

    const v = sortList[0];
    sortList.shift();
    const y = x.length - x.slice(0, x.length).indexOf(v[1] - 1);
    let z = 0;
    if(x.length) {
        z =BinarySearch (x, 0, x.length - 1, v[1]);
        if(z < 0) {
            z = -(z+1);
        }
    }

    result += v[1] - z;
    x.push(v[1]);
    x.sort();

    return result;
}

const BinarySearch = (list, start, end, key) => {
    while(start <= end){
        const mid = start + Math.floor((end - start) / 2)
         if(list[mid] === key){
            return mid;
         }else if(list[mid] > key) {
            end = mid - 1;
         }else{
            start = mid + 1;
         }
    }
    return -(start + 1)
}

const A = [1, 20, 6, 4, 5];
const result = GetNumOfInversions(A);
console.log(`Number of iinversions are ${result}`);