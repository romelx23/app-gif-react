import React,{useState} from 'react';
import './GifApp.css';
import AddCategory from '../addCategory/AddCategory';
import GiGrid from '../GifGrid/GiGrid';

const Gifapp=()=>{
    // const categorias=['One ´Punch','Dragon Ball','Samurai X'];
    const [categories, setcategory] = useState(['One Punch']);
    // const handleAdd = () => {
    //     const array=[...categories,'HunterxHunter','Timoteo','los padrinos mágicos']
    //     setcategory(array);
    // }
    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setcategory}/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
               {categories.map(category=>(
                   <GiGrid
                   key={category}
                   category={category}/>
                   ))
                }
            </ol>
        </>
    );
}

export default Gifapp;