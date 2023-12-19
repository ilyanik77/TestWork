<?php
    function CBR_XML_Daily_Ru() {
    static $rates;
                
        if ($rates === null) {
            $rates = json_decode(file_get_contents('https://www.cbr-xml-daily.ru/daily_json.js'));
        }
                
        return $rates;
    }
            
    $data = CBR_XML_Daily_Ru();
    $gbp = round($data->Valute->GBP->Value);
            
    echo $gbp;
?>