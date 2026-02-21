document.getElementById('cashOut-btn').addEventListener('click',function(){
   //1- get the agent number & validate; 
   const cashOutNumber=getValueFromInput('CashOut-number');
   if(cashOutNumber.length !=11){
    alert('Invalid Number');
        return
   }
   //2- get the amount, validate, convert, to number
   const cashOutAmount=getValueFromInput('CashOut-amount');
    //3- get the current balance , validate,convert to number
     const currentBalance=getBalance();
     //4- Calculate new balance
     const newBalance=currentBalance - Number(cashOutAmount);
     if(newBalance<0){
        alert('Invalid Amount');
        return
     }
     const pin =getValueFromInput('cashOut-pin');
     if(pin ==='1234'){
        alert('CashOut successful');
       setBalance(newBalance)
     }else{
        alert('Invalid Pin');
        return
     }
})
// document.getElementById('cashOut-btn').addEventListener('click',function(){
//     //1- get the agent number & validate;
//     const cashOutNumberInput=document.getElementById('CashOut-number');
//     const cashOutNumber=cashOutNumberInput.value;
//     if(cashOutNumber.length !=11){
//         alert('Invalid Agent Number');
//         return;
//     }
//     //2- get the amount, validate, convert, to number
//     const cashOutAmountInput=document.getElementById('CashOut-amount');
    
//     const cashOutAmount=cashOutAmountInput.value;
//     //3- get the current balance , validate,convert to number
//     const balanceElement =document.getElementById('balance');
//     const balance=balanceElement.innerText;
//     //4- Calculate new balance
//     const newBalance=Number(balance) - Number(cashOutAmount);
//     if(newBalance < 0){
//         alert('Invalid Amount');
//         cashOutAmountInput.value = '';
//         return
//     }
//     //5- get the pin and verify
//     const cashOutPinInput=document.getElementById('cashOut-pin');
//     const pin=cashOutPinInput.value;
//     if( pin === '1234'){
//         alert('CashOut successful');
//         balanceElement.innerText=newBalance;
//         cashOutNumberInput.value = '';
//         cashOutAmountInput.value = '';
//         cashOutPinInput.value = '';
          
//         //5-1 true:: show an alert > set balance
//     }else{
//          //5-2 false:: show an error alert > return
//          alert('Invalid pin');
//          cashOutPinInput.value = '';
//          return;
//     }   
// })

