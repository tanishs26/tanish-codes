const textBox = document.getElementById("textBox");

textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed "${event.key}".`);
});
