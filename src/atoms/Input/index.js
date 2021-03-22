import React from 'react'
import './input.css'
import classNames from "classnames"

export const InputFiles = ({name, onChange}) => <input 
className="input-files"
name={name}
onChange={onChange} 
type="file" />

export default ({handleChange, inputState, name, placeholder, styles}) => {
    let state

    if(inputState !== null) state = inputState ? 'input--success' : 'input--error'
    else state = ''

    return <input name={name} 
    placeholder={placeholder}
    className={classNames('input', styles ? styles : '', state)}
    onChange={handleChange}/>
}