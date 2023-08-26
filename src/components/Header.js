import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const Header = () => {
  return (
    <header className="bg-[url('../images/img/header_inicio.jpg')] bg-no-repeat bg-cover relative md:min-h-[44rem] max-sm:h-screen">
      <div className="relative max-w-6xl mx-auto ">
        <div className="flex max-sm:flex-col items-center justify-between pt-16">
          <div className=" w-52">
            <StaticImage src="../images/img/logo.svg" alt="logo cafeteria" />
          </div>

          <nav className="flex max-sm:flex-col mt-2 [&>a]:text-white [&>a]:font-bold [&>a]:text-2xl gap-2">
            <a className="" href="/">
              Inicio
            </a>
            <a href="/nosotros">Nosotros</a>
            <a href="/proceso">Proceso</a>
            <a href="/menu">Menú</a>
            <a href="/galeria">Galería</a>
            <a href="/contacto">Contacto</a>
          </nav>
        </div>

        <div className="text-white mt-20 text-center uppercase">
          <h1 className="text-4xl font-bold">
            Disfruta una deliciosa taza de café
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
