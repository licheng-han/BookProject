import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

const changHomeData = (state,action) =>{
     return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
};

export default (state = defaultState, action)=>{
    if(action.type === constants.CHANGE_HOME_DATA){
        return changHomeData(state,action)
    }else if(action.type === constants.TOGGLE_SCROLL_TOP){
        return state.set('showScroll',action.show)
    }else if(action.type === constants.ADD_ARTICLE_LIST){
        return state.set('articleList',state.get('articleList').concat(action.list));
    }
    return state
}
window.state = defaultState;