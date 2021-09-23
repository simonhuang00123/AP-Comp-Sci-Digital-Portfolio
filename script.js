const randomButton = document.querySelector("#random");
let colors = ["red","blue","green","orange","green","purple","brown"];
function randomize(event){
    document.body.style.color = colors[Math.floor(Math.random() * colors.length)];
}

randomButton.onclick = randomize;