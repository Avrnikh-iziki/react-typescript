import { createSlice } from '@reduxjs/toolkit'
import { User } from "../utiles/types"

const initialState: User = {
    user: {
        id: "",
        username: "",
        email: "",
        isLogin: false,
    }
}

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state: User, action: { payload: User, type: string }): void => {
            const user = action.payload
            state.user = user.user
        },
        logout: (state: User, action: { payload: null, type: string }): void => {
            state.user = {
                id: "",
                username: "",
                email: "",
                isLogin: false,
            }
        }
    }
})

export const {
    login,
    logout
} = user.actions

const Reducers = user.reducer

export default Reducers