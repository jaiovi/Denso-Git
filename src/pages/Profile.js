import { Link, useParams} from "react-router-dom"
import React, { useEffect, useState, useRef } from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar} from 'recharts';
import Button from "../components/Button"
import Input from "../components/Input"

import { API } from "../api/API"

function Profile(){
    const params = useParams(); //recuperar id del usuario

    const [data, setData] = useState();
    const eachData = {};
    //const { data } = this.state;

    const [show, toggle] = useState(false);
    const functionToggle = () =>{
        toggle(!show)
        console.log(show)
    }

    const nomUsuario="";
    useEffect(()=>{
        API.get("/user",(response)=>{
            console.log(response)
            nomUsuario=response.name;
        })

    },[]);
    const nombre =  useRef()
    //const [name, setName] = useState(null);
    useEffect(()=>{
        API.get("/candidato/2",(response)=>{
            setData(response);
            eachData=response;
            console.log(eachData);

            //nombre.current.value = response.data.name + " " + response.data.last_name;
        })
    },[]);
    
    const data_examenes = [
        {seccionPsico: 'Memoria', puntos:1000,},
        {seccionPsico: 'Reflejos', puntos:500,},
        {seccionPsico: 'Chido', puntos:1200},
        {seccionPsico: 'ReChido', puntos:1200}
    ];
    const data_minijuegos = [
        {minijuego: 'Survive', score:1000,},
        {minijuego: 'Refldededejos', score:500,},
        {minijuego: 'Chdededeido', score:1200},
        {minijuego: 'Re32r32Chido', score:1200},
    ];

    
    return(
    <div className="container m-4 mx-auto">
        <div className="row">
            <div className="col-sm">
                <ResponsiveContainer width="100%" height="100%">
                
                    <RadarChart height={300} width={500} 
                        outerRadius="80%" data={data_examenes}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="seccionPsico" />
                        <PolarRadiusAxis />
                        <Radar dataKey="puntos" stroke="green" 
                            fill="green" fillOpacity={0.5} />
                    </RadarChart>
                
                </ResponsiveContainer>
            </div>
            
            <div className={"col-sm"}>
                data.map((eachData) => (
                <div>
                    <h1>Profile de {}</h1>
                    <h3>Candidato a Ingeniero</h3>
                    <b>Cumpleaños el xxxx/xx/xx</b>
                    <p className="t-3">Para más información del reclutamiento, contacte con la página</p>
                </div>
                )
                
                <div>
                    
                    <BarChart width={500} height={300} data={data_minijuegos}>
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
            <Button color={"warning"} onClick={functionToggle}>Eliminar Cuenta</Button>
            {show ? <>
            <Button color={"danger"}>Confirmo eliminar todos mis datos</Button>
            </>:null
            }
        </div>
            
    </div>
    )
}

export default Profile