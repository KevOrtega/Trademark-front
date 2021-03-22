import React from 'react'
import classNames from 'classnames'
import './heading.css'

export default ({type, children, styles}) => type === 'h1' ? 
<h1 className='heading heading-h1'>{children}</h1> : 
<h2 className={classNames('heading', styles ? styles : '')}>{children}</h2>