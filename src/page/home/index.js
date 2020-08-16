import React, {PureComponent} from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
} from './style'
import Writer from './component/Writer';
import Recommend from './component/Recommend';
import Topic from './component/Topic';
import List from './component/List';
import {connect} from 'react-redux';
import {actionCreater}from './store'
class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt=''
                         src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    this.props.showScroll?<BackTop onClick={this.scrollTop}/>:""
                }
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEventScroll();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bindEventScroll() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }

    scrollTop(){
        window.scrollTo(0,0)
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});
const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreater.getHomeInfo());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreater.toggleTopShow(true))
        }else {
            dispatch(actionCreater.toggleTopShow(false))
        }
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);