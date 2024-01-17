import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id, title, brand, price, thumbnail}) => {
  return (
    <Link to={`/products/${id}`}>
        <div className='m-3 bg-slate-800 rounded w-fit'>
            <img src={thumbnail} alt={`${title} thumbnail`}/>
            <div className='text-3xl'>{title}</div>
            <div className='text-xl'>{brand}</div>
            <div>{`${price}$`}</div>
        </div>
    </Link>
  )
}

export default Card