import React from 'react'
import menu from '../../data/menu'

const Comments = () => {
  return (
    <section className="max-w-6xl mx-auto bg-white mt-[-6rem] px-10 md:px-24 relative ">
    <h2 className="font-bold text-3xl text-brown uppercase py-20 text-center">
      <span className="text-lg text-beige block"> Lo que dicen nuestros</span>Clientes
    </h2>

    <div className="bg-beigeLight rounded-xl max-w-xl mx-auto p-14">
      <p className=''>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        aliquam eum eligendi animi aut odit aperiam magnam quisquam natus,
        beatae a voluptatibus odio eveniet impedit labore optio unde quis?
        Magni!
      </p>

      <p className="text-red-900 text-right pt-6 text-2xl">- Juan De la torre</p>
    </div>
  </section>
  )
}

export default Comments