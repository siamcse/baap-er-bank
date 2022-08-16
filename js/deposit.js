// get the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //get the input field with .value
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    
    //get the deposit value
    const depositTotalElement = document.getElementById('deposit-total');
    const currentDepositTotal = parseFloat(depositTotalElement.innerText);
    //add to deposit 
    depositTotalElement.innerText = newDepositAmount + currentDepositTotal;

    //get the total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText);
    //add to total balance
    balanceTotalElement.innerText = balanceTotal + newDepositAmount;

    depositField.value = '';
    
})