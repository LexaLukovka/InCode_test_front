import {createStore, combineReducers} from 'redux'
import clientsReducer from './reducers/clients.reducer'
import {composeWithDevTools} from 'redux-devtools-extension'


const reducers = combineReducers({
  clientsReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store