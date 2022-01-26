import "../Css/Users.css";
import Card from "./UI/Card";
import UsersList from "./UsersList";


const Users = ({items}) => {

    
    return(
        <div>
            {/* This Card component is a possible way to create my  style card's default */}
            <Card className="users">
                <UsersList users={items} />
            </Card>

        </div>
    )
}
export default Users;