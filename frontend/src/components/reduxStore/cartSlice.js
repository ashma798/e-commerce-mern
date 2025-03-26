import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item._id === newItem._id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalQuantity++;
    },

    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
      incrementQuantity: (state, action) => {
        const productId = action.payload;
      const product = state.items.find((item) => item._id === productId);
        if (product) 
          product.quantity += 1;
        state.totalQuantity++;
},
  
      decrementQuantity: (state, action) => {
        state.items = state.items.find((item) => item._id === action.payload);
        if (state.items && state.items.quantity > 1) state.items.quantity -= 1;
      
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
