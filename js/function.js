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