import Button from "../components/Button";
import Input from "../components/Input";
import OffCanvas from "../components/OffCanvas";
import React, {useRef} from "react";

function Signup()
{
    //modificar
    const inputNombrePila = useRef();
    const inputApellidoPat = useRef();
    const inputApellidoMat = useRef();
    const inputEdad = useRef();
    const inputAlmaMater = useRef();
    const inputSucursal = useRef();
    const inputPuesto = useRef();
    const inputEmail = useRef();
    const inputPass = useRef();
    const mostrar = () =>{
        console.log("Nombre de Pila: ",inputNombrePila.current.getValue());
        console.log("Apellido Paterno: ",inputApellidoPat.current.getValue());
        console.log("Apellido Materno: ",inputApellidoMat.current.getValue());
        console.log("Edad: ",inputEdad.current.getValue());
        console.log("Alma Máter: ",inputAlmaMater.current.getValue());
        console.log("Sucursal: ",inputSucursal.current.getValue());
        console.log("Puesto: ",inputPuesto.current.getValue());
        console.log("e-mail: ",inputEmail.current.getValue());
        console.log("Contraseña: ",inputPass.current.getValue());
    }
    return (
        <div>
        
            <h1>Crea tu cuenta</h1>
            <Input label="Ingresa tu nombre de pila" ref={inputNombrePila} />
            <Input label="Ingresa tu nombre de apellido paterno" ref={inputApellidoPat} />
            <Input label="Ingresa tu nombre de apellido materno" ref={inputApellidoMat} />
            <Input label="Ingresa tu edad" ref={inputEdad} />
            <Input label="Ingresa tu Alma Máter" ref={inputAlmaMater} />
            <Input label="Ingresa la sucursal a la que estás aplicando" ref={inputSucursal} />
            <Input label="Ingresa el puesto al que estás aplicando" ref={inputPuesto} />
            <Input label="Ingresa tu correo e-mail" ref={inputEmail} />
            <Input label="Ingresa tu contraseña" ref={inputPass} />
            <Input label="Ingresa de nuevo tu contraseña" ref={inputPass} />
            <Button onClick={mostrar} color={"success"}>Mostrar input</Button>
        </div>
    )
}
//
export default Signup