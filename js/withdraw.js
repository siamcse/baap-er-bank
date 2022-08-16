//get the withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //get the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    withdrawField.value = '';

    // check isNaN 
    if(isNaN(newWithdrawAmount)){
        alert("please enter baaper taka");
        return;
    }
    
    //get the withdraw previous amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    //get the total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText);

    //check previous amount
    if(newWithdrawAmount > balanceTotal){
        alert("Baap er bank e eto taka nai!!");
        return;
    }
    //add the total withdraw amount
    withdrawTotalElement.innerText = previousWithdrawTotal + newWithdrawAmount;

    
    //add to total balance
    balanceTotalElement.innerText = balanceTotal - newWithdrawAmount;

    
})