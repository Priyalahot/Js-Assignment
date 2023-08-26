var colors = ["red","green","black","blue","yellow","pink","orange"];
  var index = 0;
  var isTriangle = false;
  
  var shape = document.getElementById("changeShape");
  var color = document.getElementById("changeColor");
  
  shape.addEventListener("click", changeShape);
  color.addEventListener("click", changeColor);
  
  function changeColor() {
    if (index === colors.length) {
      index = 0;
    }
    document.getElementById("circle").style.backgroundColor = colors[index];
    index++;
  }
  
  function changeShape() {
    if (!isTriangle) {
      var i = document.getElementsByClassName("square")[0];
      i.className = "triangle";
      isTriangle = true;
    }else{
      var i = document.getElementsByClassName("triangle")[0];
      i.className = "square";
      isTriangle = false;
    }
  }
  