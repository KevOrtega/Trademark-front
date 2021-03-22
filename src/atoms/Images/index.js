import React from 'react'
import './images.css'
import classNames from 'classnames'

export const ImageParallax = ({src, type, page_scrollY}) => {
    document.documentElement.style.setProperty('--page-parallax', page_scrollY < 600 ? -page_scrollY / 60 + 'em' : -10 + 'em')

    return <img alt="image" className={classNames(`image ${type ? type : ''}`)} src={src} />
}

export default ({src, type}) => <img alt="image" className={classNames(`image ${type ? type : ''}`)} src={src} />