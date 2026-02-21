//machine id--input value
console.log('connect machine');

function getValueFromInput(id){
    const input=document.getElementById(id);
    const value=input.value;
   return value;
}
//machine -> balance
function getBalance(){
 const balanceElement=document.getElementById('balance');
 const balance=balanceElement.innerText;
 return Number(balance);
}
//machine -> set Balance
function setBalance(value){
    const balanceElement=document.getElementById('balance');
    balanceElement.innerText=value;
}
//machine id-> hide all > show id 
function showOnly(id){
    const addMoney=document.getElementById('add-money');
    const cashOut=document.getElementById('CashOut');
    const transaction=document.getElementById('history');

    //all hide
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    transaction.classList.add('hidden')

    //show id element
    const selected=document.getElementById(id);
    selected.classList.remove('hidden')
}
//machine -> clear id
function clearInput(id){
  document.getElementById(id).value = '';
}