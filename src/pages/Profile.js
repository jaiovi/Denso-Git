import { Link, useParams} from "react-router-dom"
import React, { useEffect, useState, useRef } from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar} from 'recharts';
import Button from "../components/Button"
import Input from "../components/Input"

import { API } from "../api/API"
import { render } from "@testing-library/react";

function Profile(){

    //INICIO CABECERA
    const params = useParams(); //recuperar id del usuario

    const [data, setData] = useState(null);
    const [dataPsico, setDataPsico] = useState(null);
    const [dataMini, setDataMini] = useState(null);
    //const { data } = this.state;

    const [show, toggle] = useState(false);
    const functionToggle = () =>{
        toggle(!show)
        console.log(show)
    }
    const[show2, toggle2]=useState(false);

    const nomUsuario="";
    useEffect(()=>{
        API.get("/user",(response)=>{
            console.log(response)
            nomUsuario=response.name;
        })
    },[]);
    
    useEffect(()=>{
        API.get("/candidato/"+params.userId,(response)=>{
            setData(response);
        })
        API.get("/user/"+params.userId+"/minigame",(response)=>{
            setDataMini(response);
        })
        API.get("/user/"+params.userId+"/psicometrico",(response)=>{
            setDataPsico(response);
        })
    },[]);

    //deletes
    const [message, setMessage] = useState("");
    const deleteUser = (event) => {
        setMessage("");
        API.get("/delete/user/"+params.userId,(response)=>{
            setMessage(response.message);
        }, (error)=>{
            setMessage(error.message)
        })
    }
    const deleteTests = (event) => {
        setMessage("");
        API.get("/delete/tests/"+params.userId,(response)=>{
            setMessage(response.message);
        }, (error)=>{
            setMessage(error.message)
        })
    }
    
    let content=null;
    if(data && dataPsico && dataMini){
        console.log(dataPsico.data);
        console.log(dataMini.data);
        content =
        <div>
            <h1>Profile de {data.data.name + " " + data.data.last_name}</h1>
            <h3>Candidato a {data.data.role}</h3>
            <b>Cumpleaños el {data.data.birthDate.slice(0,16)}</b>
            <p className="t-3">Para más información del reclutamiento, contacte con la página</p>
        </div>
    }

    //render(){
    //const { data } = this.state;
    return(
    <div className="container m-4 mx-auto">
        <div className="row">
            <div className="col-sm">
                <ResponsiveContainer width="100%" height="100%">
                
                    <RadarChart height={300} width={500} 
                        outerRadius="80%" data={dataPsico}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="seccionPsico" />
                        <PolarRadiusAxis />
                        <Radar dataKey="puntos" stroke="green" 
                            fill="green" fillOpacity={0.5} />
                    </RadarChart>
                
                </ResponsiveContainer>
            </div>
            
            <div className={"col-sm"}>
                {content}
                <div>
                    
                    <BarChart width={500} height={300} data={dataMini}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="minijuego" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="score" fill="#8884d8" />
                    </BarChart>
                    
                </div>
                
            </div>
        </div>

        <div id={"ConfirmaDelete"} className="d-flex justify-content-center">
            <Button onClick={functionToggle}>Eliminar Cuenta</Button>
            {show ? <>
            <Button color={"danger"} onClick={deleteUser}>Confirmo eliminar todos mis datos</Button>
            </>:null
            }
            
        </div>
        <div className="d-flex m-4 justify-content-center">
            <Button color={"success"} onClick={ ()=>toggle2(!show)}>Reiniciar tests</Button>
            {show2 ? <>
            <Button color={"danger"}>Confirmo eliminar psicometrico+minijuegos</Button>
            </>:null
            }
        </div>
        <div className="text-danger">{message ? message:null}</div>
        <p>
            <i className="d-flex justify-content-center m-2">En caso que aparezca página en blanco y está corriendo el server: la id es de un manager y no un candidato</i>
        </p>
    </div>
    )
}

export default Profile