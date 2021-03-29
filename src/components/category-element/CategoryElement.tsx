import React, {useEffect} from "react";
import {useHistory, useParams} from "react-router";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {getCategories, getCategory, getElement, setError} from "../../store/actions";
import './CategoryElement.scss'
import {ICategory} from "../../interfaces/ICategory";
import {IElement} from "../../interfaces/IElement";

function CategoryElement() {
    const dispatch = useDispatch();
    const history = useHistory();

    let {category, element}: any = useParams();

    const elementInfo = useSelector((state: RootStateOrAny) => state.elements.currentElement);
    const currentCategory = useSelector((state: RootStateOrAny) => state.categories.currentCategory);
    const categories = useSelector((state: RootStateOrAny) => state.categories.categories);

    useEffect(() => { //TODO refactor this, too many ifs
        (categories.length === 0) && dispatch(getCategories(() => {console.log('succ')}));
        if(categories.length > 0  && !elementInfo.id){
            const currentCat = categories.find((cat: ICategory) => cat.name === category);
            if(currentCategory && currentCategory.elements){
                const elementIs = currentCategory.elements.find((item: IElement) => item.name === element || item.id == element);
                    dispatch(getElement(`${currentCategory.url}/${elementIs ? elementIs.url : ''}`,
                        (res: Response) =>{
                            dispatch(setError({
                                errorStatus: res.status,
                                url: res.url,
                                errorText: res.statusText})
                            );
                            history.push('/not-found')
                        }));
            } else {
                dispatch(getCategory(currentCat.url))
            }
        }

    }, [currentCategory, elementInfo, categories]);

    return (
        <div className="category-element">
            <div className="name">
                <h3>
                    {elementInfo.name}
                </h3>
            </div>

            <div className="wiki">
                <a href={elementInfo.wikiUrl} rel="noopener noreferrer" target="_blank">{elementInfo.name}</a>
            </div>
        </div>
    )
}

export default CategoryElement;
