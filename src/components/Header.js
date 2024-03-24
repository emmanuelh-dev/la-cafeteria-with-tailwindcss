import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <header className="relative h-screen">
      <div className="relative z-10 max-w-6xl mx-auto top-0 left-0">
        <div className="flex max-sm:flex-col items-center justify-between pt-16">
          <div className="w-52">
            <StaticImage src="../images/img/logo.svg" alt="logo cafeteria" />
          </div>

          <nav className="flex max-sm:flex-col mt-2 [&>a]:text-white [&>a]:font-bold [&>a]:text-2xl gap-2 text-center">
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

        <div className="text-white mt-20 text-center uppercase relative z-10">
          <h1 className="text-4xl font-bold">
            Disfruta una deliciosa taza de café
          </h1>
        </div>
      </div>

      <div className="absolute top-0 left-0 z-0 bg-[url('../images/img/header_inicio.jpg')] brightness-50 bg-no-repeat bg-cover md:min-h-[44rem] max-sm:h-screen w-full"></div>
    </header>
  );
};

export default Header;
