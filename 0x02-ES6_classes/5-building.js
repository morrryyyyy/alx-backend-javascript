export default class Building {
  // Constructor to initialize the attributes
  constructor(sqft) {
    this.sqft = sqft; // Use setter to validate
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft with validation
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = value;
  }

  // Method that must be overridden in any subclass
  static evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
