import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { addProduct, setProducts, fetchProduct, allProducts, updateProduct, deleteProduct, setError, setShow } from './ProductSlice';

const api = 'https://task-manager-1pyw.onrender.com/api/products'


function* createProductSaga(action){
    try {
       const response = yield call(axios.post, api, action.payload)
       const newData = yield response.data;
    yield put(setProducts(newData));
      
    } catch (error) {
      yield put(setError(error.message));
      yield put(setShow(true));

    }
}
function* getProductSaga(action){
    try {
       const response = yield call(axios.get, api)
       const newData = yield response.data;
    yield put(allProducts(newData));
      
    } catch (error) {
      yield put(setError(error.message));
      yield put(setShow(true));
    }
}
function* updateProductSaga(action){
    try {
       const response = yield call(axios.patch, `${api}/${action.payload.id}`, action.payload.formData)
       const newData = yield response.data;
       yield put(setProducts(newData));
   
    //    yield put(allProducts(newData));
    } catch (error) {
      yield put(setError(error.message));
      yield put(setShow(true));
    }
}

function* deleteProductSaga(action){
  
    try {
       const response = yield call(axios.delete, `${api}/`+ action.payload)
       const newData = yield response.data;
       yield put(setProducts(newData)); 
      
      
    } catch (error) {
      yield put(setError(error.message));
      yield put(setShow(true));
    }
}

export function* watchProductSaga(){
  
    yield takeEvery('product/addProduct', createProductSaga );
    yield takeEvery('product/fetchProduct', getProductSaga );
    yield takeEvery('product/updateProduct', updateProductSaga );
    yield takeEvery('product/deleteProduct', deleteProductSaga );
}