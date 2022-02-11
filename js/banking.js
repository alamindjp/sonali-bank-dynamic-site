document.getElementById('deposit-btn').addEventListener('click', function () {

    //    get deposit amount
    const depositInput = document.getElementById('new-diposit-amount');
    const newDepositAmount = parseFloat(depositInput.value);

    // get total diposit amount 
    const dipositedAmount = document.getElementById('diposited-amount');
    const depositAmount = parseFloat(dipositedAmount.innerText);

    // total deposited calculation
    const TotalDeposit = depositAmount + newDepositAmount;
    dipositedAmount.innerText = TotalDeposit;

    // get account balance
    const netBalance = document.getElementById('total-balance');
    const totalBalance = parseFloat(netBalance.innerText);

    // update account balance
    const updateBalance = totalBalance + newDepositAmount;
    netBalance.innerText = updateBalance;

    // // clear deposit input
    depositInput.value = '';
})

document.getElementById('withdrow-btn').addEventListener('click', function () {

    //    get deposit amount
    const withdrowInput = document.getElementById('new-withdrow-amount');
    const newWithdrowAmount = parseFloat(withdrowInput.value);

    // get total diposit amount 
    const withdrowedAmount = document.getElementById('withdrowed-amount');
    const withdrowAmount = parseFloat(withdrowedAmount.innerText);

    // total deposited calculation
    const totalWithdrow = newWithdrowAmount + withdrowAmount;
    withdrowedAmount.innerText = totalWithdrow;

    // get account balance
    const netBalance = document.getElementById('total-balance');
    const totalBalance = parseFloat(netBalance.innerText);


    // update account balance
    const updateBalance = totalBalance - newWithdrowAmount;
    netBalance.innerText = updateBalance;

    // clear deposit input
    withdrowInput.value = '';
})
