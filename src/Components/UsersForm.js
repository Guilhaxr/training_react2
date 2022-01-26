import "../Css/UsersForm.css"
import { useState } from "react/cjs/react.development";


const UsersForm = ({onSaveUserData}) => {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    
    const usernameHandler = (event) =>{
        setEnteredUsername(event.target.value)
    }

    const ageHandler = (event) =>{
        setEnteredAge(event.target.value)

    }

    const submitHandler = (event) => {
        event.preventDefault();

        const userData ={
            username : enteredUsername,
            age : enteredAge
        }

        onSaveUserData(userData)
       

        //clean inputs
        setEnteredUsername("");
        setEnteredAge("");
    }

    
return (
    <div>
        <form onSubmit={submitHandler}>
            <div className="new-users__controls">
                <div className="new-users__control">
                    <label>Username</label>
                    <input type="text" value={enteredUsername} onChange={usernameHandler} />
                </div>
                <div className="new-users__control">
                    <label >Age(Years)</label>
                    <input type="number"  value={enteredAge} onChange={ageHandler}/>
                </div>
            </div>
            <button type="submit">Add User</button>
        </form>
    </div>

)
}

export default UsersForm;