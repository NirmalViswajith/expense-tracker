import {configureStore, createSlice} from '@reduxjs/toolkit'

const show = {
  isShow: false
}

const cartSlicer = createSlice({
  name: 'Cart',
  initialState: show,
  reducers:{
    showCart(state) {
      state.isShow = true;
    },
    dontShow(state) {
      state.isShow = false;
    }
  }
})
export const cartAction = cartSlicer.actions;
const store = configureStore({
  reducer: {
    cartReducer: cartSlicer.reducer
  }
});




export default store;