import { Link } from "react-router-dom"
import Button from "./Button"


function Header(){
    return(
    <div className="bg-primary d-flex">
        <div className="p-2 flex-fill"><h1 className="text-light">Your Opportunity at Denso</h1></div>
        <div className="p-2 flex-fill">
            <div className="d-flex justify-content-end">
            <Link to={"/home"}> <Button color={"primary"}> Ir a <b>Home</b> </Button> </Link>
            <Link to={"/profile/my-profile"}> <Button color={"primary"}> Profile </Button> </Link>
            <Link to={"/login"}> <Button color={"danger"} > LogOut </Button> </Link>
            <Link to={"/signup"}> <Button color={"primary"} > Sign Up </Button> </Link>
            </div>
        </div>
    </div>
    )
}

export default Header