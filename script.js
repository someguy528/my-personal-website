const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript, I'm learning web development";
document.querySelector("body").appendChild(h2);

const inputButton = document.getElementById('button');
function clickDemo() {
    alert("This button doesn't seem to do anything.");
};
inputButton.addEventListener('click', clickDemo)

