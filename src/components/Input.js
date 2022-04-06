import React, {useImperativeHandle, useState} from "react";

function InputElem(props, ref){
    const [value,setValue]=useState("");
    const onChange=(e)=>{
        setValue(e.target.value)//apunta
    }
    const getValue=()=>{//siempre escucha el value que tenga en vigila onChange
        return value
    }
    useImperativeHandle(ref, ()=>({
        getValue: getValue
    }))

    return(
        <React.Fragment>
        <div class="form-floating mb-3">
            <input onChange={onChange} className="form-control" placeholder={props.placeholder} type="email"/>
            <label for="floatingInput">{props.label}</label>
        </div>
        </React.Fragment>
    )
}
const Input = React.forwardRef(InputElem)
export default Input