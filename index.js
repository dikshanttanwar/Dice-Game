let randomNumber = Math.floor(Math.random()*6 + 1);
let randomdiceImage = "dice" + randomNumber + ".png";

let image1 = document.querySelector(".img1");
image1.setAttribute("src",randomdiceImage)


let randomNumber2 = Math.floor(Math.random()*6 + 1);
let randomdiceImage2 = "dice" + randomNumber2 + ".png";


let image2 = document.querySelector(".img2");
image2.setAttribute("src",randomdiceImage2)

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins"
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="Match Draw🍻"
}