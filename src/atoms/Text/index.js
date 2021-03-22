import React from 'react'
import './text.css'
import classNames from "classnames";

export default ({type, children, styles}) => <p className={classNames('text', type ? `text-${type}` : 'text-black', styles ? styles : '')}>{children ? children : ''}</p>