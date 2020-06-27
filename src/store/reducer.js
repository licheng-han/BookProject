import {combineReducers} from "redux-immutable";
import { reducer as headerReducer } from '../header/store';

// export default (state=defaultState,action) => {
//     if(action.type === "type_search"){
//         return {
//             focused: action.value
//         }
//     }
//     return state;
// }
 const reducer = combineReducers({
   header:headerReducer
});
export default reducer;