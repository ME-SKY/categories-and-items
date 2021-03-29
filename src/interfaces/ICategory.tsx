import {IElement} from "./IElement";

export interface ICategory {
    id: number,
    url: string,
    name: string,
    shortDescription?: string,
    description?: string,
    elements?: IElement[];
}
