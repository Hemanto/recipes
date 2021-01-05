import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import Filter from '../Components/Filter'
//import Footer from '../Components/Footer'
import Nav from '../src/Components/Nav'
//import Search from '../Components/Search'
import CatDetails from '../src/Layouts/CatDetails'
import Favourite from './Components/Favourite'
import Home from './Layouts/Home'
const Routes = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path='/category'>
                    <CatDetails />
                </Route>
                <Route path='/favourite'>
                    <Favourite/>
                </Route>
                <Route path='/ '>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
