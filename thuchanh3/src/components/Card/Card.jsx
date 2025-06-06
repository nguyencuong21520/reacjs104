import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'> 
      <p>Tôi tên là: {props.name}</p>
      <p>Tuổi: {props.age}</p>
      <p>Địa chỉ: {props.address}</p>
    </div>
  )
}

export default Card;
