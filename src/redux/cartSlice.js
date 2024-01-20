import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState: {
        products:[],
        productCount:0,
        totalPrice:0,
    },
    reducers:{
        addProduct: (state, action) => {
            //action.payload here is the actual product object (provided by the API)
            if(state.products.map(prodctObject => prodctObject.product.id).includes(action.payload.id)){
                state.products.filter((productObject) => productObject.product.id == action.payload.id)[0].amount += 1
            }else{
                state.products = [...state.products, {product: action.payload, amount: 1}]
            }
            state.totalPrice += action.payload.price
            state.productCount += 1
        },
        removeProduct: (state, action) => {
            //action.payload here is the actual product object (provided by the API)
            let indexToRemove = state.products.findIndex((productObject)=> productObject.product.id == action.payload.id)
            if(indexToRemove > -1){
                if(state.products[indexToRemove].amount > 1){
                    state.products[indexToRemove].amount -= 1
                }else{
                    state.products.splice(indexToRemove,1)
                }
                state.productCount -= 1
                state.totalPrice -= action.payload.price
            }
        }
    }
})

export const {addProduct, removeProduct} = cartSlice.actions

export default cartSlice.reducer