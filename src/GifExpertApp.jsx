import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Rick and Morty', 'One Punch' ]);

    const onAddCategory =( newCategory) =>{
        
        if ( categories.includes(newCategory ) ) return;

        //categories.push('newCategory');
        setCategories([  newCategory, ...categories ]);
        //setCategories( cat => [...cat,'Valoran']);
    }
    return (
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1>

            {/*Input*/}
            <AddCategory 
                //setCategories={ setCategories}
                onNewCategory= { event => onAddCategory(event)}
            />
    

            {/*Listado de Gif*/}
            
            { 
                categories.map (( category ) => (
                    <GifGrid
                        key={ category }
                        category={category} />
                )) 
            }
                {/*<li>ABC</li>*/}
                
           
                {/* Gif Item*/}
        </>
    )
}
