import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {DetailWrapper, Header, Content} from './style';
import {actionCreater} from './store';

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content
                    dangerouslySetInnerHTML={{__html: this.props.content}}
                >

                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDate(this.props.location.state);
    }
}

const mapStateToProps = (state) => ({
    title:state.getIn(["detail",'title']),
    content:state.getIn(["detail",'content'])
});
const mapDispatchToProps =(dispatch) => ({
    getDate(id){
        dispatch(actionCreater.getDetail(id))
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Detail));