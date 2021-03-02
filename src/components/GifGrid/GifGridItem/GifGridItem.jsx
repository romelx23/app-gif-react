import React from "react";
import "../GifGridItem/GifGridItem.css";
export const GifGridItem = ({ img }) => {
  // console.log(img);
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={img.url} alt={img.title} />
      <p>{img.title}</p>
    </div>
  );
};
