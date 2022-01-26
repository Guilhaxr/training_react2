import Card from "./Card";
import Button from "./Button";
// here i'm using the css modules
import classes from "./ErrorModal.module.css"

//when I want use portals I need import the react-dom
import ReactDOM from "react-dom"


//firt I splited the backdrop and the modal;

//I have a function with the backdrop;
const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onConfirm} />  
}

//and other fuction with the modal;
const ModalOverlay = (props) => {
   return( 
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.action}>
                <Button onClick={props.onConfirm}>Close</Button>
            </footer>
        </Card>
    )
}

// In this functions I will create the portasl, but first I need create the divs with the ID in Index.html ;
const ErrorModal = (props) => {

return (
    <>
    {/* Into the portal I inserted the backdrop's component and into him I insert the props;
    after that is necessary write the getElementById with the ID I've inserted in Index.html*/}
    {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
         document.getElementById('backdrop')
    )}
    
    {ReactDOM.createPortal(
        <ModalOverlay 
        title={props.title} 
        message={props.message} 
        onConfirm={props.onConfirm} />, 
        document.getElementById('overlay')
    )}
    </>
   
)

}
 
export default ErrorModal;