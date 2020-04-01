import React from "react"
import {BrowserRouter as Router, Route, Link, Switch, BrowserRouter, RouteComponentProps} from "react-router-dom";

//PAGES
import IndexPage from './pages/IndexPage'
import FlashCardPage from "./pages/FlashCardPage";

const Routes = () => (

        <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/home" component={IndexPage} />
            <Route path="/deck/:deckId" component={FlashCardPage} />
        </Switch>

);

export default Routes;