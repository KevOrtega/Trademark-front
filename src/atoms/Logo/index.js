import React from 'react'
import classNames from 'classnames'
import './logo.css'
import LogoImg from '../../assets/logo.png'

export default ({styles}) => <img src={LogoImg} alt="logo" className={classNames('logo', styles ? styles : '')} title="click to go home" />