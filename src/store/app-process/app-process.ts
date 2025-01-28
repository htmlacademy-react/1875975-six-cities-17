import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES_LIST, NameSpace, SortOption } from '../../const';
import { City, SortName } from '../../types/types';

type AppProcess = {
  city: City;
  sorting: SortName;
}

const initialState: AppProcess = {
  city: CITIES_LIST[0],
  sorting: SortOption.Popular,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortName>) => {
      state.sorting = action.payload;
    }
  },
});

export const {changeCity, changeSort} = appProcess.actions;
