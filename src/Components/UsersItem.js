import Card from "./Card";
import "../Css/UsersItem.css"

const UsersItem = ({username, age}) => {
    return (
        <Card>
            <p>{username} ({age} years old)</p>
        </Card>
    )

}

export default UsersItem;