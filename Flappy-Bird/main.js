var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');
//建立main遊戲狀態
var mainState = {
    preload: function(){
        //預先載入
        //設定背景顏色
        game.stage.backgroundColor = '#ffc';
        //載入要用的圖片
        game.load.image('bird', 'Flappy-Bird/image/bird_new.jpg');
        game.load.image('pipe', 'Flappy-Bird/image/rock_new.jpg');
        game.load.image('emptyHole', 'Flappy-Bird/image/white_new.jpg');
    },
    create: function(){
        //設定物理狀態，主角
        //選擇物理引擎，目前：ARCADE
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //加入主角到畫面上
        this.bird = this.game.add.sprite(100, 245, 'bird');
        //使主角具備物理特性
        game.physics.arcade.enable(this.bird);
        //地心引力向下1000
        this.bird.body.gravity.y = 1000;
        //空白鍵 -> 跳
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
        //建立20塊磚塊的群組，並都給予物理特性
        this.pipes = game.add.group();
        this.pipes.enableBody = true;
        this.pipes.createMultiple(20, 'pipe');
        
        //建立8塊空白塊的群組，並都給予物理特性
        this.emptyHoles = game.add.group();
        this.emptyHoles.enableBody = true;
        this.emptyHoles.createMultiple(8, 'emptyHole');
        
        //每1.5秒，就執行addRowOfPipes方法
        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
        
        this.score = 0;//遊戲分數
        this.isPassFirstOne = false;//是否已通過第一個障礙物
        this.lableScore = game.add.text(20, 20, "0",{ font: "30px Arial", fill: "#000"});//顯示分數
        
    },
    update: function(){
        //遊戲每秒來60次
        
        //主角超出邊界就結束遊戲
        if(this.bird.isWorld == false)
            this.restartGame();
        //主角碰到磚塊時，就執行hitPipe方法-掉下去死掉
        game.physics.arcade.overlap(this.bird, this.pipes, this.hitPipe, null, this);
        //主角經過空隙，就執行hitHole方法-順利通過
        game.physics.arcade.overlap(this.bird, this.emptyHoles, this.hitHole, null, this);
    },
    hitHole: function(){
        //已通過第一個，可以開始計分
        this.isPassFirstOne = true;
    },
    hitPipe: function(){
        //已經不存活，則不再重複執行
        if(this.bird.alive == false) return;
        
        this.bird.alive = false;//主角陣亡
        
        //終止timer-不再產生障礙物
        game.time.events.remove(this.timer);
        
        //所有障礙物不再往前移動
        this.pipes.forEachAlive(function(p){
            p.body.velocity.x = 0;
        }, this);
    },
    jump: function(){
        //確認主角是否還存活
        if(this.bird.alive == false) return;
        //往上速度350
        this.bird.body.velocity.y = -350;
    },
    restartGame: function(){
        //重新載入main
        game.state.start('main');
    },
    addOnePipe:  function(x, y, isEmpty){
        if(!isEmpty){//一般障礙物
            //回收離開記憶體的障礙物
            var pipe = this.pipes.getFirstDead();
            //重新設定位置，由傳入的x, y決定
            pipe.reset(x, y);
            //速度x為-200
            pipe.body.velocity.x = -200;
            //超出界線就殺掉
            pipe.checkWorldBounds = true;
            pipe.outOfBoundsKill = true;
        }
        else{//是空隙
            var hole = this.emptyHoles.getFirstDead();
            hole.reset(x, y);
            hole.body.velocity.x = -200;
            hole.checkWorldBounds = true;
            hole.outOfBoundsKill = true;
        }
    },
    addRowOfPipes: function(){
        //產生一個亂數介於1~5，來決定空隙在哪
        var hole = Math.floor(Math.random()*5)+1;
        //除了空隙兩格，其他補上障礙物
        for(var i = 0; i < 8; i++){
            if(i != hole && i != hole + 1){
                this.addOnePipe(400, i*(50+10)+10,false);
            }
            else{
                this.addOnePipe(400, i*(50+10)+10,true);
            }
        }
        if(this.isPassFirstOne){
            this.score +=1;
            this.lableScore.text = this.score;
        }
    }
};

game.state.add('main', mainState);
//開始載入main遊戲置狀態
game.state.start('main');