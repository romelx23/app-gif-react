import React, { Fragment } from "react";
import { getGif } from "../../helpers/getGifs";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem/GifGridItem";
import "./GiGrid.css";
import logo from './GifGridItem/logo.svg';
const GiGrid = ({ category }) => {

  // const [images, setimages] = useState([]);
  const {data:images,loading}=useFetchGifs(category);
  
  // useEffect(() => {
  //   getGif(category)//recibo una promesa y envio la category
  //   .then(setimages)//resuelve la promesa y le doy el nuevo valor a setimages
  // }, [category]);

 
  // getGif();

  return (
    <>
    
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      <p className="animate__animated animate__flash">{loading?<img src={logo} alt="imagen"/>:'DATA CARAGADA'}</p>
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} img={img} />;
        })}
      </div>
    </>
  );
};

export default GiGrid;
