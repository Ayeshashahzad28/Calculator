// enter value on screen
let display = document.getElementById("displayScreen");
function enter(value)
{
    display.value += value;
}
//it will clear the screen
function clearDisplay(value)
{
    display.value = "";
}
// it will only removeLast
function deleteLast(value)
{
    display.value = display.value.slice(0,-1) ;
}
// evalution
function evaluation(value)
{
    // use try catch for error handle
    try
    {
        display.value = eval(display.value);
    }
    catch
    { 
        display.value = "Error";
    }
    
}