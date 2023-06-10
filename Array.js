// function findElement(arr, n, key) {
//     let i;
//     for(i=0; i< n; i ++){
//         if(arr[i] == key){
//             return i;
//         }
//     }
//     return -1;
// }

// //Driver Program

// let arr = [12, 34, 10, 6, 40];
// let n = arr.length;

// let key = 40; 
// let position = findElement(arr, n, key);

// if(position == -1){
//     console.log("Element Not Found");
// }else{
//     console.log("Element Found at position: " + (position + 1));
// }


// function insertSorted(arr, n, key, capacity){
//     if(n >= capacity){
//         return n; 
//     }
//     arr[n] = key;
//     return (n + 1);
// }

// let arr = new Array(20);
// arr[0] = 12;
// arr[1] = 16;
// arr[2] = 20;
// arr[3] = 40;
// arr[4] = 50;
// arr[5] = 70;
// let capacity = 20;
// let n = 6;
// let i, key = 26;

// console.log("Before Insertion:");

// for(i = 0; i< n; i++) {
//     console.log(arr[i] + " ");
// }

// //Inserting Key

// n = insertSorted (arr, n , key, capacity);
// console.log("After Insertion");
// for(i=0; i <n; i++){
//     console.log(arr[i] + " ");
// }


//Insert Element at any position

// function insertElement(arr, n, x, pos){
//     var i = n - 1;
//     for(i; i>= pos; i--){
//         arr[i + 1] = arr[i];
//     }
//     arr[pos] = x;
// }

// var arr = Array(15).fill(0);
// arr[0] = 2;
// arr[1] = 4; 
// arr[2] = 1;
// arr[3] = 8; 
// arr[4] = 5;

// var n = 5;
// var x = 10;

// var pos = 2; 
// console.log("Before Insertion:");
// var i = 0;
// for(i; i< n; i++){
//     console.log(arr[i] + " ");
// }

// //Inserting key at specific position

// insertElement(arr, n, x, pos);
// n += 1;
// console.log("\n\nAfter Insertion: ");
// i = 0;
// for(i; i< n; i++){
//     console.log(arr[i] + " ");
// }

/**To find of subarray 
 * 
 * 1. Array length
 * 2. Ittirate of each element
 * 3. condition
 * 4. Ittirate of each element from next index
 */


