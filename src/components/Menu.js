import React from 'react';
import menu from '../../data/menu';
import MenuCard from './MenuCard';
const Menu = () => {
  return (
    <section className='w-screen bg-brown '>
      <h2 className="bg-[url('../images/img/menu_arriba.svg')] mx-auto bg-no-repeat pt-20 pb-10 text-center bg-center text-white text-4xl">
        <span className='block text-2xl'>Nuestro delicioso</span>Menú
      </h2>

      <div className='max-w-6xl mx-auto md:flex gap-4 max-sm:px-10'>
        {menu.map((category) => (
          <section className='' key={category.category}>
            <h3 className='uppercase text-center py-10 text-white text-3xl font-bold'>
              {category.category}
            </h3>
            <ul className='[&>li]:flex [&>li]:justify-between [&>li]:text-white [&>li]:items-center [&>li>p>span]:text-beige [&>li>p>span]:block text-xl'>
              {category.items.map((item) => (
                <MenuCard item={item} key={item.name}/>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="bg-[url('../images/img/menu_abajo.svg')] py-28 max-w-6xl bg-no-repeat bg-center mx-auto"></div>
    </section>
  );
};

export default Menu;
