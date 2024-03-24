import React from 'react'

const MenuCard = (item) => {
  console.log(item.item)
  const {name, description, price} = item.item
  console.log(name, description, price)
  return (
    <li>
    <p>
      {name}
      <span>{description}</span>
    </p>
    <p class="text-4xl font-bold text-white">${price}</p>
  </li>
  )
}

export default MenuCard