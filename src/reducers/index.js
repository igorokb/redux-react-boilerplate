import { combineReducers } from 'redux'
import helloWorldReduser from './hello-world'

const rootReducer = combineReducers({
    helloWorld : helloWorldReduser
    //...
});

export default rootReducer
