import { useState,useEffect } from "react";
import { getGif } from "../helpers/getGifs";
export const useFetchGifs = ( category ) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category)
    .then(imgs=>{
        setTimeout(()=>{
            console.log(imgs)
            setstate({
                data:imgs,
                loading:false
            });
        },1000)
    })    
  }, [category])

//   setTimeout(() => {
//     setstate({
//       data: [1,2,3,4,5],
//       loading: false,
//     });
//   }, 3000);
  return state; //{data[],loading:true}
};
