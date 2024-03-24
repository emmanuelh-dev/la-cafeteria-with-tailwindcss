import React from 'react'

const MenuCard = (item) => {
  const {name, description, price} = item.item
  return (
    <li>
    <p className='font-bold'>
      {name}
      <span className='font-normal'>{description}</span>
    </p>
    <p class="text-4xl font-bold text-white">${price}</p>
  </li>
  )
}

export default MenuCard