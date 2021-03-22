import React from 'react'
import Button from '../../molecules/Button'
import Images from "../../atoms/Images"
import Heading from '../../atoms/Heading'
import Text from '../../atoms/Text'
import './pages-content.css'

export default ({companies}) => <div className="pages-content">
    {companies.map((company, index) => <div className="pages-content__page" key={`page-${index}`}>
            <Button styles="button-bg-page">
                <Images src={company.image} />
            </Button>
            <div className="page-data">
                <Heading>{company.title}</Heading>
                <Text>{company.work}</Text>
                <Text>{company.schedule}</Text>
                {company.contact.map((contact, index) => <Text key={`contact-${index}`}>{contact}</Text>)}
            </div>
        </div>)}
</div>