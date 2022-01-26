import "../Css/UsersForm.css"
import { useState } from "react/cjs/react.development";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal"


const UsersForm = ({onSaveUserData}) => {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState("");
    
    const usernameHandler = (event) =>{
        setEnteredUsername(event.target.value)
    }

    const ageHandler = (event) =>{
        setEnteredAge(event.target.value)

    }

    const errorHandler= () => {
        setError(null)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if( enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
           setError({
               title: "Invalid Input", 
                message: "Please enter a valid name and age ( non-empty values)"
            })
        }

        if(+enteredAge < 1){
            setError({
                title: "Invalid Age", 
                 message: "Please enter a valid age "
             })
        }

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
        { error && <ErrorModal title={error.title} message={error.message}  onConfirm={errorHandler} /> }
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
            <Button type="submit">Add User</Button>
        </form>
    </div>

)
}

export default UsersForm;