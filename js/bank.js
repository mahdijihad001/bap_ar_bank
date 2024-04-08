// document.getElementById('diposit_btn').addEventListener('click' , function(){


//     const diposit_fild = document.getElementById('diposit_fild');
//     const newDipositAmmountString= diposit_fild.value;
//     const newDipositAmmount = parseFloat(newDipositAmmountString);

//     const dipositText = document.getElementById('diposit_text');
//     const previousDipositTotalString = dipositText.innerText;
//     const previousDipositTotal = parseFloat(previousDipositTotalString);
//    const curentDipositTotal = previousDipositTotal + newDipositAmmount;

//    dipositText.innerText = curentDipositTotal;

//    const balance_amount = document.getElementById('balance_amount');
//    const balanceTotalAmountString = balance_amount.innerText;
//    const balanctTotalAmount = parseFloat(balanceTotalAmountString);

//     const curentBalanceAmmount = balanctTotalAmount + newDipositAmmount;

//     balance_amount.innerText = curentBalanceAmmount;

//     diposit_fild.value = ' ';



// })


document.getElementById('diposit_btn').addEventListener('click' , function(){
    const getDipositFild = document.getElementById('diposit_fild');
    const getDipositValueString = getDipositFild.value;
    const getDipositValue = parseFloat(getDipositValueString);



    const getDipositText = document.getElementById('diposit_text');
    const getDipositTextString = getDipositText.innerText;
    const getPreviousDipositTextValue = parseFloat(getDipositTextString);

    const totalDipositValue = getPreviousDipositTextValue + getDipositValue;


    getDipositText.innerText = totalDipositValue;


    const getTotalBalanceText = document.getElementById('balance_amount');
    const getTotalBalanceTextString = getTotalBalanceText.innerText;
    const getPreviousTotalBalance = parseFloat(getTotalBalanceTextString);

    const getNewTotalBalance = getPreviousTotalBalance + getDipositValue;

    getTotalBalanceText.innerText = getNewTotalBalance;





    getDipositFild.value = ' ';

})


document.getElementById('withdrow_btn').addEventListener('click' , function(){
    const withdrowFild = document.getElementById('Withdraw_fild');
    const withdrowFildValueString = withdrowFild.value;
    const withdrowFildValue = parseFloat(withdrowFildValueString);

    const withdrowAmount = document.getElementById('withdrow_ammount');
    const withdrowAmountValueSring = withdrowAmount.innerText;
    const previousWithdrowAmountValue = parseFloat(withdrowAmountValueSring);
  

   

    const previousBalanceTotal = document.getElementById('balance_amount');
    const previousBalanceTotalString = previousBalanceTotal.innerText;
    const previousBalanceTotalValue = parseFloat(previousBalanceTotalString);

    withdrowFild.value = ' ';


    if(withdrowFildValue > previousBalanceTotalValue){
        alert('সালা গরিব তোর এতো টাকা নাই😒 ');
        return;
    }

    const totalWithdrowAmount = previousWithdrowAmountValue + withdrowFildValue;

    withdrowAmount.innerText = totalWithdrowAmount;

    const newBalanceTotal = previousBalanceTotalValue - withdrowFildValue;
    previousBalanceTotal.innerText = newBalanceTotal;


    
})