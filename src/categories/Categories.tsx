import React from "react";
import './Categories.scss'
// import BrowserLi
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


interface Category {
    id: number,
    name: string,
    url: string
}

export const exampleCategories: Category[] = [
    {
        id: 1,
        name: 'Cat1',
        url: 'somename1'
    },
    {
        id: 2,
        name: 'Cat2',
        url: 'somename2'
    },
    {
        id: 3,
        name: 'Cat3',
        url: 'somename3'
    },
    {
        id: 4,
        name: 'Cat4',
        url: 'somename4'
    },
    {
        id: 5,
        name: 'Cat5',
        url: 'somename5'
    }
];

function Categories() {

    const categories = exampleCategories.map(cat =>
        <div key={cat.id} className="category-item">
            <Link to={`/${cat.url}`}>{cat.name}</Link>
        </div>);

    return (
        <div className="categories">
            {categories}
        </div>
    )
}

export default Categories;
