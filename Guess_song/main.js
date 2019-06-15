$(document).ready(function(){
    //建立currentQuiz, 储存目前作達到第幾題
    var currentQuiz=null;
    var count = 0;
    var musicRand = null;
    var nameRand = new Array(3);
    var select = null;
    var correct = 0;
    var music = null;
    function init(){
        select = Math.floor(Math.random()*3);
        musicRand = Math.floor(Math.random()*20);
        if(select == 0){
            nameRand[0] = musicRand;
            while(true){
                nameRand[1] = Math.floor(Math.random()*20);
                if(nameRand[1] != musicRand)
                    break;
            }
            while(true){
                nameRand[2] = Math.floor(Math.random()*20);
                if(nameRand[2] != nameRand[1] && nameRand[2] != nameRand[0])
                    break;
            }
        }
        if(select == 1){
            nameRand[1] = musicRand;
            while(true){
                nameRand[0] = Math.floor(Math.random()*20);
                if(nameRand[0] != musicRand)
                    break;
            }
            while(true){
                nameRand[2] = Math.floor(Math.random()*20);
                if(nameRand[2] != nameRand[1] && nameRand[2] != nameRand[0])
                    break;
            }
        }
        if(select == 2){
            nameRand[2] = musicRand;
            while(true){
                nameRand[0] = Math.floor(Math.random()*20);
                if(nameRand[0] != musicRand)
                    break;
            }
            while(true){
                nameRand[1] = Math.floor(Math.random()*40);
                if(nameRand[1] != nameRand[0] && nameRand[1] != nameRand[2])
                    break;
            }
        }
    }
    //當按下按鈕後，要做的事情放在這裡面
    $("#audio_btn").click(function(){
        if(musicRand != null){
            music = document.getElementById("music");
            $("#music").attr("src",musicFile[musicRand]);
            if(music.paused){
                music.play();
                $("#music_btn").attr("src","Guess_song/play.gif");
            }else{
                music.pause();
                $("#music_btn").attr("src","Guess_song/pause.gif");
            }   
        }
    });
    $("#startButton").click(function()
    {
        //如果還沒開始作答就從這裡開始
        if(currentQuiz==null){
            init();
            //設定目前作答道第零題
            currentQuiz=0;
            $("#question").empty();
            //每次顯示選項前先將該區域清空(可以試者先不做這一步)
            $("#options").empty();
            //將一個一個選項內容，添加至選項區塊
            $("#options").append("<input name='options' type='radio' id='radio-alpha' value="+0+">"+"<label  for='radio-alpha'>"+Name[nameRand[0]]+"</label><br><br>");
            $("#options").append("<input name='options' type='radio' id='radio-beta' value="+1+">"+"<label  for='radio-beta'>"+Name[nameRand[1]]+"</label><br><br>");
            $("#options").append("<input name='options' type='radio' id='radio-gamma' value="+2+">"+"<label  for='radio-gamma'>"+Name[nameRand[2]]+"</label><br><br>");
            //將按鈕上的文字換成next或下一題
            $("#startButton").attr("value","下一題");
        }
        //如果已經作答就從這裡繼續
        else{
            $.each($(":radio"),function(i,val){
               if(val.checked){
                   //使用者所選取的項目是否已產生最終結果(A~D)
                   if(currentQuiz == 10){
                       //顯示最終結果的標題
                       $("#question").text("恭喜你答對了"+correct+"題!");
                       //將選項區清空
                       $("#options").empty();
                       //顯示最終結果的詳細內容
                       count = 0;
                       correct = 0;
                       currentQuiz=null;
                       music.pause();
                       //修改按鈕為重新開始
                       $("#startButton").attr("value","重新開始");
                   }
                   else{
                       if(nameRand[i] == musicRand)
                           correct++;
                       //清空選項區塊
                       $("#options").empty();
                       init();
                       //顯示新的選項內容
                       $("#options").append("<input name='options' type='radio' id='radio-alpha' value="+0+">"+"<label  for='radio-alpha'>"+Name[nameRand[0]]+"</label><br><br>");
                       $("#options").append("<input name='options' type='radio' id='radio-beta' value="+1+">"+"<label  for='radio-beta'>"+Name[nameRand[1]]+"</label><br><br>");
                       $("#options").append("<input name='options' type='radio' id='radio-gamma' value="+2+">"+"<label  for='radio-gamma'>"+Name[nameRand[2]]+"</label><br><br>");
                       count = 0;
                       currentQuiz++;
                       music.pause();
                   }
                   //完成後即可跳離迴圈
                   return false;
               } 
            });
        }
    });
    
});