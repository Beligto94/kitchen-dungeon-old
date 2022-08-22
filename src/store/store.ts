import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { questAPI } from '../services/QuestService';
import { userAPI } from '../services/UserService';
import userReducer from './reducers/UserSlice'

const rootReducer = combineReducers({
    userReducer,
    [questAPI.reducerPath]: questAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(questAPI.middleware).concat(userAPI.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
