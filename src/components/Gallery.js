import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Gallery = () => {
  return (
    <div className="[&>img]:h-64 [&>img]:object-cover [&>img]:w-64 grid grid-cols-2 md:grid-cols-4 gap-8">
      <StaticImage
        src="../images/img/galeria/galeria_01.jpg"
        alt="galeria"
        className="object-center object-cover md:row-span-2"
      />

      <StaticImage
        src="../images/img/galeria/galeria_02.jpg"
        alt="galeria"
        className="object-center object-cover md:col-span-2"
      />

      <StaticImage
        src="../images/img/galeria/galeria_03.jpg"
        alt="galeria"
        className="object-center object-cover md:col-span-1"
      />

      <StaticImage
        src="../images/img/galeria/galeria_04.jpg"
        alt="galeria"
        className="object-center object-cover md:row-span-2"
      />

      <StaticImage
        src="../images/img/galeria/galeria_05.jpg"
        alt="galeria"
        className="object-center object-cover md:col-span-2"
      />

      <StaticImage
        src="../images/img/galeria/galeria_06.jpg"
        alt="galeria"
        className="object-center object-cover md:col-span-2"
      />

      <StaticImage
        src="../images/img/galeria/galeria_07.jpg"
        alt="galeria"
        className="object-center object-cover md:row-span-2 md:row-start-3"
      />

      <StaticImage
        src="../images/img/galeria/galeria_08.jpg"
        alt="galeria"
        className="object-center object-cover md:col-span-3"
      />

      <StaticImage
        src="../images/img/galeria/galeria_09.jpg"
        alt="galeria"
        className="object-center object-cover md:col-span-2"
      />

      <StaticImage
        src="../images/img/galeria/galeria_10.jpg"
        alt="galeria"
        className="object-center object-cover md:col-span-2"
      />
    </div>
  );
};

export default Gallery;
