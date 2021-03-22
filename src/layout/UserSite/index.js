// dev's modules
import React, { useState } from 'react'
import { Redirect } from "react-router-dom"

// header
import Container from "../../molecules/Container"
import { HeaderAccount } from '../../molecules/Header'

// main
import { UserMain } from '../../molecules/Main'

// requests
import { getUser, updateUser } from "../../Requests"
import Img from '../../assets/Mujer-Bonita.jpg'

export default ({account, setAccount}) => {
    const [avatar, setAvatar] = useState(account && account.avatar ? account.avatar : null)

    const onChangeUserLogo = (e) => {
        const img = e.target.files[0]

        const url_img = URL.createObjectURL(img)

        updateUser(account.email, account.password, url_img)
        setAccount(getUser(account.email, account.password))
        setAvatar(account.avatar)
    }

    return account !== null ? <Container>
        <HeaderAccount />
        <UserMain account={account} avatar={avatar} onChangeUserLogo={onChangeUserLogo} setAccount={setAccount} />
    </Container> : <Container>
        <HeaderAccount />
        <UserMain account={account} avatar={avatar} onChangeUserLogo={onChangeUserLogo} setAccount={setAccount} />
        <Redirect to='/' />
    </Container>
}