// Dev's modules
import React from 'react'

// Header's modules
import { HeaderHome } from '../../molecules/Header'

// Main modules
import { HomeMain } from '../../molecules/Main'
import Container from '../../molecules/Container'

export default ({account, setAccount}) => <Container>
    <HeaderHome account={account} />
    <HomeMain account={account} setAccount={setAccount} />
</Container>