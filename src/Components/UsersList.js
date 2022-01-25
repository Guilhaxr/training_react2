import UsersItem from "./UsersItem";

const UsersList = ({users}) => {
    
    return(
        <div>
            {users.map((e)=>
            < UsersItem
                key={e.id}
                username={e.username}
                age={e.age}
            />
            )}

        </div>
    )
}

export default UsersList;