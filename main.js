// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호<유저번호 Down!!
// 랜덤번호>유저번호 Up!!
// Reset 버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝남(버튼은 disable)
// 유저가 1~100범위 밖에 숫자를 입력하면 알려준다.
// 기회를 깍지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지않는다

let computerNum=0; 
let userNum=document.getElementById("user-input");
let playButton=document.getElementById("play-button");
let resetButton=document.getElementById("reset-button");
let resultArea=document.getElementById("result-area");
let chance = 5;
let chanceArea=document.getElementById("chance-area");
let gameOver=false;
let history=[];

chanceArea.innerHTML=`남은 기회:${chance}`;
userNum.addEventListener("focus",()=>{userNum.value=""})
playButton.addEventListener("click",playGame)
resetButton.addEventListener("click",reset)

//컴퓨터의 랜덤번호받아내는 함수
function randomNum(){
    computerNum=Math.floor(Math.random()*50)+1; //random함수는 소수로나오므로 100을 곱한다. 1을 더하는 이유는 예로 0.003일때 0으로나오는것을 방지하기위해!
    console.log("랜덤번호", computerNum)
}

function playGame(){
    let userValue=userNum.value

    if(userValue<1 && userValue>50){
        resultArea.textContent="1에서 50까지의 숫자를 입력해주세요"
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 값입니다."
        return;
    }

    chance--;
    chanceArea.textContent=`남은 기회: ${chance}번`;
    console.log("기회?",chance);
    history.push(userValue);
    console.log("입력값",history);
    

    if(userValue>computerNum){
        resultArea.textContent="Down!";

    }else if(userValue<computerNum){
        resultArea.textContent="Up!";
    
    }else{
        resultArea.textContent="Clear!";
        chanceArea.innerHTML="reset버튼을 눌러주세요";
        playButton.disabled=true;
     
    }
 
    if(chance == 0){
        resultArea.textContent="fail ㅜ.ㅜ";
        chanceArea.innerHTML="reset버튼을 눌러주세요"
        playButton.disabled=true;
        gameOver = true;
    }
    if(gameOver == true){
        resultArea.textContent="fail ㅜ.ㅜ";
        chanceArea.innerHTML="reset버튼을 눌러주세요"
        playButton.disabled=true;
    }

}

function reset(){
    userNum.value="";
    resultArea.textContent="1에서 50까지의 숫자를 입력해주세요";
    chanceArea.innerHTML="남은 기회: 5번";
    randomNum();
    playButton.disabled = false;
    gameOver = false;
    chance = 5;
    history = [];
}
randomNum();