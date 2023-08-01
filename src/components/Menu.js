import React from "react";

const Menu = () => {
  return (
    <section class="w-screen bg-brown ">
        <h2 class="bg-[url('../images/img/menu_arriba.svg')] mx-auto bg-no-repeat pt-20 pb-10 text-center bg-center text-white text-4xl">
          <span className="block text-2xl">Nuestro delicioso</span>Menú
        </h2>

        <div class="max-w-6xl mx-auto md:flex gap-4 max-sm:px-10">
          <section class="">
            <h3 className="uppercase text-center py-10 text-white text-3xl font-bold">Café</h3>
            <ul className="[&>li]:flex [&>li]:justify-between [&>li]:text-white [&>li]:items-center [&>li>p>span]:text-beige [&>li>p>span]:block text-xl">
              <li>
                <p>
                  Café Latte
                  <span>Café Espresso con leche caliente evaporada</span>
                </p>
                <p class="text-4xl font-bold text-white">$25</p>
              </li>
              <li>
                <p>
                  Café Mocha <span>Espresso con crema batida</span>
                </p>
                <p class="text-4xl font-bold text-white">$30</p>
              </li>
              <li>
                <p>
                  Café Americano <span>Café Negro</span>
                </p>
                <p class="text-4xl font-bold text-white">$30</p>
              </li>
              <li>
                <p>
                  Capuccino<span>Espresso con una capa suave de espuma</span>
                </p>
                <p class="text-4xl font-bold text-white">$25</p>
              </li>
              <li>
                <p>
                  Café Mocha Frio<span>Espresso, dulce con mocha y leche.</span>
                </p>
                <p class="text-4xl font-bold text-white">$29</p>
              </li>
              <li>
                <p>
                  Mocha Frio Quemado
                  <span>
                    Espresso, hielo, con azucar quemada y mantequilla.
                  </span>
                </p>
                <p class="text-4xl font-bold text-white">$35</p>
              </li>
              <li>
                <p>
                  Latte con Caramelo<span>Espresso, leche y caramelo.</span>
                </p>
                <p class="text-4xl font-bold text-white">$39</p>
              </li>
            </ul>
          </section>

          <section className="">
            <h3 className="uppercase text-center py-10 text-white text-3xl font-bold">Comida</h3>

            <ul className="[&>li]:flex [&>li]:text-white [&>li]:items-center [&>li>p>span]:text-beige [&>li>p>span]:block text-xl">
              <li>
                <p>
                  Baguette de Pollo
                  <span>Delicioso Baguette con pollo a la plancha</span>
                </p>
                <p class="text-4xl font-bold text-white">$45</p>
              </li>
              <li>
                <p>
                  Baguette Pollo y Queso
                  <span>Baguette combinado con Pollo y Queso Manchego</span>
                </p>
                <p class="text-4xl font-bold text-white">$50</p>
              </li>
              <li>
                <p>
                  Baguette con Tocino
                  <span>
                    Baguette con especias y verduras, además de tocino
                  </span>
                </p>
                <p class="text-4xl font-bold text-white">$50</p>
              </li>
              <li>
                <p>
                  Baguette de Jamón
                  <span>Delicioso Baguette con Jamón y Especias</span>
                </p>
                <p class="text-4xl font-bold text-white">$65</p>
              </li>
              <li>
                <p>
                  Baguette con Jamón, Queso y Tocino
                  <span>El especial de la casa</span>
                </p>
                <p class="text-4xl font-bold text-white">$69</p>
              </li>
              <li>
                <p>
                  Sandwich de Pollo
                  <span>Delicioso sandwich con Pollo y especies</span>
                </p>
                <p class="text-4xl font-bold text-white">$65</p>
              </li>
              <li>
                <p>
                  Sandwich de Jamón y queso
                  <span>Queso Amarillo con Jamón y Queso</span>
                </p>
                <p class="text-4xl font-bold text-white">$59</p>
              </li>
            </ul>
          </section>
        </div>
        <div className="bg-[url('../images/img/menu_abajo.svg')] py-28 max-w-6xl bg-no-repeat bg-center mx-auto"></div>
    </section>
  );
};

export default Menu;
