import React from 'react';
import { Title } from '../../components/Title';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-zinc-900 flex flex-col py-20 text-white font-montserrat"
    >
      <Title>Sobre mim</Title>

      <div className="sm:flex sm:mt-7 md:mt-0">
        <div className="sm:w-1/2 mt-10 md:mt-5 flex justify-center items-center">
          <div className="w-3/5 md:w-2/5">
            <img
              src="./jane.jpg"
              alt="sobre mim"
              className=" rounded-l-4xl rounded-b-4xl md:rounded-br-none border-y-2 border-r-2 border-solid border-primary-600"
            />
          </div>
        </div>

        <div className="w-3/5 mx-auto mt-10 md:mt-0 flex flex-col justify-center items-start">
          <div className="max-w-md text-sm md:text-base">
            <p>👨‍💻 Sou Jane Fernanda Martins uma desenvolvedora Web fullstack.</p>
            <p className="my-4">
              🚀 Estudando e aprendendo novas tecnologias como React e sempre me
              aperfeiçoando com o necessário no back-end.
            </p>
            <p>
              ✨ Minha meta é poder desenvolver tudo que puder ser imaginado e
              expandir meu conhecimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};