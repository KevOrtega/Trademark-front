import React from 'react'
import { Link } from "react-router-dom"
import './Link.css'

export default ({children, to}) => <Link to={to} className="link">{children}</Link>