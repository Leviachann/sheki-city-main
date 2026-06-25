import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStore, IUser } from './store.d';
import { az } from 'assets/lang/az';
import { en } from 'assets/lang/en';
import { ru } from 'assets/lang/ru';

const langMap: Record<'az' | 'en' | 'ru', Record<string, string>> = {
    az,
    en,
    ru,
};

const initialState: IStore = {
    loader: false,
    sideMenu: false,
    authModal: false,
    languages: [
        { id: 1, label: 'AZ', value: 'az' },
        { id: 2, label: 'EN', value: 'en' },
        { id: 3, label: 'RU', value: 'ru' },
    ],
    locale: { ...az, _lang: 'az' },
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
        setLocale: (state, action: PayloadAction<'az' | 'en' | 'ru'>) => {
            state.locale = { ...langMap[action.payload], _lang: action.payload };
        },
        setUser: (state, action: PayloadAction<IUser | null>) => {
            state.user = action.payload;
        },
        setAuthModal: (state, action: PayloadAction<boolean>) => {
            state.authModal = action.payload;
        },
    },
});

export const { setLoader, toggleSideMenu, setLocale, setUser, setAuthModal } = rootSlice.actions;
export default rootSlice.reducer;