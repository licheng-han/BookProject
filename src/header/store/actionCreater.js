import * as constants from './constants';
import axios from 'axios';

export const TYPE_SEARCH = () => ({
    type: constants.TYPE_SEARCH
});
export const SEARCH_BLUR = () => ({
    type: constants.SEARCH_BLUR
});
export const SEARCH_LIST = (data) => ({
    type: constants.GETHEADERLIST,
    data,
    totalPage: Math.ceil(data.length / 10)
});
export const MOUSE_ENTER = () => ({
    type: constants.MOUSE_ENTER
});
export const MOUSE_LEAVE = () => ({
    type: constants.MOUSE_LEAVE
});
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});

export const SEARCH_HEADERLIST = () => {
    return (dispatch) => {
        axios.get('/getHeaderList').then(data => {
            dispatch(SEARCH_LIST(data.data.list));
        }).catch(err => console.log(err))
    }
};