import "./Card.css"

const Card = (props) => {
    
    //In this variable I created a new className, "card users". Because in the Users.js component  I have a className = "users";
    const classes = "card " + props.className; 

return(
    <div className={classes}>
        {/* this is used to display whatever you include between the opening and closing tags when invoking a component. */}
        {props.children}
    </div>

)
}

export default Card;
