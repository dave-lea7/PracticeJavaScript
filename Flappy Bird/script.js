let myGamePiece;
let myObstacles = [];
let myScore;

const myGameArea = 
{
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width =480;
        this.canvas.height=270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0; 
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
        })
    },
    clear : function(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    },
    over : function() {
        clearInterval(this.interval);
    }
}

function startGame()
{
    myGamePiece = new component(30, 30, "pink", 10, 120);
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
}


function component(width, height, color, x, y, type)
{
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function()
    {
        ctx =myGameArea.context;
        if(this.type == "text")
        {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }else
        {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function()
    {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.crashWith = function(otherobj) {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let otherleft = otherobj.x;
        let otherright = otherobj.x + (otherobj.width);
        let othertop = otherobj.y;
        let otherbottom = otherobj.y + (otherobj.height);
        let crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
    }
}

function updateGameArea()
{
    let x, y ;
    for(let i = 0; i < myObstacles.length; i++)
    {
        if(myGamePiece.crashWith(myObstacles[i]))
        {
            myGameArea.over();
            return;
        }
    }
    myGameArea.clear();
    myGameArea.frameNo +=1;
    if(myGameArea.frameNo == 1 || everyinterval(150))
    {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
    for(let j = 0;j < myObstacles.length; j++)
    {
        myObstacles[j].x += -1;
        myObstacles[j].update();
    }
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -1; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 1; }
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
       
}

function everyinterval(n) // 프레임 별로 장애물 생성하기
{
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}