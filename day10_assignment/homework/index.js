const btn = document.getElementsByTagName('button')[0];
const colors = ["red","yellow","blue","pink","white","black","green"];

btn.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
