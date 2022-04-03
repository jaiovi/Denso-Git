import { Link, useParams} from "react-router-dom"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Button from "../components/Button"
import Input from "../components/Input"

import React, { useState } from 'react';

function Profile(){
    const params = useParams(); //recuperar id del usuario

    const [showing, setShow] = useState(true);
    
    const data_examenes = [
        {name: 'Memoria', puntos:1000,},
        {name: 'Reflejos', puntos:500,},
        {name: 'Chido', puntos:1200},
    ];

    
    return(
    <div className="container">
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
                </ResponsiveContainer>
            </div>
            <div className={"col-sm"}>
                <h1>Profile de {params.userId}</h1>
                <h3>Candidato a Ingeniero</h3>
                <h3>23 años</h3>
                Para más información del reclutamiento, contacte con la página
                
                <div id={"ConfirmaDelete"}>
                </div>
            </div>
        </div>
        
            {
            //no jala de plano, preguntar profe asesoria
            showing?<div><Button color={"danger"}>Confirmo eliminar todos mis datos</Button></div>:null
            }
            <Button color={"red"} onUserClick={()=>setShow(!showing)}>Eliminar Cuenta</Button>
    </div>
    )
}

export default Profile