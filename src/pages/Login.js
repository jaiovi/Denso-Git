import React, { useRef, useState } from 'react';
import Button from "../components/Button"


function Login(){

    const [values, setValues] = useState({      // definimos un hook que nos permite usar estados
        email: "",                              // para cada valor establecemos un estado default
        password: ""
    })

    const [submitted, setSubmitted] = useState(false);

    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})       // the ... copies the values of "values"
    }

    const handlePasswordInputChange = (event) => {
        setValues({...values, password: event.target.value})    // the ... copies the values of "values"
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    return(
    <div className="form-container">
        <h1>LOGIN</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            {submitted ? <div className="success-message"> Success! Thank you for registering </div> : null}
            <input
                value={values.email}                // almacenamos el valor del input en values
                onChange={handleEmailInputChange}   // updating de value with every key-stroke
                className="form-field"
                placeholder="Email"
                name="email" />
            <input
                value={values.password}
                onChange={handlePasswordInputChange}
                className="form-field"
                placeholder="Password"
                name="password" />
            <button
                className="form-field"
                type="submit"> Log In </button>
        </form>
    </div>
    )
}

export default Login