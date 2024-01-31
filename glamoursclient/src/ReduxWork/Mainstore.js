import { combineReducers, } from "@reduxjs/toolkit"
import userReducer from './UserSlice'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE }
    from "redux-persist"
import persistReducer from "redux-persist/es/persistReducer"
import storage from "redux-persist/lib/storage"
import { configureStore } from "@reduxjs/toolkit"

const persistConfig = {
    key: 'user',
    version: 1,
    storage,
}
const rootReducer = combineReducers({
    user: userReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const MainStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],

            }
        })
})