import React, {useRef, useState} from "react";
import { API } from "../api/API"
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

function Signup(){

    const [message, setMessage] = useState(""); // Mensaje vacío
    // Crear componentes referenciados
    const inputName = useRef();
    const inputLastName = useRef();
    const inputRole = useRef();
    const inputLocation = useRef();
    const inputDepartment = useRef();
    const inputBirthDate = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();
    const inputPassword2 = useRef(); // Para validar contraseña
    // Las contraseñas se encriptan en la API.
    const signup = () => {
        console.log("Signup") // Para verificar que la función se está llamando
        setMessage(""); // Validación para que lo elimine de la pantalla.
        // Se mandan los datos como un diccionario para la API.
        let data = {
            // Así se llama a la referencia. La referencia actual es la línea que está en return después del <h1>
            // Después se pueden mandar a llamar las funciones que se encuentran en este caso en Input.js, OJO, esas funciones debieron de haber sido regresadas la función de useImperativeHandle
            name: inputName.current.getValue(),
            last_name: inputLastName.current.getValue(),
            role: inputRole.current.getValue(),
            location: inputLocation.current.getValue(),

            birthDate: inputBirthDate.current.getValue(),
            email: inputEmail.current.getValue(),
            password: inputPassword.current.getValue(),
            validate_password: inputPassword2.current.getValue(),
        }
        console.log(data) // Los datos introducidos se muestran en la consola.

        // /Direccion para publicar gracias al controlador en la API.
        // Se manda el data como datos
        // Hay una función onSuccess()
        API.post("/user", data,
        (response)=>{
            console.log(response) // Para ver la respuesta
            setMessage(response.message)
        }, (error)=>{
            console.log(error) // Para ver el error
            // Cuando llega el error...
            setMessage(error.message) // Porque así viene desde la API, porque esa variable adicional se llama message
        })
    }

    return (
        <div className="container">

            <h1>Signup</h1>

            {/* Referencia  Etiqueta que se despliega en pantalla   Tipo */}
            <Input ref={inputName} label={"Ingresa tu nombre de pila *"}/>
            <Input ref={inputLastName} label={"Ingresa tu(s) apellido(s) *"}/>

            <Input ref={inputRole} label={"Ingresa tu rol en Denso *"}/>

            <p className="fw-bold fst-italic">Selecciona la sucursal a la que perteneces *</p>
            <Select ref={inputLocation} label={"Sucursal"} item={"Queso" "Hola"}/>
            <br></br>
            <p className="fw-bold fst-italic">Selecciona el departamento al que perteneces *</p>
            <Select ref={inputDepartment} label={"Departamento"} item={"Leche"}/>
            <br></br>

            <Input ref={inputBirthDate} label={"Ingresa tu fecha de nacimiento con el siguiente formato *"} type = "date"/>
            <Input ref={inputEmail} label={"Ingresa tu correo electrónico *"}/>
            <Input ref={inputPassword} label={"Ingresa tu contraseña *"} type={"password"}/>
            <Input ref={inputPassword2} label={"Ingresa de nuevo tu contraseña *"} type={"password"}/>

            {/* Cuando haya un mensaje definido que lo muestre, si no, que regrese nulo */}
            <div className="text-danger">{message ? message:null}</div>
            {/* Cuando se de clic, se ejecuta la función referenciada en onClick */}
            <Button onClick={signup} color={"success"}>Finalizar Registro</Button>
        </div>
    )
}
//
export default Signup