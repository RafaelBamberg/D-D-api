import Race from './Races';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _raceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._raceInstance += 1;
    return this._raceInstance;
  }
}

export default Orc;