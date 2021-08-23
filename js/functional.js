function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const valueInNumber = parseFloat(valueInText);
    inputField.value = '';
    return valueInNumber;

}

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInnerText = fieldTag.innerText;
    const value = parseFloat(fieldValueInnerText);
    return value;
}


function updateTotal(fieldId, amount) {
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal
}


function updateBalance(amount, isAdding) {
    const previousBalance = getInnerTextValue('balance-total')
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    } else {
        newBalance = previousBalance - amount;

    }
    document.getElementById('balance-total').innerText = newBalance

}


document.getElementById('deposite-button').addEventListener('click', function() {
    const amount = getInputValue('deposite-input')
    if (amount > 0) {
        updateTotal('deposite-total', amount);
        updateBalance(amount, true);
    }
})

// handle withdraw

document.getElementById('withdraw-button').addEventListener('click', function() {
    const amount = getInputValue('withdraw-input');

    const balance = getInnerTextValue('balance-total')

    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount)
        updateBalance(amount, false)
    }
})