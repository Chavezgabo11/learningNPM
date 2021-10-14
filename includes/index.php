<?php
    require("connect.php");
    require("functions.php");


    if (isset($_GET["id"])) {

        // this is the id user is passing to the scrpt (1, 2, 3, etc)
        // it refers to the row of data that we want to retreive
        $id = $_GET["id"];

        // cresate a variable to hold the result of the database request
        $result = getOneProf($pdo, $id);
    } else {
        $result = getAllProfs($pdo);
    }

    //send the database result (our data) back to the javascript file
    echo json_encode($result);