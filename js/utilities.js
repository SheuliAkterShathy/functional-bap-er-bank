function getInputFieldValueById (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextFieldValueById (textFieldId){
    const textField = document.getElementById(textFieldId);
    const textFieldValueString = textField.innerText;
    const textFieldValue = parseFloat(textFieldValueString);
    return textFieldValue;
}

function setTextFieldValueById (textFieldId, newValue){
    const textField = document.getElementById(textFieldId);
    textField.innerText = newValue; 
}