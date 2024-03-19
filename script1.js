document.addEventListener('DOMContentLoaded', function() {
    const billInput = document.getElementById("billInput");
    const discOpt = document.getElementById("discOpt");
    const totalDisc = document.getElementById("totalDisc");
    const finalPay = document.getElementById("finalPay");
    const calc = document.getElementById("calc");
    const reset = document.getElementById("reset");

    calculateDisc.addEventListener('click', function(){
        const billInput = parseFloat(billInputTotal.value);
        const DiscTotal = parseFloat(discOpt.value);
        const totalDisc = billInput * DiscTotal;
        const finalPay = billInput - totalDisc;

        totalDisc.value = totalDisc.toFixed(2);
        finalPay.value = finalPay.toFixed(2);
    });

    resetButton.addEventListener('click', function () {
        billInput.value = '';
        discOpt.selectedIndex = 0;
        totalDisc.value = '';
        finalPay.value = '';
    });

});