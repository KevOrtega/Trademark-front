import React from 'react'
import classNames from "classnames"
import './container.css'

export const Message = ({children, styles, isOn}) => {
    let show
    if(isOn !== null) show = isOn ? true : false
    else show = false

    return<div className={classNames('message', styles, show ? 'message--show' : '')}>{children}</div>
}

export default ({children, styles}) => <div className={classNames(styles)}>{children}</div>