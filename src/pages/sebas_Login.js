import Button from "../components/Button";
import Input from "../components/Input";
import OffCanvas from "../components/OffCanvas";
import React, {useRef} from "react";

function Login()/*{
    //const [username, setUsername] = useState()
    const iniciarSesion=() =>{
        console.log("Iniciando sesion")
    }
    return(
        <div>
            <h1>Login</h1>
            <Button onClick={iniciarSesion} color={"$green"}>Login</Button>
            {username}
            <input onChange={onChangeUsername}></input>
        </div>
    )
}*/
{
    const inputUsername = useRef();
    const inputPass = useRef();
    const mostrar = () =>{
        console.log("username: ",inputUsername.current.getValue());
        console.log("password: ",inputPass.current.getValue());
    }
    return (
        <div>
        
            <h1>Login</h1>
            <Input label="Escrbe tu nombre" ref={inputUsername} />
            <Input label="Escrbe tu contrasena" ref={inputPass} />
            <Button onClick={mostrar} color={"success"}>Mostrar input</Button>
        </div>
    )
}
//
export default Login