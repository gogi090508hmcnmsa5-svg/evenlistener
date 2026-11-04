const button = document.getElementById("myButton");

function doSomething() {
    alert("Hello World");
}

button.addEventListener("click", doSomething);

const box = document.getElementById("boxElement");

box.addEventListener("mouseover", function() {
    console.log("El cursor esta sobre el Elemento");
});

box.addEventListener("mouseout", function() {
    console.log("El cursor ah salido del Elemento");
});
