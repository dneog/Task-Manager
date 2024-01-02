import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false
}

const ModelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    IS_OPEN(state, action){
        state.isOpen = action.payload
    }
  }
});

export const {IS_OPEN} = ModelSlice.actions

export const selectIsOpen = (state) => state.model.isOpen;

export default ModelSlice.reducer