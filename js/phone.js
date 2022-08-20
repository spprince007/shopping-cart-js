function updatePhoneNumber(isIncrise) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const phoneNumber = parseInt(phoneNumberFieldString);
    let newPhoneNumber;
    if (isIncrise === true) {
        newPhoneNumber = phoneNumber + 1;
    } else {
        newPhoneNumber = phoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updateTotalPhonePrice(newPhoneNumber) {
    const totalPhonePrice = newPhoneNumber * 1219;
    const phoneTotalPrice = document.getElementById('total-phone-price');
    phoneTotalPrice.innerText = totalPhonePrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updateTotalPhonePrice(newPhoneNumber);
    calcluteSubTotal();

})

document.getElementById('phone-minuse').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updateTotalPhonePrice(newPhoneNumber);
    calcluteSubTotal();
})