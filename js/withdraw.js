document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById ('withdraw-field');

    const previousTotalWithdraw = getTextFieldValueById ('withdraw-total');

    const currentTotalWithdraw = previousTotalWithdraw + newWithdrawAmount;

    setTextFieldValueById ('withdraw-total',currentTotalWithdraw);

    const totalElementValue = getTextFieldValueById ('balance-total');
    const totalAmount = totalElementValue - newWithdrawAmount;
    setTextFieldValueById ('balance-total',totalAmount);

})
