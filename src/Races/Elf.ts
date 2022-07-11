import Race from './Races';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _raceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._raceInstance += 1;
    return this._raceInstance;
  }
}

export default Elf;