import React, { useState } from 'react'

const Categories = ({value, onClickCategory}) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className='categories'>
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? 'active' : ''}
            index={i}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
