import { createSlice} from "@reduxjs/toolkit";

//define types
interface CartItem{
    total: 0;
    isEmpty: boolean;
}

interface InitialState{
    items: CartItem[];
    isEmpty: boolean;
}

const initialState: InitialState = {
    items: [],
    isEmpty: false
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {

    }
})

export const {} = cartSlice.actions
export default cartSlice.reducer;