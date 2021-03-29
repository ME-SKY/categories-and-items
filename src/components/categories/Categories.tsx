import React from "react";
import './Categories.scss'
import {Link} from "react-router-dom";
import {RootStateOrAny, useSelector} from "react-redux";

function Categories() {
    const categories = useSelector((state: RootStateOrAny) =>  state.categories.categories);


    const categoriesArr = categories.map((cat: any) =>
        <div key={cat.id} className="category-item">
            <Link to={`categories/${cat.name}`}>{cat.name}</Link>
        </div>);

    return (
        <div className="categories">
            {categoriesArr}
        </div>
    )
}

export default Categories;
