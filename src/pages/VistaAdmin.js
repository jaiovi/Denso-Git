import React from "react";
import * as bootstrap from "bootstrap"
import axios from 'axios'
import CustomListDropDown from "../components/CustomListDropDown";

/*export default function VistaAdmin() {
    return(
        <>
            <CustomListDropDown/>
        </>
    )
}*/

//candidato/<mylocation>/<mydepartment>tabla

function VistaAdmin() {

    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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

export default VistaAdmin