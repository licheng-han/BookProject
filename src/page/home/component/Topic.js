import React, {PureComponent} from 'react';
import {TopicWrapper, TopicItem} from '../../../css/home';
import {connect} from 'react-redux';

class Topic extends PureComponent {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    getItem() {
        const {list} = this.props;
        return list.map((item) => (
            <TopicItem key={item.get('id')}>
                <img
                    className='topic-pic'
                    src={item.get('img')}
                    alt=''
                />
                {item.get('title')}
            </TopicItem>
        ))
    }

    render() {
        return (
            <TopicWrapper>
                {
                    this.getItem()
                }
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'topicList']),
});
const mapDispatch = (dispatch) => ({});
export default connect(mapState, mapDispatch)(Topic);