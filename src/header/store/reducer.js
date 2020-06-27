import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});
export default (state = defaultState, action) => {
    if (action.type === constants.TYPE_SEARCH) {
        return state.set('focused', true);
    } else if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    } else if (action.type === constants.GETHEADERLIST) {
        return state.merge({
            list: action.data,
            totalPage: action.totalPage
        });
    } else if (action.type === constants.MOUSE_ENTER) {
        return state.set("mouseIn", true);
    } else if (action.type === constants.MOUSE_LEAVE) {
        return state.set("mouseIn", false);
    }else if(action.type === constants.CHANGE_PAGE){
        return state.set("page", action.page);
    }
    return state
}