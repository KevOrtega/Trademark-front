// dev's modules
import React, { useState } from 'react'
import classNames from 'classnames'
import "./carousel.css"

// Carousel components
import Container from '../Container'
import Images from '../../atoms/Images'
import Button from '../Button'

export default ({images, styles}) => {
    const [imageActiveIndex, setimageActiveIndex] = useState(1)
    const [isPrevButtonOn, setIsPrevButtonOn] = useState(true)
    const [isNextButtonOn, setIsNextButtonOn] = useState(true)


    const getStyles = (index) => {
        if(index === imageActiveIndex) return "carousel-img--focus"
        else if(
            index === imageActiveIndex - 1 || 
            index === imageActiveIndex + 1 || 
            index === 2 && imageActiveIndex === 0 ||
            index === images.length - 3 && imageActiveIndex === images.length - 1) return ''
        else return "carousel-img--hide"
    }

    const changeImageActive = (i) => {
        if(i < 0 || i === images.length) return null

        i === 0 ? setIsPrevButtonOn(false) :
        setIsPrevButtonOn(true)

        i === images.length - 1 ? setIsNextButtonOn(false) :
        setIsNextButtonOn(true)

        setimageActiveIndex(i)
        console.log(imageActiveIndex)
    }

    const carousel = images.length > 3 ? <Container styles={classNames('carousel', styles)}>
        <Button styles={classNames("button-left", !isPrevButtonOn ? 'button--hide' : '')} onClick={() => changeImageActive(imageActiveIndex - 1)}></Button>
        {images.map((image, i) => <Images key={'image'+i} src={image} type={classNames("carousel-img", getStyles(i))} />)}
        <Button styles={classNames("button-right", !isNextButtonOn ? 'button--hide' : '')} onClick={() => changeImageActive(imageActiveIndex + 1)}></Button>
    </Container> :
    <Container styles={classNames('carousel', styles)}>
        {images.map((image, i) => <Images key={'image'+i} src={image} type={classNames("carousel-img", getStyles(i))} />)}
    </Container>

    return carousel
}