import React, { useState } from 'react';
import { API } from "../api/API"
import Button from "../components/Button"
import Input from "../components/Input"


function Login(){

    const [message, setMessage] = useState(null);

    const [values, setValues] = useState({      // definimos un hook que nos permite usar estados
        email: "",                              // para cada valor establecemos un estado default
        password: ""
    })

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleEmailInputChange = (event) => {
        setValues({...values, email:event})       // the ... copies the values of "values" -- Input.js:7
    }

    const handlePasswordInputChange = (event) => {
        setValues({...values, password: event})    // the ... copies the values of "values"
    }

    const handleSubmit = (event) => {

        let data = {
            email:values.email,
            password:values.password
        }

        API.post("/user/login", data, (response)=>{             // la dirección manda a la función "login" de user en el API
            console.log(response)
            localStorage.setItem("token", response.token)
            setMessage(response.message);
        }, (error) => {
            console.log(error);
            setMessage(error.message);
        })

        event.preventDefault();
        if (values.email && values.password) {
            setValid(true);
        }
        setSubmitted(true);
    }

    return(
    <div className="form-container m-4">
        <h1>LOGIN</h1>
        <div className="register-form">
            { submitted && valid ? <div className="success-message"> Success! Thank you for registering </div> : null }
            <Input
                value={values.email}                // almacenamos el valor del input en values
                onChange={handleEmailInputChange}   // updating de value with every key-stroke
                className="form-field"
                type="email"
                label="Email"
                name="email" />
            { submitted && !values.email ? <span>Please enter an email</span> : null }
            <Input
                value={values.password}
                onChange={handlePasswordInputChange}
                type="password"
                className="form-field"
                label="Password"
                name="password" />
            { submitted && !values.password ? <span>Please enter a pasword</span> : null }
            <Button
                className="form-field"
                color={"success"}
                onClick={handleSubmit}
                type="submit"> Log In </Button>
            <div className="text-danger">{message ? message:null}</div>
        </div>
    </div>
    )
}

export default Login