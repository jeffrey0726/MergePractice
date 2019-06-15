var topic = [
    "演唱會",
    "沒有演唱會",
    "演唱會",
    "沒有演唱會",
    "沒有演唱會"
]

startDate = new Date();
function setMonthAndDate(startMonth, startDay)
{
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
/*function changeDate()
{
    var date = $("#start").val();
    var item = date.split('-');
    setMonthAndDate(item[1].replace(/^0/,''), item[2].replace(/^0/,''));   
}*/
setMonthAndDate(3, 30);