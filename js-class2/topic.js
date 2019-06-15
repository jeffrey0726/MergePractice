var topic = [
    "周興哲演唱會",
    "沒有演唱會",
    "蕭秉治演唱會",
    "沒有演唱會",
    "沒有演唱會",
    "林俊傑演唱會",
    "沒有演唱會",
]

startDate = new Date();
function setMonthAndDate(startMonth, startDay)
{
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setMonthAndDate(6, 15);