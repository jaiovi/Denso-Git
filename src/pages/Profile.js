import { Link, useParams} from "react-router-dom"
import React, { useEffect, useState } from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, /* RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,*/ Legend, ResponsiveContainer } from 'recharts';
import Button from "../components/Button"
import Input from "../components/Input"

function Profile(){
    const params = useParams(); //recuperar id del usuario

    const [show, toggle] = useState(false);
    const functionToggle = () =>{
        toggle(!show)
    }



    
    const data_examenes = [
        {name: 'Memoria', puntos:1000,},
        {name: 'Reflejos', puntos:500,},
        {name: 'Chido', puntos:1200},
        {name: 'ReChido', puntos:1200}
    ];

    
    return(
    <div className="container m-4">
        <div className="row">
            <div className="col-sm">
                <ResponsiveContainer width="100%" height="100%">
                
                <BarChart width={500} height={300} data={data_examenes}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="puntos" fill="#8884d8" />
                </BarChart>
                {/*
                <RadarChart outerRadius={90} width={730} height={300} data={data_examenes}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={0} domain={[0, 3000]} />
                    <Radar name="Puntos" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Legend />
                </RadarChart>
                */}
                </ResponsiveContainer>
            </div>
            <div className={"col-sm"}>
                <h1>Profile de {params.userId}</h1>
                <h3>Candidato a Ingeniero</h3>
                <h3>23 años</h3>
                Para más información del reclutamiento, contacte con la página
                
                
                
            </div>
        </div>

        <div id={"ConfirmaDelete"}>
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