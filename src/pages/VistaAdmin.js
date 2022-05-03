import React, {useRef, useEffect, useState} from "react";
import * as bootstrap from "bootstrap"
import axios from 'axios'
import CustomListDropDown from "../components/CustomListDropDown";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import { API } from "../api/API";

import {Link} from "react-router-dom";

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
    const [data, setData] = useState([]); //info que te entrega la API
    const [dataKPI, setDataKPI] = useState(null);

    const consultarTabla = (event) => {
        API.get("/candidato/" + inputLocation.current.getValue() + "/" + inputDepartment.current.getValue() + "/tabla",(response)=>{ // TODO: Corregir y pregunta al profe
            setData(response);
            console.log(response);
            if(response.message!="Candidatos encontrados")
                setMessage(response.message);
        }, (error)=>{
            setMessage(error.message)
        })
        API.get("/candidato/" + inputLocation.current.getValue() + "/" + inputDepartment.current.getValue() + "/kpi",(response)=>{ // TODO: Corregir y pregunta al profe 2
            setDataKPI(response);
            console.log(response);
            if(response.message!="Candidatos encontrados")
                setMessage(response.message);
        }, (error)=>{
            setMessage(error.message)
        })
    }

    const getScore = (partidas, game) =>{

        let partidasGame  = partidas.filter((info2)=>{
          return info2.minijuego==game;
        })
      
        if (partidasGame.length > 0){
          return partidasGame[0].score
        }
        return "N/A"
      
    }
    const DisplayData=data.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.user_id}</td>
                    <td>{info.name + " "}<b>{info.last_name + " "}</b></td>
                    <td>{info.role}</td>
                    
                    <td> {getScore(info.partidas, "Survive")} </td>
                    <td> {getScore(info.partidas, "Guacamole")} </td>
                    <td> {getScore(info.partidas, "Simon Dice")} </td>
                    <td> {getScore(info.partidas, "Pong")} </td>

                    <td>{info.aplicantes}</td>
                    <td>{info.code}</td>

                    <td><Link target={"_blank"} to={"/profile/"+info.user_id} >Ir a perfil</Link></td>
                </tr>
            )
        }
    )

    return (
        <div className="m-4">
        <div className="d-flex justify-content-center">
            <Select ref={inputLocation} label={"Sucursal"} items={[{label: "-", value: "-"}, {label: "Monterrey", value: "Monterrey"}, {label: "Apodaca", value: "Apodaca"}, {label: "Guadalajara", value: "Guadalajara"}, {label: "Ciudad de México", value: "Ciudad de México"}]}/>
            <Select ref={inputDepartment} label={"Departamento"} items={[{label: "-", value: "-"},{label: "Mecatrónica", value: "Mecatrónica"}, {label: "Mecánica", value: "Mecánica"}, {label: "Electrónica", value: "Electrónica"}, {label: "Robótica", value: "Robótica"}, {label: "Industrial y Sistemas", value: "Industrial y Sistemas"}, {label: "Tecnologías de la Información", value: "Tecnologías de la Información"}, {label: "Administración", value: "Administración"}, {label: "Contaduría", value: "Contaduría"}, {label: "Recursos Humanos", value: "Recursos Humanos"}]}/>
            <div className="mx-2"><Button onClick={consultarTabla} color={"success"}>Consultar</Button></div>

        </div>
        
        <title>candidato</title>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Tenacidad</th>
                    <th scope="col">Percepción</th>
                    <th scope="col">Memoria</th>
                    <th scope="col">Atención</th>
                    <th scope="col">MANAGER</th>
                    <th scope="col">CODIGO</th>
                    <th scope="col">LINK</th>
                </tr>
            </thead>
<tbody>
    {DisplayData}
    
</tbody>
        </table>
         
        
       
       
       
        
        </div>
    );
}

export default VistaAdmin