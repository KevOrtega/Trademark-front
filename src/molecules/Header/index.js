import React from 'react'
import './header.css'
import Logo from '../../atoms/Logo'
import Menu from '../Menu'
import MenuItem from '../../atoms/MenuItem'
import Link from '../Link'
import Heading from '../../atoms/Heading'

export const HeaderHome = ({account}) => {
    if(account === null) return <header className="header header-home">
        <Link to="/"><Logo /></Link>
        <Menu styles="header__menu">
            <MenuItem styles="header__menu-item"><Link to="/pages">páginas</Link></MenuItem>
            <MenuItem styles="header__menu-item"><Link to="/form">iniciar sesión</Link></MenuItem>
        </Menu>
        <Heading type="h1">trademark</Heading>
    </header>
    else return <header className="header header-home">
        <Link to="/"><Logo /></Link>
        <Menu styles="header__menu">
            <MenuItem styles="header__menu-item"><Link to="/pages">páginas</Link></MenuItem>
            <MenuItem styles="header__menu-item"><Link to="/user">{account.name}</Link></MenuItem>
        </Menu>
        <Heading type="h1">trademark</Heading>
    </header> 
}

export const HeaderPages = ({account}) => account === null ? <header className="header">
    <Link to="/"><Logo /></Link>
    <Menu styles="header__menu">
        <MenuItem styles="header__menu-item"><Link to="/form">iniciar sesión</Link></MenuItem>
    </Menu>
</header> : <header className="header">
    <Link to="/"><Logo /></Link>
    <Menu styles="header__menu">
        <MenuItem styles="header__menu-item"><Link to="/user">{account.name}</Link></MenuItem>
    </Menu>
</header>

export const HeaderAccount = () => <header className="header">
    <Link to="/"><Logo /></Link>
    <Menu styles="header__menu">
        <MenuItem styles="header__menu-item"><Link to="/pages">páginas</Link></MenuItem>
    </Menu>
</header>

export const HeaderPage = () => <header className="header">
    <Link to="/"><Logo /></Link>
</header>