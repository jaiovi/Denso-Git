import { useParams } from "react-router-dom"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Profile(){
    const params = useParams();
    
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
                <h3>Rol: Ingeniero</h3>
            </div>
        </div>
    </div>
    )
}

export default Profile