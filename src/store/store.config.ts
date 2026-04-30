import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { IStore } from './store.d';
import rootReducer from './store.reducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export const useStore = <T extends keyof IStore>(key: T): IStore[T] => {
    return useSelector((state: IStore) => state[key]);
};

export default store;