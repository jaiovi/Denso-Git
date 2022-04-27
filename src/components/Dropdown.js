import React from 'react'

// esto ya se puede exportar en como un elemento <Button/>
function Dropdown(props){

    const onUserClick = () => {
        console.log("Hiciste click en el dropdown")

        props.onClick && props.onClick()
    }

    return (
        <React.Fragment>
            <div className="dropdown">
                <button onClick={onUserClick} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.label}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">{props.item}</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Dropdown