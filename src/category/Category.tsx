import React from "react";
import {Link, useParams} from 'react-router-dom'
import './Category.scss'

export interface CategoryItem {
    id: number,
    name: string,
    url: string,
    wikiUrl: string
}

export interface ICategory {
    id: number,
    url: string,
    name: string,
    shortDescription: string,
    description: string,
    items?: CategoryItem[];
}

const exampleItems: CategoryItem[] = [
    {
        id: 1,
        name: 'element1name',
        url: 'elem-some-url-1',
        wikiUrl: 'some wikiUrl'
    },
    {
        id: 2,
        name: 'elem2name',
        url: 'elem-some-url-2',
        wikiUrl: 'some wikiUrl'
    },
    {
        id: 3,
        name: 'elem3name',
        url: 'elem-some-url-3',
        wikiUrl: 'some wikiUrl'
    },
    {
        id: 4,
        name: 'elem4name',
        url: 'elem-some-url-4',
        wikiUrl: 'some wikiUrl'
    },
    {
        id: 5,
        name: 'elem5name',
        url: 'elem-some-url-5',
        wikiUrl: 'some wikiUrl'
    }
];

const exampleCategory: ICategory = {
    id: 1,
    url: 'somename1',
    name: 'SomeName',
    shortDescription: 'Oouhidsjdh, idsfhsiuhsdiu ? sdhfjhddjfsgdjfhjg - ksdjfhkdsfh, sajdhaeahdkae!',
    description: 'Oouhidsjdh, idsfhsiuhsdiu ? sdhfjhddjfsgdjfhjg - ksdjfhkdsfh, sajdhaeahdkae!Oouhidsjdh, idsfhsiuhsdiu ? sdhfjhddjfsgdjfhjg - ksdjfhkdsfh, sajdhaeahdkae!Oouhidsjdh, idsfhsiuhsdiu ? sdhfjhddjfsgdjfhjg - ksdjfhkdsfh, sajdhaeahdkae!',
    items: exampleItems
};



function Category() {
   //@ts-ignore
   let {categoryUrl} = useParams();

   // const [category, setCategory] =

   // @ts-ignore
    const categoryElements = exampleCategory.items.map(item =>
       <div className="element" key={item.id}>
           <div className="element-name">
               <Link to={`/${exampleCategory.url}/${item.url}`}>{item.name}</Link>
           </div>
       </div>
   );

    return (
        <div className="category">
            <div className="category-info">
                <div className="category-name">
                    <h3>
                        {exampleCategory.name}
                    </h3>

                </div>
                <div className="short-description">
                    {exampleCategory.shortDescription}
                </div>
                <div className="description">
                    {exampleCategory.description}
                </div>
            </div>
            <div className="category-elements">
                {categoryElements}
            </div>

        </div>
    )
}

export default Category;
