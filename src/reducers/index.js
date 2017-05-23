import {combineReducers} from 'redux'
import controls from './controls'

 const rootReducer = combineReducers({
    controls: controls
})
export default rootReducer