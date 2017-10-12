import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './products';
import indProduct from './indProduct';
import cart from './cart';
import checkout from './checkout'
import login from './login'

const rootReducer = combineReducers({
    form: formReducer,
    products,
    indProduct,
    cart,
    checkout,
    login
});
export default rootReducer;
