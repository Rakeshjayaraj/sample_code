<?php
class DBManager {
    private $host = "db699327504.db.1and1.com";
    private $user = "dbo699327504";
    private $password = "Ghebah_menu1";
    private $database = "db699327504";
    public $conn;


    function __construct() {
        $this->connectDB();
    }

    function connectDB() {
        //$conn = mysql_connect($this->host,$this->user,$this->password);
        $this->conn =  mysqli_connect($this->host, $this->user, $this->password, $this->database);
        $this->conn->set_charset("utf8");
    }

    function runQuery($query) {
        $result=mysqli_query($this->conn,$query);
        mysqli_fetch_all($result,MYSQLI_ASSOC);
        return  $result;
    }

    function insert($query) {
        if ($this->conn->query($query) === TRUE) {
           // echo "New record created successfully";
        } else {
           // echo "Error: " . $query . "<br>" . $this->conn->error;
        }
    }

    function numRows($query) {
        $result=mysqli_query($this->conn,$query);
        $rowcount=mysqli_num_rows($result);
        return $rowcount;
    }

    function updateQuery($query) {
        $result = $this->conn->mysqli_query($query);
        if (!$result) {
            die('Invalid query: ' . $this->conn->mysqli_error());
        } else {
            return $result;
        }
    }
}
?>
