import { configureStore } from '@reduxjs/toolkit';
import index from "../store/index";

export default configureStore({
  reducer: {
      index: index
  },
})