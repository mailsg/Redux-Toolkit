import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartitems';

const initialState = {
  cartItems,
  amount: 0,
  total: 0,
  isLoaded: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});

export default cartSlice.reducer;
