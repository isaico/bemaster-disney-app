import React from 'react'
import {Link} from 'react-router-dom'
export const Item = ({itemProps}) => {
  return (
    <div className="category__list__item">
        <Link to={`detail/${itemProps.id}`}>
            <img
            src={itemProps.miniatureImg}
            alt={itemProps.altMiniatureImg}
            />  
        </Link>
    </div>
  )
}
