const display = document.getElementById("display");

const calculator = document.querySelectorAll(".calculatorButtons input");
calculator.forEach(button=>{
  button.addEventListener("click",e=>{
    const buttonValue =e.target.value;
    if(buttonValue === "AC"){
      display.value = "";
    }
    else if(buttonValue === "DE"){
      display.value = display.value.toString().slice(0,-1);
    }
    else if(buttonValue ==="="){
      display.value = eval(display.value);
    }
    else {
      display.value+=buttonValue;
    }

  })
})