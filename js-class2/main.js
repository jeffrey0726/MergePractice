$(document).ready(function(){
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var minuteUnit = secondUnit*60;
    var hourUnit = minuteUnit*60;
    var dayUnit = hourUnit*24;

    for(var i=0; i <= topicCount; i++){
        if(i == 0)
            $("#course").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
        else{
            var td1 = $('<td>').text(i);
            var td2 = $('<td>').text((new Date(startDate.getTime()+(i-1)*7*dayUnit)).toLocaleDateString().slice(5));
            var td3;
            if(topic[i-1] == "沒有演唱會")
                td3 = $('<td id ="noClass">').text(topic[i-1]);
            else td3 = $('<td>').text(topic[i-1]);
            var tr = $('<tr>').append(td1,td2,td3);
            /*$("#course").append("<tr>");
            $("#course").append("<td>"+(i+1)+"</td>");
            $("#course").append("<td>"+(new Date(startDate.getTime()+i*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
            if(topic[i-1] == "不上課")
                $("#course").append('<td id ="noClass">'+topic[i-1]+"</td>");
            else $("#course").append("<td>"+topic[i-1]+"</td>");*/
            $('#course').append(tr);
            //$("#course").append("</tr>");   
        }
    } 
    $("#set").click(function(){
        var date = $("#start").val();
        var item = date.split('-');
        setMonthAndDate(item[1].replace(/^0/,''), item[2].replace(/^0/,''));   
        for(var x = 0; x < topicCount; x++)
        { 
            document.getElementById("course").rows[x+1].cells[1].innerHTML = (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5);
        }
    });
});