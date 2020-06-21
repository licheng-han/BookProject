import React, {Component} from "react";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from '../css/header.js'
import { CSSTransition } from 'react-transition-group';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused:false
        };
        this.onblur = this.onblur.bind(this);
        this.onfocus = this.onfocus.bind(this);
    }
    onblur(){
        this.setState({
            focused:false
        })
    }
    onfocus(){
        this.setState((preloadState)=>{
            return {
                focused:true
            }
        })
    }
    render() {
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
                    <CSSTransition
                        in={this.state.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch  onBlur={this.onblur} onFocus={this.onfocus}/>
                    </CSSTransition>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button>写文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;