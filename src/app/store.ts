import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/login/loginSlice';
import {loadState, saveState} from "./localStorage";
import throttle from 'lodash.throttle';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
  preloadedState: loadState()
});

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

// TypeScript type is for that root state object
// All we have to do is use the built-in TS ReturnType utility type, and feed in "the type of the rootReducer function"
// as its generic argument.
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
