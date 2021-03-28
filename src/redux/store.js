import {createStore,applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {homeVideosReducer} from './reducers/video_reducer'
import {authReducer} from './reducers/auth_reducer'


const  rootReducer = combineReducers({
      auth:authReducer,
      homeReducer:homeVideosReducer

})
const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))
export default store;