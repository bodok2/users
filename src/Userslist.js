import React, {Component} from "react";

class UserList extends Component {

    createUser = (user) => {
        return( 
        <li key={user.userName}></li>
        )}
    

    render() {
        let usersList = this.props.usersList;
        let usersLi = usersList.map((user) => {
                return ( <li> {
                        user.userName
                    } </li>)
                });


            return ( 
                <ul className = "the-list">
                   {usersLi}
                </ul>
            )
        }
    }




export default UsersList;