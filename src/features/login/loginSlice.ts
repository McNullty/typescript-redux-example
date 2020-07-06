import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// import {RootState} from "../../app/store";

interface LoginState {
    email: string;
    password: string;
}

const initialState: LoginState = {
    email: "",
    password: "",
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginState>) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    }
});

export const { login } = loginSlice.actions;

// export const selectEmail = (state: RootState) => state.login.email;

export default loginSlice.reducer;