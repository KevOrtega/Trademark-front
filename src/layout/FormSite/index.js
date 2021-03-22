// dev's modules
import React, { useState } from 'react'
import { Redirect } from "react-router-dom"

// header
import { HeaderAccount } from '../../molecules/Header'

// main
import Container from "../../molecules/Container"
import { FormMain } from '../../molecules/Main'

export default ({account, setAccount}) => {
    // Show log in or sign in
    const [isUserLogging, setIsUserLogging] = useState(true)
    
    // Disappears when there's an account on
    if(account === null) return <Container>
        <HeaderAccount />
        <FormMain isUserLogging={isUserLogging} setIsUserLogging={setIsUserLogging} setAccount={setAccount} />
    </Container>
    else return <Container>
        <HeaderAccount />
        <FormMain isUserLogging={isUserLogging} setIsUserLogging={setIsUserLogging} setAccount={setAccount} />
        <Redirect to='/' />
    </Container>
}