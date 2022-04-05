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

    const [values, setValues] = useState({      // definimos un hook que nos permite usar estados
        nombrePila: "",
        apellidoPat: "",
        apellidoMat: "",
        edad: "",
        almaMater: "",
        sucursal: "",
        puesto: "",
        email: "",                              // para cada valor establecemos un estado default
        password: ""
    })

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleNombrePilaInputChange = (event) => {
        setValues({...values, nombrePila: event.target.value})       // the ... copies the values of "values"
    }

    const handleApellidoPatInputChange = (event) => {
        setValues({...values, apellidoPat: event.target.value})       // the ... copies the values of "values"
    }

    const handleApellidoMatInputChange = (event) => {
        setValues({...values, apellidoMat: event.target.value})       // the ... copies the values of "values"
    }

    const handleEdadInputChange = (event) => {
        setValues({...values, edad: event.target.value})       // the ... copies the values of "values"
    }

    const handleAlmaMaterInputChange = (event) => {
        setValues({...values, almaMater: event.target.value})       // the ... copies the values of "values"
    }

    const handleSucursalInputChange = (event) => {
        setValues({...values, sucursal: event.target.value})       // the ... copies the values of "values"
    }

    const handlePuestoInputChange = (event) => {
        setValues({...values, puesto: event.target.value})       // the ... copies the values of "values"
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

    return (
        <div>
        
            <h1>Crea tu cuenta</h1>
            <Input label="Ingresa tu nombre de pila *" ref={inputNombrePila} />
            <Input label="Ingresa tu nombre de apellido paterno *" ref={inputApellidoPat} />
            <Input label="Ingresa tu nombre de apellido materno *" ref={inputApellidoMat} />
            <Input label="Ingresa tu edad *" ref={inputEdad} />
            <Input label="Ingresa tu Alma Máter *" ref={inputAlmaMater} />
            <Input label="Ingresa la sucursal a la que estás aplicando *" ref={inputSucursal} />
            <Input label="Ingresa el puesto al que estás aplicando *" ref={inputPuesto} />
            <Input label="Ingresa tu correo e-mail *" ref={inputEmail} />
            <Input label="Ingresa tu contraseña *" ref={inputPass} />
            <Input label="Ingresa de nuevo tu contraseña *" ref={inputPass} />
            <Button onClick={mostrar} color={"success"}>Finalizar Registro</Button>
        </div>
    )
}
//
export default Signup