import React from 'react';
import { Download } from 'lucide-react';

export const HomeSection = () => {
  const handleDownload = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // Impede que o navegador siga o link
    e.preventDefault();

    // Cria um link de download temporário
    const link = document.createElement('a');
    link.href = './jane-fernanda-martins-curriculo.pdf';
    link.download = './jane-fernanda-martins-curriculo.pdf';

    // Simula um clique no link para iniciar o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="md:min-h-96 bg-zinc-950 flex flex-col sm:flex-row pb-16"
    >
      <div className="w-full sm:w-1/2 mt-10 flex justify-center items-center sm:order-2 ">
        <img src="./fernanda.jpg" className=" w-4/5 md:w-3/4" />
      </div>

      <div className="sm:w-1/2 flex justify-center items-center mt-10 ml-5 text-white font-montserrat sm:order-1">
        <div className="mx-auto">
          <h3 className="text-base sm:text-xl md:mb-1">Olá, eu sou</h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary-500 ">
            Jane Fernanda Martins
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mt-3 sm:mt-7">
            Web developer{' '}
            <span className="text-primary-500 text-2xl sm:text-3xl md:text-4xl">
              fullstack
            </span>
          </h2>
          <div className="flex my-5">
            <a href="https://github.com/jfermartins/" target="">
              <img
                src="./github.svg"
                className="w-7 mr-5 cursor-pointer transition-transform hover:scale-125"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jfermartins/"
              target=""
            >
              <img
                src="./linkedin.svg"
                className="w-7 cursor-pointer transition-transform hover:scale-125"
              />
            </a>
          </div>

          <button
            onClick={handleDownload}
            className="relative flex px-3 md:px-5 py-3 mt-7 sm:mt-10 rounded-md bg-primary-600 isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary-400 hover:text-zinc-950 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            <Download className="mr-2" /> Download CV
          </button>
        </div>
      </div>
    </section>
  );
};