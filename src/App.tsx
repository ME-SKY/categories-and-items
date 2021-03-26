import React, {useEffect, useState} from 'react';
import {hot} from 'react-hot-loader/root';
import Categories from "./categories/Categories";
import Category from "./category/Category"
import {Link, Redirect} from "react-router-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    useRouteMatch,
    useParams,
    withRouter,
    useHistory
} from "react-router-dom";
import CategoryElement from "./category-element/CategoryElement";

//@ts-ignore
function App() {

    // useEffect(() => {
    //
    // }, [history]);
    return (
        <div className="main">
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <Redirect to="/categories"/>
                            )
                        }}
                    />
                    <Route exact path="/categories" component={Categories}/>
                    <Route exact path="/:categoryUrl" component={Category}/>
                    <Route exact path="/:categoryUrl/:categoryElementUrl" component={CategoryElement}/>
                </Switch>
            </Router>
        </div>
    );
}


export default hot(App);
