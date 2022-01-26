import classes from "./Button.module.css"

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