const box = document.getElementById("box");
const elements = document.querySelectorAll("input");
const resultadoFinal = document.querySelector(".resultado");
const btnCopiar = document.querySelector(".btn")

function moveBorder(value, position) {
    let measure = `${value}px`;
    box.style.setProperty(position, measure);
}

elements.forEach((element) => {
    element.addEventListener("input", () => {
        let value = element.valueAsNumber;
        let position = element.id;
        moveBorder(value, position);
        let cssStyle = [];
    elements.forEach((element) => {
      const parameter = `${element.value}px`;
      cssStyle.push(parameter);})
      const result = cssStyle.join(" ");
      const final = `border-radius: ${result};`;
      resultadoFinal.textContent = final;
    });
}); 

btnCopiar.addEventListener("click", ()=>{
  navigator.clipboard.writeText(resultadoFinal.textContent);
})