import React from "react";
import {useParams, withRouter} from "react-router";

function CategoryElement() {

    //@ts-ignore
    let {categoryUrl, categoryElementUrl} = useParams();

    return (
        <div className="category-element">
            {categoryUrl} {categoryElementUrl}
        </div>
    )

}

export default CategoryElement;
