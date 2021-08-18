function updateNumber(product,price,isIncress) {
    const productInput = document.getElementById( product+"-number");
    let productNumber = parseInt(productInput.value);
    if (isIncress) {
        // caseNumber = caseNumber + 1;
        productNumber++;
    } else if (productNumber>0) {
        // caseNumber = caseNumber - 1;
        productNumber--;
    }
    // update product price
    productInput.value = productNumber
    const productTotal = document.getElementById(product+"-total");
   
    productTotal.innerText = productNumber * price;

// call calculateTotal
    calculateTotal()
}

function getTotal(product) {
    const productInput = document.getElementById(product+"-number");
    const productNumber = parseInt(productInput.value)
    return productNumber;
}
// calculate Total product price
function calculateTotal() {
    
    const phoneTotal = getTotal("phone") * 1219;
    const caseTotal = getTotal("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const tex = subTotal / 10;
    const totalPrice = subTotal + tex;

    document.getElementById("sub-total").innerText = subTotal
    document.getElementById("tex-amount").innerText = tex
    document.getElementById("total-price").innerText = totalPrice

}
    
    
    
    // phone incress decress event
document.getElementById("phone-plus").addEventListener("click", function () {
    updateNumber("phone", 1219, true)
});
document.getElementById("phone-minus").addEventListener("click", function () {
    updateNumber("phone", 1219, false)
});
// case incress decress event
document.getElementById("case-plus").addEventListener("click", function () {
   updateNumber("case",59,true)
});

document.getElementById("case-minus").addEventListener("click", function () {
    updateNumber("case", 59, false)
});