let box = document.querySelector(".box");
let h1 = document.querySelector("h1");
box.addEventListener('mouseover',function(e){
	let x = e.clientX;
	let y = e.clientY; 

	z=Math.floor(Math.random()*200);

	let rgb = "Red: " + x + ", Blue: " + y +", Green : " + z; 
	h1.textContent = rgb;

	document.body.style.backgroundColor="rgb("+x+","+y+","+z+")";
})