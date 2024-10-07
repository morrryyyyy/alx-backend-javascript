export default class Building {
  constructor(sqft) {
    /* If the current class is Building:
            Throw Error: "Building is an abstract class and cannot be instantiated directly"
        */
    if (new.target === Building) {
      throw new Error(
        'Building is an abstract class and cannot be instantiated directly',
      );
    }
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
