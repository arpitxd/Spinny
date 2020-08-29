import { createStore , applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import AnimmeReducer from 'basePath/state/reducers/animme-reducer';
const allReducers = combineReducers({
	animme: AnimmeReducer
});

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
