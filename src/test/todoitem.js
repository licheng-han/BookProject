import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types'

class Todoitem extends Component {
    constructor(props) {
        super(props);
        this.delItemList = this.delItemList.bind(this);
    }

    delItemList() {
        const {index, callback} = this.props;
        callback(index);
    }
    render() {
        const {context} = this.props;
        return (
            <Fragment>
                <li onClick={this.delItemList}>{context}</li>
            </Fragment>
        );
    }
}

Todoitem.propTypes = {
    index:PropTypes.number,
    callback:PropTypes.func,
    context:PropTypes.string
};
export default Todoitem;