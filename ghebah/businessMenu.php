<?php
/**
 * Created by PhpStorm.
 * User: manish
 * Date: 9/17/17
 * Time: 7:51 PM
 */

class BusinessMenu
{
     function getID($today) {
        switch ($today)
        {
            case "Mon":
                return 1;

            case "Tue":
                return 2;

            case "Wed":
                return 3;

            case "Thu":
                return 4;

            case "Fri":
                return 5;

            default:
                return 1;
        }
    }


    function getCurrentDayID(){
        $today = date("D");
        return  $this->getID($today);
    }

    function getDayEng($today) {
        switch ($today)
        {
            case 1:
                return 'Monday';

            case 2:
                return 'Tuesday';

            case 3:
                return 'Wednesday';

            case 4:
                return 'Thursday';

            case 5:
                return 'Friday';

            default:
                return 'Monday';
        }
    }

    function getDayDeu($today) {
        switch ($today)
        {
            case 1:
                return 'Montag';

            case 2:
                return 'Dienstag';

            case 3:
                return 'Mittwoch';

            case 4:
                return 'Donnerstag';

            case 5:
                return 'Freitag';

            default:
                return 'Montag';
        }
    }

    function getSuppe($today) {
        switch ($today)
        {
            case 1:
                return 'Tomaten';

            case 2:
                return 'Macao (Veg)';

            case 3:
                return 'Mango';

            case 4:
                return 'Tomaten';

            case 5:
                return 'Mango';

            default:
                return 'Tomaten';
        }
    }
}