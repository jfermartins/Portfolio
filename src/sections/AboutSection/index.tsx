import React from 'react';
import { Title } from '../../components/Title';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-zinc-900 flex flex-col py-20 text-white font-montserrat"
    >
      <Title>Sobre mim</Title>

      {/* Aumentei a margem superior aqui de mt-7 para mt-12 e removi o md:mt-0 que estava colando o texto */}
      <div className="sm:flex mt-12"> 
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
            <p className="font-bold text-lg mb-4">Muito prazer, sou a Jane! 👋</p>
            <p className="my-4 text-zinc-300">
              Engenheira de Software por formação e entusiasta do aprendizado
              por paixão. Minha jornada é marcada pela busca constante por novas
              tecnologias, com um carinho especial pelo React e pelas
              engrenagens que fazem o back-end girar.
            </p>
            <p className="text-zinc-300">
              Para mim, programar vai além das linhas de código; é sobre
              resolver problemas respeitando as diferentes formas de interagir
              com o mundo. Sou uma defensora da neurodiversidade e da inclusão
              no ambiente tech — o girassol que me acompanha é um lembrete da
              importância de espaços mais acolhedores e eficientes. Vamos
              construir algo incrível juntos?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};