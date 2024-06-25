import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
// import authReducer from './reducers/authReducer';
import authSlice from './reducers/authReducer.js';
import PDFSlice from './reducers/atsReducer.js'

const store = configureStore({
  reducer: {
    auth:authSlice,
    ats: PDFSlice,
  },
});

export default store;
