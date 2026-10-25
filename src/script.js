const box = document.getElementById("box");
const elements = document.querySelectorAll("input");

function moveBorder(value, position) {
    let measure = `${value}px`;
    box.style.setProperty(position, measure);
}

elements.forEach((element) => {
    element.addEventListener("input", () => {
        let value = element.valueAsNumber;
        let position = element.id;
        moveBorder(value, position);
    });
});
