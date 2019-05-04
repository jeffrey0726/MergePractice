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
            $("#course").append('<tr>');
            $("#course").append("<td>"+(i+1)+"</td>");
            $("#course").append("<td>"+(new Date(startDate.getTime()+i*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
            if(topic[i-1] == "不上課")
                $("#course").append('<td id ="noClass">'+topic[i-1]+"</td>");
            else $("#course").append('<td>'+topic[i-1]+"</td>");
            $("#course").append("</tr>");   
        }
    }
    
});