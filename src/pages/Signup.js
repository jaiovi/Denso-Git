import React, {useRef, useState} from "react";
import { API } from "../api/API"
import Button from "../components/Button";
import Input from "../components/Input";

// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

function Signup()
{
    //modificar

    const inputName = useRef();
    const inputLastName = useRef();
    const inputRole = useRef();
    const inputLocation = useRef();
    const inputBirthDate = useRef();
    const inputEmail = useRef();
    const inputPass = useRef();
    const inputPass2 = useRef();
    // const [selectedDate, setSelectedDate] = useState(null);
    const mostrar = () =>{
        console.log("Nombre de Pila: ",inputName.current.getValue());
        console.log("Apellidos: ",inputLastName.current.getValue());
        console.log("Rol: ",inputRole.current.getValue());
        console.log("Sucursal: ",inputLocation.current.getValue());
        console.log("Fecha de Nacimiento: ",inputLocation.current.getValue());
        console.log("e-mail: ",inputEmail.current.getValue());
        console.log("Contraseña: ",inputPass.current.getValue());
        console.log("Contraseña2: ",inputPass2.current.getValue());
    }

    const [values, setValues] = useState({      // definimos un hook que nos permite usar estados
        name: "",
        lastName: "",
        role: "",
        location: "",
        birthDate: "",
        email: "",                              // para cada valor establecemos un estado default
        password: "",
        password2: ""

    })

     

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleNameInputChange = (event) => {
        console.log(event)
        setValues(JSON.parse(JSON.stringify({...values, name: event})))       // the ... copies the values of "values"
    }

    const handleLastNameInputChange = (value) => {
        setValues({...values, lastName: value})       // the ... copies the values of "values"
    }

    const handleRoleInputChange = (value) => {
        setValues({...values, role: value})       // the ... copies the values of "values"
    }

    const handleLocationInputChange = (value) => {
        setValues({...values, location: value})       // the ... copies the values of "values"
    }

    const handleBirthDateInputChange = (value) => {
        setValues({...values, birthDate: value})       // the ... copies the values of "values"
    }

    const handleEmailInputChange = (value) => {
        setValues({...values, email: value})       // the ... copies the values of "values"
    }

    const handlePasswordInputChange = (value) => {
        setValues({...values, password: value})    // the ... copies the values of "values"
    }

    const handlePassword2InputChange = (value) => {
        setValues({...values, validate_password: value})    // the ... copies the values of "values"
    }

    const handleSubmit = (event) => {

        let data = {
            name:values.name,
            lastName:values.lastName,
            role:values.role,
            location:values.location,
            birthDate:values.birthDate,
            email:values.email,                              // para cada valor establecemos un estado default
            password:values.password,
            password2:values.password2
        }

        if ( values.password == values.password2 ){

            API.post("/user", data, (response)=>{             // la dirección manda a la función "login" de user en el API
                console.log(response)
        
            }, (error) => {
                console.log(error)
            })
        }

        event.preventDefault();
        if (values.name && values.lastName && values.role && values.location && values.birthDate && values.email && values.password) {
            setValid(true);
        }
        setSubmitted(true);
    }

    return (
        <div className="form-container m-4">
            <h1>Crea tu cuenta</h1>
            <div className="register-form">
                {submitted && valid ? <div className="success-message"> Success! Thank you for registering </div> : null}
                <Input
                    value = {values.name}
                    onChange = {handleNameInputChange}
                    className = "form-field"
                    label="Ingresa tu nombre de pila *" />
                {submitted && !values.email ? <span>Please enter an email</span> : null}
                <Input
                    value = {values.lastName}
                    onChange = {handleLastNameInputChange}
                    className = "form-field"
                    label="Ingresa tu(s) apellido(s) *" />
                <Input
                    value = {values.role}
                    onChange = {handleRoleInputChange}
                    className = "form-field"
                    label="Ingresa tu rol en Denso *" />
                <Input
                    value = {values.location}
                    onChange = {handleLocationInputChange}
                    className = "form-field"
                    label="Ingresa la sucursal a la que perteneces *" />
                <Input
                    value = {values.birthDate}
                    onChange = {handleBirthDateInputChange}
                    className = "form-field"
                    // Año - mes - dia aaaa-mm-dd
                    type = "date"
                    label="Ingresa tu fecha de nacimiento con el siguiente formato *" ref={inputBirthDate} />
                <Input
                    value = {values.email}
                    onChange = {handleEmailInputChange}
                    className = "form-field"
                    type="email"
                    label="Ingresa tu correo e-mail *" />
                <Input
                    value = {values.password}
                    onChange = {handlePasswordInputChange}
                    className = "form-field"

                    type="password"
                    label="Ingresa tu contraseña *" />
                <Input
                    value = {values.password2}
                    onChange = {handlePasswordInputChange}
                    className = "form-field"
                    type="password"
                    label="Ingresa de nuevo tu contraseña *" />
                <Button
                    className="form-field"
                    color={"success"}
                    onClick={handleSubmit}
                    type="submit" >Finalizar Registro</Button>
            </div>
        </div>
    )
}
//
export default Signup