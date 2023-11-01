import { useState} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Search from "../search/Search";

export interface Categories{
    name: string;
    categoryLink: string;
    id: any,
}

const categories: Categories[] = [
    {
        name:'accessories',
        categoryLink:'/store/category/accessories',
        id: uuidv4()
    },
    {
        name:'Vapes',
        categoryLink:'/store/category/Vapes',
        id: uuidv4()
    },
    {
        name:'liquid',
        categoryLink:'/store/category/liquid',
        id: uuidv4()
    }

]
const Category = (): JSX.Element =>{
    const navigate: NavigateFunction = useNavigate();
    return(
        <div className='category'>
            <div className="category-links">
                {
                    categories.map((category: Categories) =>{
                        return(
                            <p key={category.id} onClick={() => navigate(category.categoryLink)}>{category.name}</p>
                        )
                    })
                }
            </div>
            <Search />
        </div>
    )
}

export default  Category;