import React, {useState } from 'react';
import { Link } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"


function Login(){

    const [values, setValues] = useState({      // definimos un hook que nos permite usar estados
        email: "",                              // para cada valor establecemos un estado default
        password: ""
    })

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})       // the ... copies the values of "values"
    }

    const handlePasswordInputChange = (event) => {
        setValues({...values, password: event.target.value})    // the ... copies the values of "values"
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.email && values.password) {
            setValid(true);
        }
        setSubmitted(true);
    }

    return(
    <div className="form-container">
        <h1>LOGIN</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            { submitted && valid ? <div className="success-message"> Success! Thank you for registering </div> : null }
            <Input
                value={values.email}                // almacenamos el valor del input en values
                onChange={handleEmailInputChange}   // updating de value with every key-stroke
                className="form-field"
                label="Email"
                name="email" />
            { submitted && !values.email ? <span>Please enter an email</span> : null }
            <Input
                value={values.password}
                onChange={handlePasswordInputChange}
                className="form-field"
                label="Password"
                name="password" />
            { submitted && !values.password ? <span>Please enter a pasword</span> : null }
            <Link to={"/home"}> <Button
                className="form-field"
                color={"success"}
                type="submit"> Log In </Button> </Link>
        </form>
    </div>
    )
}

export default Login