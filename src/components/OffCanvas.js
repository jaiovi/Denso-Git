import React, { useEffect, useImperativeHandle, useState } from "react";
import * as bootstrap from "bootstrap";

let offcanvasId = 0

function OffcanvasEl(props, ref){

    const [id, setId] = useState(0)

    useEffect(() => {
        offcanvasId = offcanvasId + 1
        setId("offcanvasid-" + offcanvasId)
        // var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
        // var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
        //     return  bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl)
        // })

        const element = document.getElementById(id)
        bootstrap.Offcanvas.getOrCreateInstance(element)

    },[])

    const toggle = () =>{
        const element = document.getElementById(id)
        let oncanvasElement = bootstrap.Offcanvas.getOrCreateInstance(element)
        oncanvasElement.toggle()
    }

    useImperativeHandle(ref, ()=>({
        toggleOffcanvas: toggle
    }))

    return (
        <div>
            <div className="offcanvas offcanvas-top" tabIndex="-1" id={id} aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasTopLabel">{props.title}</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
        </div>
    )

}

const Offcanvas = React.forwardRef(OffcanvasEl)
export default Offcanvas;