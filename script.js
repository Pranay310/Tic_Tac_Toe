let btn = document.querySelectorAll(".btn");
let alternate = true;
let rebtn = document.querySelector("#resetbtn");
let body = document.querySelector("body");
let newEle = document.createElement("h1");

let arr = 
[
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6],
]

let winnerPattern = () =>
{
	for(pattern of arr)
	{
		let pVa1 = btn[pattern[0]].innerText;
		let pVa2 = btn[pattern[1]].innerText;
		let pVa3 = btn[pattern[2]].innerText;

		if(pVa1 != "" && pVa2 != "" && pVa3 != ""){
			if(pVa1 === pVa2 && pVa2 === pVa3){
				body.append(newEle);
				newEle.innerText = `Winner is ${pVa1}`;
				resetGame();
			}
		}
		
	}
}

function resetGame()
{
	btn.forEach((button)=>{
		button.disabled = false;
		button.innerText = "";
		alternate = true;
	})
}
function newGame(){
	newEle.remove();
}

btn.forEach((btns)=>{
	btns.addEventListener("click",(ele)=>{

	if(alternate === true)
	{
		ele.target.innerText = "X";
		ele.target.disabled = true;
		alternate = false;
	}
	else
	{
		ele.target.innerText = "O";
		ele.target.disabled = true;
		alternate = true;
	}
	winnerPattern();
})
})

