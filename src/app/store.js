import { configureStore } from '@reduxjs/toolkit';
import customerDetailsReducer from '../features/customer/customerDetailsSlice';

export const store = configureStore({
  reducer: {
    customerDetails: customerDetailsReducer,
  },
});
