import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
///candidato/<mylocation>/<mydepartment>tabla

function VistaAdmin() {
    const [dropdown, setDropdown]=useState(false);

    const abrirCerrarDropdown=()=>{
        setDropdown(!dropdown);
    }
    return (
        <div className="VistaAdmin">
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>   
            <DropdownToggle>
                Dropdown Ejemplo
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Accion 1</DropdownItem>
                <DropdownItem>Accion 2 </DropdownItem>
                <DropdownItem>Accion 3</DropdownItem>
                <DropdownItem>Accion 4</DropdownItem>
            </DropdownMenu>

            </Dropdown>
        </div>
    /*return(
        <>
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
        </>*/
    );
}

export default VistaAdmin