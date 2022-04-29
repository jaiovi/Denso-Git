import React, {useImperativeHandle, useState} from 'react'

// esto ya se puede exportar en como un elemento <Button/>
function SelectElem(props, ref){
    const [value,setValue]=useState("");
    const onChange=(e)=>{
        setValue(e.target.value)//apunta
        props.onChange(e.target.value) // El valor que el usuario eligió
    }
    const getValue=()=>{//siempre escucha el value que tenga en vigila onChange
        return value
    }
    useImperativeHandle(ref, ()=>({
        getValue: getValue
    }))

    return (
        <React.Fragment>
            <select onChange={onChange} className="form-select" aria-label="Default select example">
                <option selected>{props.label}</option>
                <option value="1">{props.item}</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </React.Fragment>
    )
}
const Select = React.forwardRef(SelectElem);
export default Select