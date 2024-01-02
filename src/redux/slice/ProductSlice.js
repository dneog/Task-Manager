import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products : [],
  fetchedProducts : [],
  loading: false, 
  error: null,
  show: false
}    
const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      
    },

    setProducts(state, action) {
      state.products = action.payload
      state.loading= false
    },

    fetchProduct(state, action){
      state.loading = true
    },
    allProducts(state, action){
      state.fetchedProducts= action.payload
      state.loading = false
    },
    updateProduct(state, action){
      state.loading = true
    },
    deleteProduct(state, action){
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setShow: (state, action) => {
      state.show = action.payload;
    },

  }
  
});

export const {addProduct, setProducts, fetchProduct, allProducts, updateProduct, deleteProduct, setError, setShow} = ProductSlice.actions;
export const selectNewProduct = (state)=> state.product.products;
export const selectAllProducts = (state)=> state.product.fetchedProducts;
export const selectLoading = (state)=> state.product.loading;
export const selectMessage = (state)=> state.product.error;
export const selectShow = (state)=> state.product.show;


export default ProductSlice.reducer