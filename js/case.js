
function updateCaseNumber(isIncrise) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const caseNumber = parseInt(caseNumberFieldString);
    let newCaseNumber;
    if (isIncrise === true) {
        newCaseNumber = caseNumber + 1;
    } else {
        newCaseNumber = caseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateTotalCasePrice(newCaseNumber) {
    const totalCasePrice = newCaseNumber * 59;
    const caseTotalPrice = document.getElementById('case-total-price');
    caseTotalPrice.innerText = totalCasePrice;
}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateTotalCasePrice(newCaseNumber);
    calcluteSubTotal();
    // const totalCasePrice = newCaseNumber * 59;
    // const caseTotalPrice = document.getElementById('case-total-price');
    // caseTotalPrice.innerText = totalCasePrice;

    //
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberFieldString = caseNumberField.value;
    // const caseNumber = parseInt(caseNumberFieldString);
    // const newCaseNumber = caseNumber + 1;
    // caseNumberField.value = newCaseNumber;
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);

    updateTotalCasePrice(newCaseNumber);
    calcluteSubTotal();
    // const totalCasePrice = newCaseNumber * 59;
    // const caseTotalPrice = document.getElementById('case-total-price');
    // caseTotalPrice.innerText = totalCasePrice;


    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberFieldString = caseNumberField.value;
    // const caseNumber = parseInt(caseNumberFieldString);
    // const newCaseNumber = caseNumber - 1;
    // caseNumberField.value = newCaseNumber;
})