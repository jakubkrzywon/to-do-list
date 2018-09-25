import React, {Component} from 'react';

class ToDoRequests extends Component {
    constructor(props) {
        super(props)

        this.createRequests = this.createRequests.bind(this)
    }

    createRequests(el) {
        return <li key={el.key}>{el.text}
            <button onClick={()=>this.delete(el.key)}>Usuń</button>
        </li>
    }

    delete(el) {
        this.props.delete(el);
    }

    render() {
        const todoreq = this.props.req;
        const reqList = todoreq.map(this.createRequests)

        return (
            <ul className="todo-ul">
                {reqList}
            </ul>
        )
    }
}

export default ToDoRequests;