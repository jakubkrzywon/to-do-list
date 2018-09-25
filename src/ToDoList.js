import React, {Component} from 'react';
import './App.css';
import ToDoRequests from './ToDoRequests'
class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state ={
            requests: [],
        };

       this.addRequest = this.addRequest.bind(this);
       this.deleteReq = this.deleteReq.bind(this);
    }

    addRequest(e){
        if(this._inputElement.value !==""){
            const newReq = {
                text: this._inputElement.value,
                key: Date.now(),
            }

            this.setState((prevState) => {
                return{
                    requests: prevState.requests.concat(newReq)
                }
            })

        }else{
            alert("Wpisz zadanie, aby dodać je do listy!")
        }

        this._inputElement.value = "";
        console.log(this.state.requests);
        e.preventDefault();
    }

    deleteReq(key){
        const filteredReq = this.state.requests.filter(function (el) {
            return(el.key !== key)
        });

        this.setState({
            requests: filteredReq
        })
    }
    render() {
        return (
            <div className="todo">
                <div className="todo-header">
                    <form onSubmit={this.addRequest}>
                        <input placeholder="Wpisz zadanie do zrobienia" ref={(el)=>this._inputElement = el}/>
                        <button type="submit">Dodaj do listy zadań</button>
                    </form>
                </div>
                <ToDoRequests req={this.state.requests}
                    delete={this.deleteReq}/>
                <div className="todo-requests">

                </div>
            </div>
        );
    }
}

export default ToDoList;
