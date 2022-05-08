import React, {useRef, useEffect, useState} from "react";
import * as bootstrap from "bootstrap"
import axios from 'axios'
import CustomListDropDown from "../components/CustomListDropDown";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import { API } from "../api/API";

import {Link} from "react-router-dom";

function VistaAdmin() {
    const inputLocation = useRef();
    const inputDepartment = useRef();

    const [message, setMessage] = useState("");
    const [data, setData] = useState([]); //info que te entrega la API
    const [dataKPI, setDataKPI] = useState([]);

    const consultarTabla = (event) => {
        API.get("/candidato/" + inputLocation.current.getValue() + "/" + inputDepartment.current.getValue() + "/tabla",(response)=>{ //Llama los datos de la tabla de la API
            setData(response);
            console.log(response);
            if(response.message!="Candidatos encontrados")
                setMessage(response.message);
        }, (error)=>{
            setMessage(error.message)
        })
        API.get("/candidato/" + inputLocation.current.getValue() + "/" + inputDepartment.current.getValue() + "/kpi",(response)=>{ //Llama los datos para los KPI
            setDataKPI(response);
            console.log(response);
            if(response.message!="Candidatos encontrados")
                setMessage(response.message);
        }, (error)=>{
            setMessage(error.message)
        })
    }

    const getScore = (partidas, game) =>{ // Consigue el puntaje de las partidas

        let partidasGame  = partidas.filter((info2)=>{
          return info2.minijuego==game;
        })
      
        if (partidasGame.length > 0){ //Si no tiene se muestra como N/A
          return partidasGame[0].score
        }
        return "N/A"
      
    }
    let contentKPI=null; //Creacion de las medias y modas en los KPI
    if(dataKPI){
        contentKPI=
        <div>
        Media Psicometrico: <b className="x-5">{dataKPI.media_psicometrico}</b> Media videojuego: <b className="x-5">{dataKPI.media_videojuego}</b> Moda Rol: <b className="x-5">{dataKPI.moda_carrera}</b>
        </div>
    }
    const DisplayData=data.map(  //Consigue los datos de los videojuegos para poder mostrarlos de acuerdo del nombre, user y profesion del participante
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

                    <td>{info.code}</td>

                    <td><Link target={"_blank"} to={"/profile/"+info.user_id} >Ir a perfil</Link></td>
                </tr>
            )
        }
    )

    return (
        <div className="m-4">
        <div className="d-flex justify-content-center"> 
            <Select ref={inputLocation} label={"Sucursal"} items={[{label: "-", value: "-"}, {label: "Monterrey", value: "Monterrey"}, {label: "Apodaca", value: "Apodaca"}, {label: "Guadalajara", value: "Guadalajara"}, {label: "Ciudad de México", value: "Ciudad de México"}]}/> {/* Da la opcion de filtrar los participantes dependiendo de su lugar */}
            <Select ref={inputDepartment} label={"Departamento"} items={[{label: "-", value: "-"},{label: "Mecatrónica", value: "Mecatrónica"}, {label: "Mecánica", value: "Mecánica"}, {label: "Electrónica", value: "Electrónica"}, {label: "Robótica", value: "Robótica"}, {label: "Industrial y Sistemas", value: "Industrial y Sistemas"}, {label: "Tecnologías de la Información", value: "Tecnologías de la Información"}, {label: "Administración", value: "Administración"}, {label: "Contaduría", value: "Contaduría"}, {label: "Recursos Humanos", value: "Recursos Humanos"}]}/> {/* Filtra participantes dependiendo de la profesion escogida */}
            <div className="mx-2"><Button onClick={consultarTabla} color={"success"}>Consultar</Button></div>

        </div>
        {contentKPI}
        
        <title>candidato</title>  {/* Titulo de la tabla*/}
            <table className="table table-striped">  {/* Creacion de la tabla */}
            <thead> {/* Los headers de la tabla  */}
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Tenacidad</th>
                    <th scope="col">Percepción</th>
                    <th scope="col">Memoria</th>
                    <th scope="col">Atención</th>
                    <th scope="col">CODIGO</th>
                    <th scope="col">LINK</th>
                </tr>
            </thead>
<tbody> {/* Codigo del cuerpo de la tabla*/}
    {DisplayData} {/* Muestra los datos dentro del cuerpo de la tabla */}
    
</tbody>
        </table>
         
        
       
       
       
        
        </div>
    );
}

export default VistaAdmin