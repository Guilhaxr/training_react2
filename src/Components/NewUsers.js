import "../Css/NewUsers.css";
import UsersForm from "./UsersForm";

const NewUsers = ({onAddUser}) => {


    const saveUserData = (enteredData) =>{
        const userData ={
            ...enteredData,
            id: Math.random().toString()
        }
        onAddUser(userData)
       
    }


    return(
        <div className="new-users">
            
                <UsersForm onSaveUserData ={saveUserData} />
        </div>
    )
}
export default NewUsers;