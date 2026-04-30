import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStore, IUser } from './store.d';
import {az} from 'assets/lang/az';

const initialState: IStore = {
    loader: false,
    sideMenu: false,
    languages: [
        { id: 1, label: 'AZ', value: 'az' },
        { id: 2, label: 'EN', value: 'en' },
        { id: 3, label: 'RU', value: 'ru' },
    ],
    locale: az,
    user: null,
};

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setLoader: (state, action: PayloadAction<boolean>) => {
            state.loader = action.payload;
        },
        toggleSideMenu: (state) => {
            state.sideMenu = !state.sideMenu;
        },
        setLocale: (state, action: PayloadAction<Record<string, string>>) => {
            state.locale = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser | null>) => {
            state.user = action.payload;
        },
    },
});

export const { setLoader, toggleSideMenu, setLocale, setUser } = rootSlice.actions;
export default rootSlice.reducer;