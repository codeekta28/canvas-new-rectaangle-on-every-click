console.log("This is index file");
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.addEventListener("click",(e)=>{
     let context = canvas.getContext("2d");
     let randomColor = Math.floor(Math.random()*16777215).toString(16);
     context.fillStyle=`#${randomColor}`
    let div = document.createElement("div");
    div.width = window.innerWidth;
    div.height = window.innerHeight;
    div.appendChild(document.createTextNode(context.fillRect(e.clientX,e.clientY,100,100)));
    canvas.appendChild(div);
    xAxis = xAxis+50;
    yAxis = yAxis+50;

})

// context.fillRect(200,300,100,100);
// context.fillRect(500,100,100,100);
// context.fillRect(200,600,100,100);
console.log(canvas);