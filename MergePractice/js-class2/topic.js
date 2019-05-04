var topic = [
    "隨機性",
    "不上課",
    "重複性",
    "不上課",
    "不上課"
]

　startDate = new Date();
 function setMonthAndDate(startMonth, startDay)
{
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

var form = document.getElementById("start");
var date = form.tripstart.value;
var item = new Array();
item = String.split("-");
setMonthAndDate(item[1], item[2]);

//setMonthAndDate(3, 30);