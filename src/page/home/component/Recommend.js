import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {RecommendWrapper, RecommendItem} from '../style';

class Recommend extends PureComponent {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        // eslint-disable-next-line no-unused-vars
        const {list} = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList']),
});

export default connect(mapState, null)(Recommend);