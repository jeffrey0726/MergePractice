$(document).ready(function(){
    
    var score = new Array(30);
    for(var i = 0; i < 30; i++)
        score[i] = 0;
    //建立currentQuiz, 储存目前作達到第幾題
    var currentQuiz=1;
    //當按下按鈕後，要做的事情放在這裡面
    $("#startButton").click(function()
    {
        if(currentQuiz==null){
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(var i=0; i < questions[0].answers.length; i++){
                $("#options").append("<input name='options' type='radio' value="+i+">"+"<label>"+questions[0].answers[i][0]+"</label><br><br>");
            }
            $("#startButton").attr("value","Next");
            score[0] = questions[0].answers[0][1];
        }
        else{
            $.each($(":radio"),function(i,val){
                if(i == 30){
                    allScores[0] = score[4] + score[9] + score[13] + score[17] + score[23] + score[29];
                    allScores[1] = score[2] + score[5] + score[12] + score[19] + score[21] + score[28];
                    allScores[2] = score[1] + score[7] + score[14] + score[16] + score[24] + score[27];
                    allScores[3] = score[0] + score[6] + score[10] + score[15] + score[20] + score[25];
                    allScores[4] = score[3] + score[8] + score[11] + score[18] + score[22] + score[26];

                    var max = allScores[0];
                    for(var i=0; i<4; i++)
                        if(allScores[i] > max)
                            max = allScores[i];
                    if(max == allScores[0])
                        $("#question").text("老虎");
                    else if(max == allScores[1])
                        $("#question").text("孔雀");
                    else if(max == allScores[2])
                        $("#question").text("無尾熊");
                    else if(max == allScores[3])
                        $("#question").text("貓頭鷹");
                    else if(max == allScores[4])
                        $("#question").text("變色龍");
                }
                $("#question").text(questions[currentQuiz].question);
                $("#options").empty();
                for(var j=0; j < questions[currentQuiz].answers.length; j++){
                       $("#options").append("<input name='options' type='radio' value="+j+">"+"<label>"+questions[currentQuiz].answers[j][0]+"</label><br><br>");
                }
                score[currentQuiz] = questions[currentQuiz].answers[i][1];
                currentQuiz++;
            });
        }
    });
    
});