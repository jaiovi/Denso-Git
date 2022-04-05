import React, {useRef, useState} from "react";
import { Link } from "react-router-dom"
import Button from "../components/Button";
import Input from "../components/Input";

function Signup()
{
    //modificar
    const inputName = useRef();
    const inputLastName = useRef();
    const inputRole = useRef();
    const inputLocation = useRef();
    const inputEmail = useRef();
    const inputPass = useRef();
    const mostrar = () =>{
        console.log("Nombre de Pila: ",inputName.current.getValue());
        console.log("Apellidos: ",inputLastName.current.getValue());
        console.log("Rol: ",inputRole.current.getValue());
        console.log("Sucursal: ",inputLocation.current.getValue());
        console.log("e-mail: ",inputEmail.current.getValue());
        console.log("Contraseña: ",inputPass.current.getValue());
    }

    const [values, setValues] = useState({      // definimos un hook que nos permite usar estados
        name: "",
        lastName: "",
        role: "",
        location: "",
        email: "",                              // para cada valor establecemos un estado default
        password: ""
    })

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleNameInputChange = (event) => {
        setValues({...values, name: event.target.value})       // the ... copies the values of "values"
    }

    const handleLastNameInputChange = (event) => {
        setValues({...values, lastName: event.target.value})       // the ... copies the values of "values"
    }

    const handleRoleInputChange = (event) => {
        setValues({...values, role: event.target.value})       // the ... copies the values of "values"
    }

    const handleLocationInputChange = (event) => {
        setValues({...values, location: event.target.value})       // the ... copies the values of "values"
    }

    const handleEmailInputChange = (event) => {
        setValues({...values, location: event.target.value})       // the ... copies the values of "values"
    }

    const handlePasswordInputChange = (event) => {
        setValues({...values, password: event.target.value})    // the ... copies the values of "values"
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.name && values.lastName && values.role && values.location && values.email && values.password) {
            setValid(true);
        }
        setSubmitted(true);
    }

    return (
        <div className="form-container">
            <h1>Crea tu cuenta</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                {submitted && valid ? <div className="success-message"> Success! Thank you for registering </div> : null}
                <Input
                    value = {values.name}
                    onChange = {handleNameInputChange}
                    className = "form-field"
                    label="Ingresa tu nombre de pila *" ref={inputName} />
                {submitted && !values.email ? <span>Please enter an email</span> : null}
                <Input
                    value = {values.lastName}
                    onChange = {handleLastNameInputChange}
                    className = "form-field"
                    label="Ingresa tu(s) apellido(s) *" ref={inputLastName} />
                <Input
                    value = {values.role}
                    onChange = {handleRoleInputChange}
                    className = "form-field"
                    label="Ingresa tu rol en Denso *" ref={inputRole} />
                <Input
                    value = {values.location}
                    onChange = {handleLocationInputChange}
                    className = "form-field"
                    label="Ingresa la sucursal a la que perteneces *" ref={inputLocation} />
                <Input
                    value = {values.email}
                    onChange = {handleEmailInputChange}
                    className = "form-field"
                    label="Ingresa tu correo e-mail *" ref={inputEmail} />
                <Input
                    value = {values.password}
                    onChange = {handlePasswordInputChange}
                    className = "form-field"
                    label="Ingresa tu contraseña *" ref={inputPass} />
                <Input
                    value = {values.password}
                    onChange = {handlePasswordInputChange}
                    className = "form-field"
                    label="Ingresa de nuevo tu contraseña *" ref={inputPass} />
                <Link to={"/home"}> <Button
                    className="form-field"
                    onClick={mostrar}
                    color={"success"}
                    type="submit" >Finalizar Registro</Button> </Link>
            </form>
        </div>
    )
}
//
export default Signup