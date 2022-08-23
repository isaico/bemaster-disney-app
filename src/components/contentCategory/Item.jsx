import React from 'react'
import {Link} from 'react-router-dom'
export const Item = ({itemProps}) => {
  return (
    <div>
        <Link to={`detail/${itemProps.id}`}>
            {itemProps.title}
            <img
            src={itemProps.miniatureImg}
            alt={itemProps.altMiniatureImg}
            />  
        </Link>
    </div>
  )
}
