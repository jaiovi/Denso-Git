import { Link } from "react-router-dom"
import Button from "./Button"

import React, { useEffect, useState} from 'react';
import { API } from "../api/API"


function Header(){
    
    //VALIDADOR
    const [validador, setValidador] = useState(null);
    //var validador;
    let adminView=
    <>
    <Link to={"/signup"}> <Button color={"primary"} > Sign Up </Button> </Link>
    <Link to={"/VistaAdmin"}><Button color={"secondary"} > Vista Admin.</Button> </Link>
    </>;
    useEffect(()=>{
        API.get("/user",(response)=>{
            console.log(response);
            if(response.data.managerPerm==true)
                setValidador(true);
            console.log("Admin: " + validador);
        })
    },[]);
    
    const logout = () => {
    window.localStorage.removeItem("token");
    document.location.href="/";
    }

    return(
        
    <div className="bg-primary d-flex">
        <div className="p-2 flex-fill"><h1 className="text-light">Your Opportunity at <b>Denso</b></h1></div>
        <div className="p-2 flex-fill">
            <div className="d-flex justify-content-end">
            <Link to={"/home"}> <Button color={"primary"}> Ir a <b>Home</b> </Button> </Link>
            <Link to={"/login"}> <Button color={"danger"} onClick={validador ? logout:null}> {validador ? <>Log Out</> : <>Log In</>}</Button> </Link>
            <span>{validador ? adminView : null}</span>
            </div>
        </div>
    </div>
    )
}

export default Header