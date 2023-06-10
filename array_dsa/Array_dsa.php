<?php
    //PHP program for reversal algorithm of array rotation

    /** Function to left rotate arr of size n by d */

    function leftRotate(&$arr, $d, $n)
    {
        if($d ==0)
        {
            return ;

        }

        //in case the rotating factor is greater than array length
         $d = ($d % $n);
         reverseArray($arr, 0, $d-1);
         reverseArray($arr, $d, $n-1);
         reverwseArray($arr, 0, $n-1);
    }

    /**Function to reverse $arr from index start to end */


     function reverseArray(&$arr, $start, $end)
    {
        while($start < $end)
        {
            $temp = $arr[$start];
             $arr[$start] =$arr[$end];
             $arr[$end] = $temp;
             $start++;
             $end--;
        }
    }

    //Function to print an array
    function printArray($arr, $size)
    {
        for($i =0; $i < $size; $i++)
        print $arr[$i]."";
    }

    //Driver code 
    $arr = array(1, 2, 3, 4, 5, 6, 7, 8,9);
    $n = sizeof($arr);
    $d = 2;

    //Function calling 
    leftRotate($arr, $d, $n);
    printArray($arr, $n);
?>