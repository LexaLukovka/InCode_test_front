import {createStore, combineReducers, applyMiddleware} from 'redux'
import clientsReducer from './Products/reducers/clients.reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  clientsReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store