import React from 'react';

// esto ya se puede exportar en como un elemento <Button/>
function Button(props){

    const onUserClick = () => {
        console.log("Hiciste click en el botón")

        props.onClick && props.onClick()
    }

    return (
        <React.Fragment>
            <button onClick={onUserClick} className={"shadow-lg rounded-0 btn btn-" + props.color}>
                {props.children}
            </button>
        </React.Fragment>
    )
}

export default Button