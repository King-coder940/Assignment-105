function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
    
}
function getTextFieldValueById(id){
    const inputText = document.getElementById(id).innerText;
    const textNumber = parseFloat(inputText);
    return textNumber
}
