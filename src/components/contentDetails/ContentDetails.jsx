import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/fireBase.js";
import { ItemDetail } from "./ItemDetail.jsx";


export const ContentDetails = () => {
    //Hook
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const { urlIdItem } = useParams();
  //fetch
  useEffect(() => {
    const db = getFirestore();
    const itemDoc = db.collection("movies").doc(urlIdItem);
    
    if (urlIdItem) {
      itemDoc.get()
        .then((resp) => {
          if (resp.size === 0) console.log("no hay datos");
          
          setItemDetail( { id:resp.id,...resp.data()} );
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false);
        });
      
    } 
  }, [urlIdItem]);


  return (
    <div id="itemDetails">
      {loading ? (
        "cargando..."
      ) : (
        <ItemDetail key={urlIdItem} item={itemDetail} />
      )}
    </div>
  )
}
