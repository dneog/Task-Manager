import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: '',
  show: false
}

const ToastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    MESSAGE(state, action){
      state.message= action.payload
    },
    SHOW_MESSAGE(state, action){
      state.show = action.payload
    }
  }
});

export const {MESSAGE, SHOW_MESSAGE} = ToastSlice.actions


export default ToastSlice.reducer