import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import Filter from '../Components/Filter'
//import Footer from '../Components/Footer'
import Nav from '../src/Components/Nav'
//import Search from '../Components/Search'
import Category from './Layouts/Category'
import Catgy from './Layouts/Catgy'
import moduleName from 'module'
import Favourite from './Components/Favourite'
import Home from './Layouts/Home'
import Details from './Layouts/Details'
const Routes = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path='/category'>
                    <Catgy />
                </Route>
                <Route path='/favourite'>
                    <Favourite />
                </Route>
                <Route path='/details/:id'>
                    <Details />
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
