import React from "react";
import * as bootstrap from "bootstrap"

import axios from 'axios'
import CustomListDropDown from "../components/CustomListDropDown";

export default function VistaAdmin() {
    return(
        <>
            <CustomListDropDown/>
        </>
    )
}

//candidato/<mylocation>/<mydepartment>tabla

/*function VistaAdmin() {

    class VistaAdmin extends Component {
        componentDidMount() {
            axios
                .get("candidato/<mylocation>/<mydepartment>tabla")
                .then((response) => {
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
   
    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            <title>Bienvenido</title>  
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Rol.</th>
                    <th>Mem.</th>
                    <th>Per.</th>
                    <th>Coor.</th>
                    <th>Raz.</th>
                    <th>Ate.</th>
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

export default VistaAdmin*/