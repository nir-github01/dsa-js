<?php

// function findElement($arr, $n, $key)
// {
//     $i;
//     for($i=0; $i < $n; $i++){
//         if($arr[$i] == $key){
//             return $i;
//         }
//         return -1;
//     }
// }
 
// $arr= array(12, 34, 10, 6, 40);
// $n = sizeof($arr);

// $key = 40;

// $position = findElement($arr, $n, $key);

// if($postion == -1){
//     echo ("Element not Found");
// }else{
//     echo ("Element found at postion :" . ($position + 1));
//}

function insertSorted(&$arr, $n, $key, $capacity)
{
    if($n >= $capacity){
        return $n;
    }
    array_push($arr, $key);

    return ($n + 1);
}

//Driver Code 

$arr = array(12, 16, 20, 40, 50, 70);
$capacity = 20;
$n = 6;
$key = 26;
echo "Before Insertion";
$n = insertSorted($arr, $n, $key, $capacity);
echo "\n After Insertion ";
for($i=0; $i < $n; $i++){
    echo $arr[$i] . " ";
}
?>