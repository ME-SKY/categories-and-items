import React, {useEffect} from 'react';
import {hot} from 'react-hot-loader/root';
import Categories from "./components/categories/Categories";
import Category from "./components/category/Category"
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import CategoryElement from "./components/category-element/CategoryElement";
import {useDispatch} from 'react-redux'
import {getCategories, setError} from "./store/actions";
import NotFound from "./components/not-found/NotFound";

// @ts-ignore
function App() {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories( (res: any) =>{
                dispatch(setError({
                    errorStatus: res.status,
                    url: res.url,
                    errorText: res.statusText})
                );
                history.push('/not-found')
            }
        ));
    }, []);

    return (
        <div className="main">
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
                <Route exact path="/categories/:category" component={Category}/>
                <Route path="/categories/:category/:element" component={CategoryElement}/>
                <Route component={NotFound}/>
            </Switch>

        </div>
    );
}

export default hot(App);
