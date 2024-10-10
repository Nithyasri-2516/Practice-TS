var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment(cardNumber) {
        this.cardNumber = cardNumber;
    }
    CreditCardPayment.prototype.processPayment = function (amount) {
        console.log("Processed credit card payment of $".concat(amount));
        return true;
    };
    CreditCardPayment.prototype.getTransactionId = function () {
        return "CC12345";
    };
    return CreditCardPayment;
}());
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment(email) {
        this.email = email;
    }
    PayPalPayment.prototype.processPayment = function (amount) {
        console.log("Processed PayPal payment of $".concat(amount));
        return true;
    };
    PayPalPayment.prototype.getTransactionId = function () {
        return "PP67890";
    };
    return PayPalPayment;
}());
function completePayment(paymentMethod, amount) {
    if (paymentMethod.processPayment(amount)) {
        console.log("Payment successful! Transaction ID: ".concat(paymentMethod.getTransactionId()));
    }
    else {
        console.log("Payment failed.");
    }
}
var creditCard = new CreditCardPayment("1234-5678-9012-3456");
var paypal = new PayPalPayment("user@example.com");
completePayment(creditCard, 100);
completePayment(paypal, 50);
