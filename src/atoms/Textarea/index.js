import React from 'react'
import './textarea.css'
import classNames from "classnames"

export default ({autocomplete = "off", placeholder, styles}) => <textarea 
autoComplete={autocomplete}
className={classNames('textarea', styles ? styles : '')}
placeholder={placeholder}
maxLength='160'>skerex</textarea>