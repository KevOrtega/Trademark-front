import React from 'react'
import classNames from 'classnames'
import './button.css'

export const ButtonSubmit = ({isDisabled, onClick, styles, children}) => isDisabled ?
<button disabled type="submit" onClick={onClick} className={classNames('button', styles ? styles : '')}>{children}</button> :
<button type="submit" onClick={onClick} className={classNames('button', styles ? styles : '')}>{children}</button>

export default ({onClick, styles, children}) => <button onClick={onClick} className={classNames('button', styles ? styles : '')}>{children}</button>