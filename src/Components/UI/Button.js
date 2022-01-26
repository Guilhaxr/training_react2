import classes from "./Button.module.css"
//this button i'm using in form and in the modal. Is reusable
const Button = (props) => {
    return(
        
        <button 
            // here i'm using CSS Modules
            className={classes.button}
            //here my type can be diferent
            type={props.type || "button"}
            onClick={props.onClick}
            >{props.children}
        </button>
    )
}

export default Button;