import { Link } from "react-router-dom"
import Button from "./Button"


function Header(){
    return(
    <div>
        <h1>My first React Application</h1>
        <Link to={"/home"}> <Button color={"primary"}> Ir a <b>Home</b> </Button> </Link>
        <Link to={"/profile/my-profile"}> <Button color={"primary"}> Profile </Button> </Link>
        <Link to={"/login"}> <Button color={"danger"} > LogOut </Button> </Link>
        <Link to={"/signup"}> <Button color={"primary"} > Sign Up </Button> </Link>
    </div>
    )
}

export default Header