import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getActiveCity = (state: State) => state[NameSpace.App].city;
export const getCurrentSorting = (state: State) => state[NameSpace.App].sorting;
