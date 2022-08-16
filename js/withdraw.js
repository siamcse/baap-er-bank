//get the withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //get the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    
    //get the withdraw previous amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
    //add the total withdraw amount
    withdrawTotalElement.innerText = previousWithdrawTotal + newWithdrawAmount;

    //get the total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText);
    //add to total balance
    balanceTotalElement.innerText = balanceTotal - newWithdrawAmount;

    withdrawField.value = '';
})