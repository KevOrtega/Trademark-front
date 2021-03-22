import React from 'react'
import './menu.css'
import classNames from 'classnames'

export default ({children, styles}) => <ul className={classNames('menu', styles ? styles : '')}>{children}</ul>