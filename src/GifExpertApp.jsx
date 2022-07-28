import React, { useState } from 'react';
import { AddCategory, GifGrid} from './components';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                onNewCategory={onAddCategory}
            />
            <hr />
            {
                categories.map(category => (<GifGrid key={category} category={category} />))
            }

        </>
    )

}
export default GifExpertApp
