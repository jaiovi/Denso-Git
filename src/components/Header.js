import { Link } from "react-router-dom"
import Button from "./Button"

import React, { useEffect } from 'react';
import { API } from "../api/API"


function Header(){
    //VALIDADOR
    var validador;
    useEffect(()=>{
        API.get("/user",(response)=>{
            console.log(response)
            validador=response.data.managerPerm;
            console.log(validador)
        })
    },[]);
    let adminView=null;
    if(!validador){
        adminView=
        <>
        {/* <Link to={"/profile/my-profile"}> <Button color={"primary"}> Profile </Button> </Link> */}
        <Link to={"/signup"}> <Button color={"primary"} > Sign Up </Button> </Link>
        <Link to={"/VistaAdmin"}><Button color={"secondary"} > Vista Admin.</Button> </Link>
        </>
    }
    return(

    <div className="bg-primary d-flex">
        <div className="p-2 flex-fill"><h1 className="text-light">Your Opportunity at Denso</h1></div>
        <div className="p-2 flex-fill">
            <div className="d-flex justify-content-end">
            <Link to={"/home"}> <Button color={"primary"}> Ir a <b>Home</b> </Button> </Link>
            <Link to={"/login"}> <Button color={"danger"} > Log In </Button> </Link>
            {adminView}
            </div>
        </div>
    </div>
    )
}

export default Header