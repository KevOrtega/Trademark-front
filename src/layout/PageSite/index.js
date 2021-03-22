// dev's modules
import React, { useState } from 'react'
import { getCompany } from "../../Requests"

// header
import { HeaderPage } from '../../molecules/Header'

// main
import Container from "../../molecules/Container" 
import { PageMain } from '../../molecules/Main'

export default ({ request_id, page_scrollY }) => {
    const [companyId, setCompanyId] = useState(null)
    
    const setPageCompany = (id) => {
        if(companyId === null) setCompanyId(id)
        return getCompany(companyId)
    }

    return <Container>
        <HeaderPage />
        <PageMain company={setPageCompany(request_id)} page_scrollY={page_scrollY} />
    </Container>
}