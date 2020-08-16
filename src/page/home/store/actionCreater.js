import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/getHomeList').then((res) => {
            const result = res.data.list;
            dispatch(changHomeData(result));
        });
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/getHomeList').then((res) => {
            const result = res.data.list;
            dispatch(addHomeList(result.articleList,page));
            console.log(result)
        });
    }
};

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
});