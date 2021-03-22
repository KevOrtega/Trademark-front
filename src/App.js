import React, { useState } from 'react'
import { BrowserRouter as Router, Route, useParams} from "react-router-dom"
import { CSSTransition } from 'react-transition-group'
import './Requests.js'
import HomeSite from './layout/HomeSite'
import PageSite from './layout/PageSite'
import PagesSite from './layout/PagesSite'
import FormSite from './layout/FormSite'
import UserSite from './layout/UserSite'

const routes = [{
    path: '/',
    Component: HomeSite,
    style: ''
},
{
    path: '/pages',
    Component: PagesSite,
    style: 'left-'
},
{
    path: '/form',
    Component: FormSite,
    style: 'right-'
},
{
    path: '/pages/:id',
    Component: PageSite,
    style: 'right-'
},
{
    path: '/user',
    Component: UserSite,
    style: 'right-'
}]

const GetComponent = ({match, style, Component, account, setAccount}) => {
    const  [ scrollY, setScrollY ] = useState(0)
    const { id } = useParams()

    return <CSSTransition
    in={match !== null}
    timeout={1000}
    classNames={style}
    unmountOnExit>
        {Component === PageSite ? 
        <div className="page" onScroll={(e) => setScrollY(e.target.scrollTop)}>
            <Component request_id={id} page_scrollY={scrollY} account={account} setAccount={setAccount} />
        </div> :
        <div className="page">
            <Component request_id={id} account={account} setAccount={setAccount} />
        </div>}
    </CSSTransition>
}

export default () => {
    const  [ account, setAccount ] = useState(null)
    return <Router>
        {routes.map(({ path, Component, style}) => <Route key={path} exact path={path}>
            {({match}) => <GetComponent 
            match={match} 
            style={style} 
            Component={Component} 
            account={account} setAccount={setAccount} />}
        </Route>)}
    </Router>
}
