

//get-deposit-button
document.getElementById('deposit-btn').addEventListener('click', function () {

    // get-deposit-input
    const depositFild = document.getElementById('deposit-fild')
    const depositString = depositFild.value
    const depositAmount = parseFloat(depositString)

    // get-eror-handel ...check jodi number na hoi tahole alert dibe
    depositFild.value = '';
    if (isNaN(depositAmount)) {
        alert('apni vul input dichen please valid input')
        return
    }

    // get-show-deposit-main-area
    const priviasDiposit = document.getElementById('deposit-amount')
    const priviasDipositString = priviasDiposit.innerText
    const priviasDipositAmount = parseFloat(priviasDipositString)

    // get-show-main-bank-amount
    const prasetAmount = document.getElementById('bank-total-amount')
    const prasetAmountString = prasetAmount.innerText
    const bacnkAmount = parseFloat(prasetAmountString)

    //get-eror-handel ...check bank a jei taka ache tar theke beshi ba kom tulte parba na
    if (depositAmount <= 0) {
        alert('apni 0 ba tar theke kom deposit kora jabe na')
        return
    }

    // plus-input + show-deposit-main-area amount and set
    const totalDiposite = priviasDipositAmount + depositAmount
    priviasDiposit.innerText = totalDiposite

    // plus-input + show-main-bank-amount
    const totalBankAmount = bacnkAmount + depositAmount
    prasetAmount.innerText = totalBankAmount


});

//get-withdraw-button
document.getElementById('withdraw-btn').addEventListener('click', function () {

    // get-withdraw-input
    const withdrawFild = document.getElementById('withdraw-fild')
    const withdrawFildString = withdrawFild.value
    const withdrawAmount = parseFloat(withdrawFildString)

    // get-eror-handel ...check jodi number na hoi tahole alert dibe
    withdrawFild.value = '';
    if (isNaN(withdrawAmount)) {
        alert('apni vul input dichen please valid input')
        return
    }

    // get-show-withdraw-main-area
    const priviasWithdraw = document.getElementById('withdraw-amount')
    const priviasWithdrawString = priviasWithdraw.innerText
    const priviasWithdrawAmount = parseFloat(priviasWithdrawString)

    // get-show-main-bank-amount
    const prasetAmount = document.getElementById('bank-total-amount')
    const prasetAmountString = prasetAmount.innerText
    const bacnkAmount = parseFloat(prasetAmountString)

    //get-eror-handel ...check bank a jei taka ache tar theke beshi ba kom tulte parba na
    if (bacnkAmount < withdrawAmount || withdrawAmount <= 0) {
        alert('apni 0 ba tar cheye kom withdraw korte parben na')
        return
    }


    // plus-input + show-deposit-main-area amount and set
    const totalWithdraw = priviasWithdrawAmount + withdrawAmount
    priviasWithdraw.innerText = totalWithdraw

    // plus-input + show-main-bank-amount
    const totalBankAmount = bacnkAmount - withdrawAmount
    prasetAmount.innerText = totalBankAmount

})