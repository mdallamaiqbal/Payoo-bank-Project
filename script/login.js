//step-1: add button;
document.getElementById('login-btn').addEventListener('click',function(){
   //step-2: get input Number;
   const inputNumber=document.getElementById('input-number');
   const number=inputNumber.value;
   //step-3: get input Pin;
   const inputPin=document.getElementById('input-pin');
   const pin=inputPin.value;
   if(number==='01234567890' && pin==='1234'){
    //step-4: match 2-3;
    alert('LogIN successful');
    window.location.assign('./home.html');
    inputNumber.value='';
    inputPin.value='';
   }else{
    //step-5:return;
      alert('LogIN failed');
      inputNumber.value='';
      inputPin.value='';
      return
   }
})





