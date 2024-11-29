import Building from "./5-building";

export default class skyHighBuilding extends Building {
  constructor(sqft, floors) {
    this._floors = floors;
    super(sqft);
  }
}
