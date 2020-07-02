import React,{Component} from 'react';
import {ListItem, ListInfo,LoadMore} from '../../../css/home';
import {connect} from 'react-redux';
class List extends Component{

    render() {
        const {list} = this.props;
        return(
            <ListItem >
                {
                    list.map((item,index) => (
                        <ListItem key={index}>
                            <img alt='' className='pic' src={item.get('imgUrl')} />
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    ))
                }
                <LoadMore>
                    更多文字
                </LoadMore>
            </ListItem>
        )
    }
}
const mapStateToProps = (state) =>({
    list: state.getIn(['home', 'articleList']),
});
const mapDispatchToProps = (dispatch) =>({

});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);