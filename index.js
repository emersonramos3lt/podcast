// Menu
const mainMenu = document.getElementById("mainMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const links = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

links.forEach(item => {
    item.addEventListener("click", function() {
        close();
    });
});

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0%";
    document.body.style.overflow = "hidden";
}

function close() {
    mainMenu.style.top = "-110%";
    document.body.style.overflow = "auto";
}

// CURSOR
// CODE OF INSPIRATION: https://codepen.io/copetus/pen/QWLQmXx

const cursor = document.getElementsByClassName("cursor")[0]; // Quando pegamos uma class, precisamos definir qual class queremos pegar, então usamos [0], para definir o primeito item com está class

// Definir valores dos eixos
let mouseX = 0; 
let mouseY = 0;

let ballX = 0;
let ballY = 0;

// Definir a velocidade do cursor
let speed = 0.1;

function animate() {
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;

    ballX = ballX + (distX * speed);
    ballY = ballY + (distY * speed);

    cursor.style.left = ballX + 'px';
    cursor.style.top = ballY + 'px';

    requestAnimationFrame(animate);
};

animate(); // Chamamos a function acima

document.addEventListener("mousemove", function(e) {
    mouseX =  e.pageX;
    mouseY = e.pageY;
}); // Add um evento 

document.addEventListener("click", function(e) {
    e.preventDefault;

    cursor.classList.remove("active");


    void cursor.offsetWidth;

    cursor.classList.add("active");
}, false);