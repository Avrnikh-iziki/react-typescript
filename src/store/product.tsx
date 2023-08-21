import { createSlice } from '@reduxjs/toolkit'
import { Product } from "../utiles/types"

const initialState: Product[] = [
    {
        id: "",
        name: "",
        price: 0,
        description: "",
        image: "",
        Q: 1,
    }
]

const product = createSlice({
    name: "product",
    initialState,
    reducers: {

        add: (state: Product[], action: { payload: Product, type: string }): void => {
            const isExist: Product | undefined = state.find((el) => el.id === action.payload.id)
            if (!isExist)
                state.push({ ...action.payload, Q: 1 })
        },

        addQ: (state: Product[], action: { payload: { id: string }, type: string }): void => {
            const { id } = action.payload
            state = state.map((el) => {
                if (el.id !== id)
                    return el
                else {
                    el.Q += 1;
                    return el
                }
            })
        },
        dellQ: (state: Product[], action: { payload: { id: string }, type: string }): void => {
            const { id } = action.payload
            const element: Product | undefined = state.find((el) => el.id === id)
            if (element) {
                if (element.Q > 1) {
                    state = state.map(el => {
                        if (el.id !== id)
                            return el
                        else {
                            el.Q -= 1;
                            return el
                        }
                    })
                } else {
                    const index = state.findIndex(el => el.id === id)
                    state = state.splice(index, 1)
                }
            }

        }
    }
})

export const {
    add,
    addQ,
    dellQ
} = product.actions

const ProductReducers = product.reducer

export default ProductReducers