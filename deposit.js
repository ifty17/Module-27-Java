/*
1. add eventListener to the deposit button
2. get deposit amount from the deposit input field
2.5 convert the string deposit amount to a number type

3. clear the deposit input field getting the value 

4. get the previous deposit total

5. calculate new deposit total and set the value to the deposit total
6. get current balance
*/


//Step-1
document.getElementById("btn-deposit").addEventListener('click', function(){
//Step-2
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
// Step-3
    depositField.value = '';
//Step-4
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText ;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
//Step-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
//Step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
//Step-7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})