export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter methods
  // getter for code
  get code() {
    return this._code;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter methods
  // setter for code
  set code(newCode) {
    this._code = newCode;
  }

  // setter for name
  set name(newName) {
    this._name = newName;
  }

  // public method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
