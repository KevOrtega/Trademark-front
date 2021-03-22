import React from 'react'
import './sites-logos.css'
import Pages from '../../assets/pages_icon.png'
import Pager from '../../assets/pager-solid.svg'
import SignIn from '../../assets/sign-in-alt-solid.svg'
import LogOut from '../../assets/sign-out-alt-solid.svg'

export default ({type}) => {
        let obj
        if(type === "pages") obj = <object data={Pages} className="sites-logos" alt="logo"></object>
        else if(type === "pager") obj = <object data={Pager} className="sites-logos" alt="logo"></object>
        else if(type === "sign in") obj = <object data={SignIn} className="sites-logos" alt="logo"></object>
        else obj = <object data={LogOut} className="sites-logos" alt="logo"></object>

        return obj
}