import Card from "./UI/Card";
import "../Css/UsersItem.css"

const UsersItem = ({username, age}) => {

    
    return (
        <Card>
            <div className="user-Item__description">{username} ({age} years old)</div>
        </Card>
    )

}

export default UsersItem;