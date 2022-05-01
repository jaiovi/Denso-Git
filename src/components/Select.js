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

                {props.items.map((option)=>{
                    return (
                        <option value={option.value}>{option.label}</option>
                    )
                })}
            </select>
            {/* <label for="floatingInput">{props.label}</label> */}
        </React.Fragment>
    )
}
const Select = React.forwardRef(SelectElem);
export default Select