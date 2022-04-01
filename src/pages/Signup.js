import Button from "../components/Button";
import Input from "../components/Input";
import OffCanvas from "../components/OffCanvas";
import React, {useRef} from "react";

function Signup()
{
    //modificar
    const inputUsername = useRef();
    const inputPass = useRef();
    const mostrar = () =>{
        console.log("username: ",inputUsername.current.getValue());
        console.log("password: ",inputPass.current.getValue());
    }
    return (
        <div>
        
            <h1>Crea tu cuenta</h1>
            <Input label="Escrbe tu nombre" ref={inputUsername} />
            <Input label="Escrbe tu contrasena" ref={inputPass} />
            <Button onClick={mostrar} color={"success"}>Mostrar input</Button>
        </div>
    )
}
//
export default Signup