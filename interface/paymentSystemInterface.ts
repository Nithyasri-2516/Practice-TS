interface PaymentMethod {
    processPayment(amount: number): boolean;
    getTransactionId(): string;
}
class CreditCardPayment implements PaymentMethod {
    constructor(private cardNumber: string) {}
    processPayment(amount: number): boolean {     
        console.log(`Processed credit card payment of $${amount}`);
        return true; 
    }
    getTransactionId(): string {
        return "CC12345"; 
    }
}
class PayPalPayment implements PaymentMethod {
    constructor(private email: string) {}

    processPayment(amount: number): boolean {
        console.log(`Processed PayPal payment of $${amount}`);
        return true;
    }

    getTransactionId(): string {
        return "PP67890"; 
    }
}
function completePayment(paymentMethod: PaymentMethod, amount: number) {
    if (paymentMethod.processPayment(amount)) {
        console.log(`Payment successful! Transaction ID: ${paymentMethod.getTransactionId()}`);
    } else {
        console.log("Payment failed.");
    }
}

const creditCard = new CreditCardPayment("1234-5678-9012-3456");
const paypal = new PayPalPayment("user@example.com");
completePayment(creditCard, 100); 
completePayment(paypal, 50);     
