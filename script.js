document.addEventListener('DOMContentLoaded', function () {
    const billAmountInput = document.getElementById('billAmount');
    const discountSelect = document.getElementById('discount');
    const discountAmountInput = document.getElementById('discountAmount');
    const finalPayInput = document.getElementById('finalPay');
    const calculateButton = document.getElementById('calculate');
    const resetButton = document.getElementById('reset');

    calculateButton.addEventListener('click', function () {
        const billAmount = parseFloat(billAmountInput.value);
        const discountRate = parseFloat(discountSelect.value);
        const discountAmount = billAmount * discountRate;
        const finalPay = billAmount - discountAmount;

        discountAmountInput.value = discountAmount.toFixed(2);
        finalPayInput.value = finalPay.toFixed(2);
    });

    resetButton.addEventListener('click', function () {
        billAmountInput.value = '';
        discountSelect.selectedIndex = 0;
        discountAmountInput.value = '';
        finalPayInput.value = '';
    });
});
