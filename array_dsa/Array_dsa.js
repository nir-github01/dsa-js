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

function CountTrinagles(arr){
    var n = arr.length;
    arr.sort();
    var count = 0; 
    for(let i = n-1; i>=1; i--){
        var l=0, r=i-1;
        while(l < r) {
            if(arr[l] + arr[r] > arr[i]){
                count += r - l;
                r--;
            }else{
                l++;
            }
        }
    }
    console.log(count);
}

let arr= [ 10, 21, 22, 100, 101, 200, 300 ];
CountTrinagles(arr);
