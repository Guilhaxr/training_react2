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
    //In this function if the user click in the button " close" or in the backdrop the model closes.
    const errorHandler= () => {
        setError(null)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        // in this condition if the user doesn't write anything will receive an error;
        if( enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
           setError({
               title: "Invalid Input", 
                message: "Please enter a valid name and age ( non-empty values)"
            })
            return;
        }
        // in this condition if the user writes an age less than 1 will receive an error;
        if(+enteredAge < 1){
            setError({
                title: "Invalid Age", 
                 message: "Please enter a valid age "
             })
             return;
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
        {/* if the error's state is true ( have some data ) will appear the modal */}
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