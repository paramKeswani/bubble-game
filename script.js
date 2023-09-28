function bubbleMaker(){

var clutter = " ";

for(var i =1;i<=168;i++)
{
    var rn = Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 6;
function runTimer()
{
    var timerint = setInterval(function(){

        if(timer > 0)
        { timer--;
        document.getElementById("time").innerHTML = timer;

        }
        else
        {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;

        }
    },1000);


}

// function onClickScreen()
// {
    
//         var input = document.getElementById("hitval").click();
//         if(input == document.getElementById("hitval").innerHTML)
//         {
//             alert("got element");

//         }
    

// }

function changeHit()
{
    bubbleMaker();
    document.getElementById("hitval").innerHTML = Math.floor(Math.random() * 10);



}

function increaseScore()
{
    var score = document.getElementById("score").innerHTML;
    score = parseInt(score) + 10;
    
    document.getElementById("score").innerHTML = score;
}

 
window.onclick = e =>
{

    var click = e.target.innerHTML;
    

    var hit = document.getElementById("hitval").innerHTML
    
    if(hit==click )
    {
        increaseScore();
        changeHit();

    }

    else {

    }
 } 

// {
//     console.log (e.target);
// };
// if(input === document.getElementById("hitval").innerHTML)
// {
//     alert("got element");
// }

runTimer();
bubbleMaker();


