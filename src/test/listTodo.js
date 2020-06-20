import React, {Fragment} from 'react';
import Todoitem from "./todoitem";

class TodoList extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: []
        };
        this.init()
    }

    init() {
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
        this.delItem = this.delItem.bind(this);
    }

    submit() {
        this.setState((productDetails) => ({
            list: [...productDetails.list, productDetails.inputValue],
            inputValue: ""
        }));
    }

    change(e) {
        const inpValue = e.target.value;
        this.setState((preloadState) => ({
            inputValue: inpValue
        }));
    }

    delItem(index) {
        const delList = [...this.state.list];
        delList.splice(index, 1);
        this.setState(() => (
            {
                list: delList
            }
        ));
    }

    getList() {
        return this.state.list.map((item, index) => (
            <Todoitem
                key={index}
                context={item}
                index={index}
                callback={this.delItem}
            />
        ));
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.change}/>
                    <button onClick={this.submit}>提交</button>
                </div>
                <ul>
                    {this.getList()}
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;