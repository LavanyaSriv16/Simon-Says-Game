let gameseq =[];
let userseq = [];
let started = false;
let level = 0;

let btns =["yellow","purple","green","red"];

document.addEventListener("keypress",function(){
    if(started == false){
    console.log("game started");
    started = true;

    levelup();
    }
});

function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);

};

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    
    };

let h2 = document.querySelector("h2");

function levelup(){
userseq = [];
level++;
h2.innerText = `Level ${level}`;

let randindex = Math.floor(Math.random()*4);
let randcolor = btns[randindex];
let randbtn = document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
console.log(gameseq);
// console.log(randindex);
// console.log(randcolor);
// console.log(randbtn);
gameflash(randbtn);
};

function checkAns(idx){

    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
    }
}
        else{
            h2.innerHTML = `Game over! your score is <b> ${level}</b> <br> Press any key to restart`;
            document.getElementById("wrongbutton").play();
            document.querySelector("body").style.background = "red";
            setTimeout(function(){
                document.querySelector("body").style.background = "linear-gradient(to right, #ffecd2, #fcb69f)";
                reset();
         } ,200);
         reset();
        }
    }


function buttonpress(){
// console.log(this);
let btn = this;
userflash(btn);
usercolor = btn.getAttribute("id");
userseq.push(usercolor);

checkAns(userseq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",buttonpress);
}

function reset(){
    gameseq = [];
    userseq = [];
    started = false;
    level = 0;
   
}
