import React from 'react'
import './label.css'
import classNames from "classnames"

export default ({children, of, styles}) => <label 
htmlFor={of} 
className={classNames('label', styles ? styles : '')}>
    {children}
</label>