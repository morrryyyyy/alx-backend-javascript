import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter for amount
  get amount() {
    return this._amount;
  }

  // getter for currency
  get currency() {
    return this._currency;
  }

  // setter for amount
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // setter for currency
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // public method
  displayFullPrice() {
    return `${this.amount} ${this._currency.name} (${this._currency.code})`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
