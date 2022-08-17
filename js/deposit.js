

document.getElementById('btn-deposit').addEventListener('click',function(){

    const newDepositAmount = getInputFieldValueById ('deposit-field');

    const previousTotalDeposit = getTextFieldValueById ('deposit-total');
    
    const currentTotalDeposit = previousTotalDeposit + newDepositAmount;

    setTextFieldValueById ('deposit-total',currentTotalDeposit);

    const totalDepositElement = getTextFieldValueById ('balance-total');
    const totalDeposit = totalDepositElement + newDepositAmount;

    setTextFieldValueById ('balance-total',totalDeposit);
})