import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto bg-white px-24 relative pt-20 pb-10">
      <div className="grid md:grid-cols-3 [&>div>h3]:text-beige [&>div>h3]:text-3xl text-center gap-10">
        <div className="footer-box ubicacion">
          <h3>Ubicación</h3>
          <p>Nicolas Copérnico 5990</p>
          <p>Guadalajara, Jalisco</p>
        </div>
        <div className="footer-box reservacion">
          <h3>Reservación</h3>
          <p>Tel. 3850-9102</p>
          <a href="tel:+38509102">Llamar</a>
        </div>
        <div className="footer-box horario">
          <h3>Horario</h3>
          <p>Lun-Jue: 11:00 - 22:00</p>
          <p>Vie-Sab: 09:00 - 24:00</p>
          <p>Domingo: Cerrado</p>
        </div>
      </div>
      <p className=" text-center">Todos los derechos reservados. La Cafetería</p>
    </footer>
  );
};

export default Footer;
