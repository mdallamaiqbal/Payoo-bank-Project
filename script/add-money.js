document.getElementById('add-money-btn').addEventListener('click',function(){
   //1-bank account
    const bankAccount=getValueFromInput('add-money-bank');
    if(bankAccount =='Select Bank'){
        alert('Please select a bank');
        return
    }
    //2 -get bank account number
    const accno=getValueFromInput('add-money-number');
    if(accno.length  !=11){
        alert('Invalid Acc No')
        return
    }
    //3-get amount
    const amount=getValueFromInput('add-money-amount');
    const currentBalance=getBalance();
    const newBalance=currentBalance + Number(amount);
    const pin=getValueFromInput('add-money-pin');
    if(pin ==='1234'){
        alert(`Add Money success from ${bankAccount} 
        at ${new Date()}`);
        setBalance(newBalance);
        //1- history-container catch
        const history=document.getElementById('history-container');
        //2-new div create
        const newHistory=document.createElement('div');
        //3- new div innerHTML add
        newHistory.innerHTML=`
        <div class="transaction-card p-5 bg-base-100">
        Add Money success from ${bankAccount} ,acc-no ${accno} at ${new Date()}
        </div>
        `
        //4-history container  newDiv append
        history.append(newHistory);
        clearInput('add-money-amount');
        clearInput('add-money-pin');
        return
    }else{
        alert('Invalid Pin');
        return
    }
})