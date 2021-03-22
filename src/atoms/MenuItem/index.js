import React from 'react'
import classNames from 'classnames'
import './menu-item.css'

export default ({styles, children}) => <li className={classNames('menu-item', styles ? styles : '')}>{children ? children : ''}</li>