import React, {Component} from 'react';
import {ListItem, ListInfo, LoadMore} from '../../../css/home';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actionCreater} from '../store'

class List extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const {list,articlePage} = this.props;
        return (
            <ListItem>
                {
                    list.map((item, index) => (
                        <Link key={index} to={{
                            pathname: '/detail',
                            state: item.get('id')
                        }}>
                            <ListItem key={index}>
                                <img alt='' className='pic' src={item.get('imgUrl')}/>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={()=>{this.props.getMoreList(articlePage)}}>
                    更多文字
                </LoadMore>
            </ListItem>
        )
    }


}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    articlePage:state.getIn(['home','articlePage'])
});
const mapDispatchToProps = (dispatch) => ({
    getMoreList(articlePage){
        dispatch(actionCreater.getMoreList(articlePage+1));
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);