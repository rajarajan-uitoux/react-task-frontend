import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  customerDetails: []
};

//get all customerDetails
export const getCustomerDetails = createAsyncThunk(
  "get-customer-datails",
  async (id) => {
    let result = await axios.get(`http://localhost:4000/api/v1/customer-details/${id}`);
    return result.data;
  }
);

export const customerDetailsSlice = createSlice({
  name: 'customerDetails',
  initialState,
  reducers: { 
  },
  extraReducers: (builder) => {
    builder.addCase(getCustomerDetails.fulfilled, (state, action) => {
      state.customerDetails = action.payload;
    });
  },
});

export default customerDetailsSlice.reducer;
