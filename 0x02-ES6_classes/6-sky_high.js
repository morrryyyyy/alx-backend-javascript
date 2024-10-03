// Import the Building class
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  // Constructor to initialize sqft and floors
  constructor(sqft, floors) {
    super(sqft); // Pass sqft to the parent class (Building)
    this.floors = floors; // Use setter for validation
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Setter for floors with validation
  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = value;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
