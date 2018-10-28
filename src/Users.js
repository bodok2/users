import React, {Component} from "react";
import usersList, {Component} from "./UsersList";
//import 


class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usersList: [],
        }
    }

    addUser = (e) =>  {
        e.preventDefault();
        

        let newUser = {
            key: Date.now(),
            userName: this.inputName.value,

        }

        this.setState( (prevState) => {
            return({
                usersList: prevState.usersList.concat(newUser),
            })

        })
this.inputName.value = "";

    }


    render() {
        return (
            <div className="users-main">
            <h1>Users List</h1>
            <form>
                <input ref ={(data) => this.inputName = data}></input>
                <input type="text" placeholder="Enter name"></input>
                <button type="submit">Add user</button>
            </form>

            <UsersList= {this.state.usersList} /> 
            Tutaj będzie lista userów ;-)           
            </div>
        )
    }
}

export default Users;