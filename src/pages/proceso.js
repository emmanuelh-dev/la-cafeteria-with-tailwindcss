import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Galery from "../components/Gallery";
import Menu from "../components/Menu";
import Comments from "../components/Comments";
const IndexPage = () => {
  return (
    <Layout>
      <div>
        <main className="max-w-6xl mx-auto bg-white mt-[-6rem] px-8 md:px-24 text-center relative">
          <section className="text-center">
            <h2 className=" font-semibold text-4xl text-brown uppercase py-20 leading-loose">
              <span className="text-lg text-beige block">Conoce más</span>
              sobre nosotros
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              tenetur, perferendis ipsa tempora soluta sunt hic consectetur
              blanditiis at unde, assumenda labore doloribus neque obcaecati
              vero odit aut adipisci ex! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Blanditiis ipsa, rem optio consectetur nemo sunt
              ut placeat. In aperiam distinctio atque eveniet culpa! Similique,
              magnam? Cumque voluptatibus atque inventore dolor.
            </p>
          </section>

          <section className=" mt-20 ">
            <ul className="grid gap-8 md:grid-cols-[repeat(3,1fr)] [&>li>p]:font-thin [&>li>p]:text-3xl [&>li>p]:mt-10">
              <li>
                <StaticImage
                  src="../images/img/icono_cafe.svg"
                  alt="icono café"
                  className="w-32"
                />
                <p>Café</p>
              </li>

              <li>
                <StaticImage
                  src="../images/img/icono_postre.svg"
                  alt="icono postre"
                  className="w-32"
                />
                <p>Postres</p>
              </li>

              <li>
                <StaticImage
                  src="../images/img/icono_te.svg"
                  alt="icono té"
                  className="w-32"
                />
                <p>Té</p>
              </li>
            </ul>
          </section>

          <section className="py-20">
            <h2 className="font-bold text-4xl text-brown uppercase">
              <span className="text-2xl text-beige">Vive la</span> <br />{" "}
              experiencia
            </h2>

            <Galery />
          </section>
        </main>
        <Menu />

        <Comments />
      </div>
    </Layout>
  );
};

export default IndexPage;
