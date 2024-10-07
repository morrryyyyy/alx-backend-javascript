export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // getter method for sqft
  get sqft() {
    return this._sqft;
  }

  //   Function evacuationWarningMessage():
  //   Throw Error: "Class extending Building must override evacuationWarningMessage"
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
