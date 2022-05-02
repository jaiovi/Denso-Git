import React, {useRef, useEffect, useState} from "react";
import * as bootstrap from "bootstrap"
import axios from 'axios'
import CustomListDropDown from "../components/CustomListDropDown";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import { API } from "../api/API"

/*export default function VistaAdmin() {
    return(
        <>
            <CustomListDropDown/>
        </>
    )
}*/

//candidato/<mylocation>/<mydepartment>tabla
//Get o fetch no esta funcionando en el codigo
//Dropdown funcionan pero nomas muestran las opciones, no muestran nada

function VistaAdmin() {
    const inputLocation = useRef();
    const inputDepartment = useRef();

    const [message, setMessage] = useState("");
    const [data, setData] = useState(null); //info que te entrega la API
    const [dataKPI, setDataKPI] = useState(null);

    const consultarTabla = (event) => {
        API.get("/candidato/" + inputLocation[1] + "/" + inputDepartment[1] + "/tabla",(response)=>{ // TODO: Corregir y pregunta al profe
            setData(response);
            console.log(response);
            if(response.message!="Candidatos encontrados")
                setMessage(response.message);
        }, (error)=>{
            setMessage(error.message)
        })
        API.get("/candidato/" + inputLocation[1] + "/" + inputDepartment[1] + "/kpi",(response)=>{ // TODO: Corregir y pregunta al profe 2
            setDataKPI(response);
            console.log(response);
            if(response.message!="Candidatos encontrados")
                setMessage(response.message);
        }, (error)=>{
            setMessage(error.message)
        })
    }


    return (
        <div class="dropdown">
            <Select ref={inputLocation} label={"Sucursal"} items={[{label: "-", value: "-"}, {label: "Monterrey", value: "Monterrey"}, {label: "Apodaca", value: "Apodaca"}, {label: "Guadalajara", value: "Guadalajara"}, {label: "Ciudad de México", value: "Ciudad de México"}]}/>
            <Select ref={inputDepartment} label={"Departamento"} items={[{label: "-", value: "-"},{label: "Mecatrónica", value: "Mecatrónica"}, {label: "Mecánica", value: "Mecánica"}, {label: "Electrónica", value: "Electrónica"}, {label: "Robótica", value: "Robótica"}, {label: "Industrial y Sistemas", value: "Industrial y Sistemas"}, {label: "Tecnologías de la Información", value: "Tecnologías de la Información"}, {label: "Administración", value: "Administración"}, {label: "Contaduría", value: "Contaduría"}, {label: "Recursos Humanos", value: "Recursos Humanos"}]}/>
            <Button onClick={consultarTabla} color={"success"}>Finalizar Registro</Button>
            {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Departamento
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Mecatrónica</a></li>
                    <li><a class="dropdown-item" href="#">Mecánica</a></li>
                    <li><a class="dropdown-item" href="#">Electrónica</a></li>
                    <li><a class="dropdown-item" href="#">Robótica</a></li>
                    <li><a class="dropdown-item" href="#">Industrial y Sistemas</a></li>
                    <li><a class="dropdown-item" href="#">Tecnologías de la Información</a></li>
                    <li><a class="dropdown-item" href="#">Administración</a></li>
                    <li><a class="dropdown-item" href="#">Contaduría</a></li>
                    <li><a class="dropdown-item" href="#">Recursos Humanos</a></li>
                </ul>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Sucursal</button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Monterrey</a></li>
                <li><a class="dropdown-item" href="#">Apodaca</a></li>
                <li><a class="dropdown-item" href="#">Guadalajara</a></li>
                <li><a class="dropdown-item" href="#">Ciudad de México</a></li>
                </ul> */}

        
        <title>candidato</title>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Rol.</th>
                    <th scope="col">Mem.</th>
                    <th scope="col">Per.</th>
                    <th scope="col">Coor.</th>
                    <th scope="col">Raz.</th>
                    <th scope="col">Ate.</th>
                </tr>
            </thead>
<tbody>
    <tr>
        <td>Carlos Morales</td>
        <td>Estudiante</td>
        <td>??</td>
        <td>??</td>
        <td>??</td>
        <td>??</td>
        <td>??</td>
    </tr>
    <tr>
        <td>Juan Daniel</td>
        <td>Coordinador</td>
        <td>??</td>
        <td>??</td>
        <td>??</td>
        <td>??</td>
        <td>??</td>
    </tr>
    <tr>
        <td>Ruben</td>
        <td>Director</td>
        <td>??</td>
        <td>??</td>
        <td>??</td>
        <td>??</td>
        <td>??</td>
    </tr>
    <tr>
        <td>Jesus Sebastian</td>
        <td>Maestro</td>
        <td>??</td>
        <td>??</td>
        <td>??</td>
        <td>??</td>
        <td>??</td>
    </tr>
    
</tbody>
        </table>
         
        
       
       
       
        
        </div>
    );
}

export default VistaAdmin