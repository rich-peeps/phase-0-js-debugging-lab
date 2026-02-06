 function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;

    for (let i = 1; i <= quantity; i++) {
        totalPrice += pricePerItem;
    }
    
    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}

console.log(calculateDiscountedPrice(5, 20)); // Should output 100 

module.exports = calculateDiscountedPrice;