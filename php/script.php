<?php
    if ($_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest') {
        $a_num = $_POST['a_num'];
        $b_num = $_POST['b_num'];
        $c_num = $_POST['c_num'];

        if(strlen($a_num) == 0 || strlen($b_num) == 0 || strlen($c_num) == 0) {
            echo json_encode('');
            exit;
        }

        $numArr = array('A' => (int)$a_num, 'B' => (int)$b_num, 'C' => (int)$c_num);
        arsort($numArr);
        $numKeys = array_keys($numArr);

        $result = '';

        foreach($numKeys as $key) {
            $result .= $key . ' = ' . $numArr[$key] . ' ';
        }

        echo json_encode($result);
        exit;
    }