<?php 

// $date = date('d.m.Y');
// $dateParse = str_split($date);
// foreach ($dateParse as $elem) {
//     if( is_numeric($elem)) {
//         $sumDate += $elem;
//     }
// }

// echo $sumDate;

function sumDate() {

    $sumDate = 0;
    $date = date('d.m.Y');
    $dateParse = str_split($date);
    foreach ($dateParse as $elem) {
        if( is_numeric($elem)) {
            $sumDate += $elem;
        }
        
    }
    return $sumDate;
}

echo sumDate();
?>