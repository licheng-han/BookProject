import React, {Component} from "react";
import {connect} from 'react-redux'
import * as actionCreater from './store/actionCreater';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoItem,
    SearchInfoSwitch,
    SearchInfoList,
    SearchWrapper,
    Addition,
    Button
} from '../css/header.js'
import {CSSTransition} from 'react-transition-group';


class Header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    getListArea() {
        const {list, focused, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        let pageList = [];
        if (list.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(<SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>);
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                            <i ref={(icon) => {
                                this.spinIcon = icon
                            }} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render() {
        const {focused, onBlur, onFocus, list} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch onBlur={onBlur} onFocus={() => {
                                onFocus(list)
                            }}/>
                        </CSSTransition>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button>写文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFocus(list) {
            list.size === 0 && dispatch(actionCreater.SEARCH_HEADERLIST());
            dispatch(actionCreater.TYPE_SEARCH())
        },
        onBlur() {
            dispatch(actionCreater.SEARCH_BLUR())
        },
        handleMouseEnter() {
            dispatch(actionCreater.MOUSE_ENTER())
        },
        handleMouseLeave() {
            dispatch(actionCreater.MOUSE_LEAVE())
        },
        handleChangePage(page, totalPage, spinIcon) {
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;
            if (page < totalPage) {
                dispatch(actionCreater.changePage(page + 1))
            } else {
                dispatch(actionCreater.changePage(1))
            }
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);