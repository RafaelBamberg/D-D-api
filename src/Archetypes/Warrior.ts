import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstance = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._archetypeInstance += 1;
    return this._archetypeInstance;
  }
}