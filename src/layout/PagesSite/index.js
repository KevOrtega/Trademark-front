// dev's modules
import React from 'react'

// header
import Container from "../../molecules/Container"
import {HeaderPages} from '../../molecules/Header'

// main
import { PagesMain } from '../../molecules/Main'

// requests
import { getAllCompanies } from "../../Requests.js"

export default ({account}) => <Container>
    <HeaderPages account={account} />
    <PagesMain companies={getAllCompanies()} />
</Container>