const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function(){
  //get randon number between 0 -3 because of the length of the array
 const randonNumber = getRandonNumber();
 console.log(randonNumber);

 document.body.style.backgroundColor = colors[randonNumber];
 color.textContent = colors[randonNumber];

});

 function getRandonNumber() {  
    return Math.floor(Math.random() * colors.length);
} 