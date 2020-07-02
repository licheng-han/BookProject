import {combineReducers} from "redux-immutable";
import {reducer as headerReducer} from '../header/store';
import {reducer as TopIcReducer} from '../page/home/store';

// export default (state=defaultState,action) => {
//     if(action.type === "type_search"){
//         return {
//             focused: action.value
//         }
//     }
//     return state;
// }
const reducer = combineReducers({
    header: headerReducer,
    home: TopIcReducer
});
export default reducer;