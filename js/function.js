// function updateCaseNumber(isIncrise) {
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberFieldString = caseNumberField.value;
//     const caseNumber = parseInt(caseNumberFieldString);
//     let newCaseNumber;
//     if (isIncrise === true) {
//         newCaseNumber = caseNumber + 1;
//     } else {
//         newCaseNumber = caseNumber - 1;
//     }
//     caseNumberField.value = newCaseNumber;
//     return newCaseNumber;
// }

// function updateTotalCasePrice(newCaseNumber) {
//     const totalCasePrice = newCaseNumber * 59;
//     const caseTotalPrice = document.getElementById('case-total-price');
//     caseTotalPrice.innerText = totalCasePrice;
// }

function getTextElementById(currentPrice) {
    const phoneTotalElement = document.getElementById(currentPrice);
    const phoneTotalElementString = phoneTotalElement.innerText;
    const phoneTotal = parseFloat(phoneTotalElementString);
    return phoneTotal;
}

function calcluteSubTotal() {
    const currentTotalPhonePrice = getTextElementById('total-phone-price');
    const currentTotalCasePrice = getTextElementById('case-total-price');
    const subTotalPrice = currentTotalPhonePrice + currentTotalCasePrice;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = subTotalPrice;

    const tax = subTotalPrice * 0.1;
    const totalTax = document.getElementById('tax');
    totalTax.innerText = tax.toFixed(2);

    const totalInvoicePrice = subTotalPrice + tax;
    const totalPriceElement = document.getElementById('final-total-price');
    totalPriceElement.innerText = totalInvoicePrice.toFixed(2);
}

