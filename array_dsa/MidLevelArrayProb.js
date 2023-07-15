/** Merge Two sorted arrays with O(1) extra space
 * 
 * 1. Iterate through every element of ar2[] starting from the last element
 * 2. Do the following for every steps ar2[i]
 *    a) Store last element of ar1[]: last = ar1[m-1]
 *    b) Loop from the second last element of ar1[] 
 *        while element ar1[j] is greater than ar2[i].
 *    c) ar1[j+1] = ar1[j] Move one position ahead, then j- 
 *     d) If last elment of ar1[] is graeeter than ar2[i], then ar1[j+1]
 *         = ar2[i] and ar2[i] = last
 * 3. Print the arrays
 */

// let arr1 =[1, 5, 9, 10, 15, 20];
// let arr2 = [2, 3, 8, 13];
// function mergeArr(m, n) {
//     // Iterrate through all elements of ar2[] starting from the last element
//     for(let i= n-1; i>=0; i--){
//             let last= arr1[m-1];
//             let j ;

//             for(j=m-2; j>= 0 && arr1[j] > arr2[i]; j--){
//                    arr1[j+1] = arr1[j];

//                    //If there was a greater element 
//                    if(last > arr2[i]){
//                     arr1[j+1] = arr2[i];
//                     arr2[i] = last;
//                    }
//             } 
//     }
// }
// mergeArr(arr1.lengtth, arr2.lengtth);
// console.log("After merging first array");
// for(let i=0; i< arr1.length; i++){
//     console.log(arr1[i])
// }

// console.log("Second Array");
// for(let i=0; i< arr2.length; i++){
//     console.log(arr2[i]);
// }

 /** {{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}} */
 /**
  * Follw the below steps to solve problems
  * 
  * 1.Initialize i, j, k as 0, 0, n-1 wghere n is the size of arr1
  * 2. Iterate through every elements of arr1 and arr2 using two pointers
  *     i and j respectively
  *    a) if arr1[i] is less than arr2[j], then increament i
  *    b) elese swap the arr2[j] and arr1[k] and increment j and
  *       decrement k
  * 3. Sort both arr1 and arr2
  */

//  var arr1 = [1, 5, 9, 10, 15, 20];
//  var arr2 = [2, 3, 13, 8];

//  //function two merge two arrays
//     function mergeArray(m, n) {
//             var i=0, j=0, k=n-1;
//             while(i<= k && j < m){
//                  if(arr1[i] < arr2[j]){
//                     i++;
//                  }else{
//                 var temp = arr2[j];
//                     arr2[j] = arr1[k];
//                     arr1[k] = temp;
//                     j++;
//                     k--;
//                 }
//             }
//             arr1.sort((a, b) => a-b);
//             arr2.sort((a, b)=> a-b);
//     }

//     mergeArray(arr1.length, arr2.length)
//         console.log("After merging first Array");
//      for(var a of arr1){
//         console.log(a+" ");
//      }
//      console.log("Second Array");

//      for(var a of arr2){
//         console.log(a + " ");
//      }

/** [[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]] */

/** Follow the below steps to solve the problem
 * 
 * 1. Initialize i with 0
 * 2. Iterate while loop until the last element of array 1
 *     is greater than the fiorst of array 2
 *     a) if arr[i] greater than first element of arr2
 *        i) swap arr1[i] with arr2[0]
 *        ii) sort arr2
 *     b) increamenting i by 1
 * 
 * 3. Print the arrays
 */



// function merge2Array(m, n){

// debugger;
//     m= arr2.length;
//     n = arr1.length;
//     var i=0; var temp = 0;
//      debugger;
//     while(arr1[n-1] > arr2[0]){
//         if(arr1[i] > arr2[0]){
//             temp = arr1[i];
//             arr1[i] = arr2[0];
//             arr2[0] = temp;
//             arr2.sort((a, b) => a-b);
//         }
//         i++;
//     }

// }
// let arr1=[1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// let arr2 = [7, 8, 9, 10, 23, 1];
// merge2Array(arr2.length, arr1.length);
// console.log("after merging First array");
// console.log(arr1.toString());

// console.log("second Array");
// console.log(arr2.toString());

/***(((((((((((((((((((((()))))))))))))))))))))) */

// function sortArray(arr, n){


//     debugger
//  arr=[  98, 78, 89, 0, 9];
// n = arr.length;

//     if(n !=undefined && n >1){
//         n = arr.length;
//     }else{
//         return "Invalid array";
//     }
//   debugger;
//     for(let i=0; i< n; i++){
//         for(let j=i+1; j< n; j++){
//             if(arr[i] > arr[j]){
//                 let temp = arr[i];
//                    arr[i] = arr[j];
//                    arr[j] =temp;
//             }
//         }
//     }
//     console.log("Sorted Array", arr);
// }

/** (((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))) */


/** 
 * Majority Elements
 * 
 *
 */

// function MajorityEle(arr, n) 
// {
//   debugger;
//      arr = [3, 4, 5, 3, 4, 3, 4, 5, 4, 5, 4, 5,6 ,4, 4, 5, 3,4, 5, 4, 4, 4];
//      n = arr.length;
//    let maxCount = 0;
//    let index = -1;
//     let count =0;
//    for(let i=0;  i< n; i++){

//      for(let j=i+1; j <n; j++){
//         if(arr[i] == arr[j])
//         {
//           count += 1;
//       }
//      }
//      if(count > maxCount){
//       maxCount = count;
//       index = i;
//      }
//    }

//    if(maxCount > n/2)
//    {
//     console.log(arr[index]);
//     document.write("Majority Elements is "+" "+arr[index])
//    }else{
//         console.log("No majority Elements")
//         document.write("No majority Elements")
//    }
//   // console.log("Array frequency count"+" "+ temp);
//   // document.write("Array frequency count"+" "+ temp)
// }

// let arr = [3, 4, 5, 3, 2, 5, 4, 4, 3, 4, 6];
// let n= arr.length;
// MajorityEle(arr, n);


/** (((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))) */

/** 
 * Approach - Binary Search Tree
 */

function MajorityEle(){
  debugger
class Node {
  constructor() {
    this.key = 0;
    this.count = 0;
    this.left = null;
    this.right = null ;

  }
}

var majority = 0

function newNode(item)
{
  var temp = new Node();
  temp.key = item;
  temp.count = 1;
  temp.left = temp.right = null;
  return temp;
}

function insert(node, key) 
{
  if(node == null){
    if(majority == 0){
      majority = 1;
    }
    return newNode(key);
  }

  if(key < node.key)
  {
    node.left = insert(node.left, key);
  }else if(key > node.key)
  {
    node.right = insert(node.right, key);
  }else{
    node.count++;
  }
  majority = Math.max(ma, node.count);
  return node;
}
function inorder(root, s) 
{
  if(root != null) {
    inorder(root.left, s);
  }
  if(root.count > (s/2))
  {
    console.log(root.key + '\n');
    document.write(root.key + '\n' )
  }
  inorder(root.right, s);
}

//Driver code 
var a= [1, 3, 4, 3, 3, 3,3, 2];
var size = a.length;
var root = null;

for(i=0; i< size; i++){
  root = insert(root, a[i]);
}

if(majority > (size /2)){
  inorder(root, size);
}else{
  console.log("No Majority belement founds");
  document.write("No majority Elements found");
}
}