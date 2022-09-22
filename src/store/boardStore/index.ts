import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import * as types from "./types";
import * as selectors from "./selectors";
import * as reducers from "./reducers";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "userStorage",
  storage,
};

const rootReducer = combineReducers({
  board: reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const persistProvider = () => {
  const store = configureStore({ reducer: persistedReducer });
  const persister = persistStore(store);
  return { store, persister };
};
const store = persistProvider().store;
export type BoardType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export { types, selectors, reducers };

export default store;
