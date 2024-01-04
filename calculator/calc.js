const buttons= document.querySelectorAll('button')
const display= document.querySelector('.display')

// Add listeners to all buttons
buttons.forEach(
    function (button){
        button.addEventListener("click", calculate);
    }
)

function calculate(event){
    // What button was clicked?
    const clickedValue = event.target.value

    // Check if = sign was clicked
    if(clickedValue === "="){
        // Is the display empty?
        if(display.value !== ""){
            // Display the value in the top of the calculator
            display.value = eval(display.value)
        }
    } else if (clickedValue === "C"){
        // Clear display
        display.value = ""
    } else{
        //Concatenate the clicked value to the display
        display.value += clickedValue;
    }
}