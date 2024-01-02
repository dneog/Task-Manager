import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { watchProductSaga } from "./slice/ProductSaga";
import ModelReducer from "./slice/ModelSlice";
import ProductReducer from "./slice/ProductSlice";
import ToastReducer from "./slice/ToastSlice";
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]


const rootReducers= combineReducers({
  model : ModelReducer,
  product : ProductReducer,
  toast : ToastReducer
})

const store= configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),

})

sagaMiddleware.run(watchProductSaga)

export default store