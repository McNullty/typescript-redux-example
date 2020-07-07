import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "../../app/store";
// import {RootState} from "../../app/store";

interface AuthenticationState {
    isAuthenticated: boolean;
    username: string;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthenticationState = {
    isAuthenticated: false,
    username: "",
    isLoading: false,
    error: null,
}

export const loginSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        getLoginStart: (state) => {
            state.isLoading = true;
            state.username = "";
            state.isAuthenticated = false;
            state.error = null;
        },
        getLoginSuccess: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
        },
        getLoginFailure: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { getLoginStart, getLoginSuccess, getLoginFailure } = loginSlice.actions;

export const login = (email: string, password: string): AppThunk => async dispatch => {
    try {
        dispatch(getLoginStart());


        if(password === "bad") {
            throw Error("Error in login");
        }

        setTimeout(() => { dispatch(getLoginSuccess(email)); }, 1000);
    } catch (err) {
        dispatch(getLoginFailure(err.toString()));
    }
}

export default loginSlice.reducer;