
import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
    PDF: null,
    DESC: null,
  };

const atsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    submitPDF(state, action) {
      state.PDF = action.payload.res;
      state.DESC = action.payload.jobDescription;
    },
  },
});

export const { submitPDF } = atsSlice.actions;

export default atsSlice.reducer;

  