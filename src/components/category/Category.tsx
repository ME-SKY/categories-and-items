import React, {useEffect} from "react";
import {Link, useHistory, useParams} from 'react-router-dom'
import './Category.scss'
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {getCategories, getCategory, setError} from "../../store/actions";
import {ICategory} from "../../interfaces/ICategory";

function Category() {
    let {category}: any = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const categories = useSelector((state: RootStateOrAny) => state.categories.categories);
    const categoryWithElements = useSelector((state: RootStateOrAny) => state.categories.currentCategory);

    useEffect(() => {
        (categories.length === 0) && dispatch(getCategories());

        if (categories.length > 0) {

            const findedCat = categories.find((cat: ICategory) => cat.id == category || cat.name === category);
            const categoryUrl = findedCat ? findedCat.url : category;
            dispatch(getCategory(categoryUrl,  (res: any) => {
                dispatch(setError({
                        errorStatus: res.status,
                        url: res.url,
                        errorText: res.statusText
                    })
                );
                history.push('/not-found')
            }));
        }

    }, [category, categories]);


    // @ts-ignore
    const categoryElements: ICategory = (categoryWithElements && categoryWithElements.elements) && categoryWithElements.elements.map(item =>
        <div className="element" key={item.id}>
            <div className="element-name">
                <Link to={`/categories/${categoryWithElements.name}/${item.name}`}>{item.name}</Link>
            </div>
        </div>
    );

    return (
        <div className="category">
            <div className="category-info">
                <div className="category-name">
                    <h3>
                        {categoryWithElements.name}
                    </h3>

                </div>
                <div className="short-description">
                    {categoryWithElements.shortDescription}
                </div>
                <div className="description">
                    {categoryWithElements.description}
                </div>
            </div>

            <div className="category-elements">
                {categoryElements}
            </div>

        </div>
    )
}

export default Category;
