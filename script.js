"use strict";
var cardPayment;
(function (cardPayment) {
    cardPayment["done"] = "done";
    cardPayment["loading"] = "loading";
    cardPayment["returned"] = "returned";
})(cardPayment || (cardPayment = {}));
class Card {
    constructor(cardName, cardPassword, cardNumber) {
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.cardPassword = cardPassword;
        this.paymentStatus = cardPayment.done;
    }
    done() {
        if (this.cardNumber.length === 6) {
            if (this.paymentStatus === 'done') {
                console.log('Your request was successful 😋');
            }
            else if (this.paymentStatus === 'loading') {
                console.log('Loading👌...');
            }
            else if (this.paymentStatus === 'returned') {
                {
                    throw new Error("Refund due to error 😭");
                }
            }
        }
        else {
            throw new Error('Your card number was entered incorrectly 😵');
        }
    }
}
let cardPay = new Card('Visa', 8600120, '987987');
console.log(cardPay);
cardPay.done();
