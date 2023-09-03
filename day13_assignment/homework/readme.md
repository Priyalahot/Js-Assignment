#catch me


html file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="box">
        <p>Catch Me</p>
    </div>
    
    <script src="./index.js"></script>
</body>
</html>
js file
var box = document.getElementById('box');

var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;


box.addEventListener("mouseover", function(event) {
    var boxAttr = box.getBoundingClientRect();
    console.log(boxAttr);
    
    var pos = getNewPosition(boxAttr.width, boxAttr.height);
    console.log(pos);
    
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});



function getNewPosition(boxWidth, boxHeight) {
    
    var newX = Math.floor((Math.random() * viewWidth)  - boxWidth);
    var newY = Math.floor((Math.random() * viewHeight)  - boxHeight);
    console.log(newX);
    console.log(newY);

    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    
    return {x: newX, y: newY};
}
