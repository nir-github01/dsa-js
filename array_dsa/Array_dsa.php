<?php
    //PHP program for reversal algorithm of array rotation

    /** Function to left rotate arr of size n by d */

    // function leftRotate(&$arr, $d, $n)
    // {
    //     if($d ==0)
    //     {
    //         return ;

    //     }

    //     //in case the rotating factor is greater than array length
    //      $d = ($d % $n);
    //      reverseArray($arr, 0, $d-1);
    //      reverseArray($arr, $d, $n-1);
    //      reverwseArray($arr, 0, $n-1);
    // }

    // /**Function to reverse $arr from index start to end */


    //  function reverseArray(&$arr, $start, $end)
    // {
    //     while($start < $end)
    //     {
    //         $temp = $arr[$start];
    //          $arr[$start] =$arr[$end];
    //          $arr[$end] = $temp;
    //          $start++;
    //          $end--;
    //     }
    // }

    // //Function to print an array
    // function printArray($arr, $size)
    // {
    //     for($i =0; $i < $size; $i++)
    //     print $arr[$i]."";
    // }

    // //Driver code 
    // $arr = array(1, 2, 3, 4, 5, 6, 7, 8,9);
    // $n = sizeof($arr);
    // $d = 2;

    // //Function calling 
    // leftRotate($arr, $d, $n);
    // printArray($arr, $n);
/******************************************** */
//    function rearrangeNum (&$arr, $n){

//     $i = -1;
//       for($j=0; $j < $n; $j++){
//         if($arr[$j] < 0){
//             $i++;
//             swap($arr[$i], $arr[$j]);
//         }
//       }
//        $pos = $i + 1; 
//        $neg = 0; 

//        while($pos < $n && $neg < $pos && $arr[$neg] <0)
//        {
//         swap($arr[$neg], $arr[$pos]);
//         $pos++;
//         $neg += 2;
//        }
//    }

//    function swap(&$a, &$b){
//     $temp = $a;
//     $a = $b;
//     $b = $temp;
//    }


//    function printArray($arr, $n){
//     for($i = 0; $i< $n; $i++){
//         echo " ". $arr[$i]. " ";
//     }
//    }

//    //Driver code 
//    $arr = array(-1, 2, -2, -3, 4, 5, 6, -7, 8, 5);
//    $n = count($arr);
//    rearrangeNum($arr, $n);
//    printArray($arr, $n);

    function reorder($arr, $index, $n){
        for($i=0; $i < $n; $i++){
            $temp[$index[$i]] = $arr[$i];
        }

        for($i=0; $i < $n; $i++){
            $arr[$i] = $temp[$i];
            $index[$i] = $i;
        }
        echo "Reorder array is: \n";
        for($i=0; $i < $n; $i++){
            echo $arr[$i]. " "; 
        }
        echo "\nModified Index array is : \n";
        for($i=0; $i < $n; $i++){
            echo $index[$i]." ";
        }
    }
    //Driver Code
    $arr = array(50, 40, 70, 60, 90);
    $index = array(3, 0, 4, 1, 2);
    reorder($arr, $index, $n);
?>