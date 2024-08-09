import React from 'react';

export const Header = () => {
    return (
      <header className="bg-zinc-950 flex flex-col justify-center items-center font-montserrat ">
        <img
          src="./logo.png"
          alt="Logo"
          className="w-28 sm:w-32 mx-auto mb-4 mt-6"
        />{' '}
        <nav className="flex flex-col items-center mb-3 mt-3">
          <ul className="flex text-white items-center">
            <a href="#home">
              <li className="mx-2 text-sm sm:text-base transition duration-200 ease-in-out transform hover:scale-110 hover:text-primary-100 cursor-pointer">
                Home
              </li>
            </a>
            <a href="#projetos">
              <li className="mx-2 text-sm sm:text-base transition duration-200 ease-in-out transform hover:scale-110 hover:text-primary-100 cursor-pointer">
                Portfolio
              </li>
            </a>
            <a href="#contato">
              <li className="mx-2 text-sm sm:text-base transition duration-200 ease-in-out transform hover:scale-110 hover:text-primary-100 cursor-pointer">
                Contato
              </li>
            </a>
          </ul>
        </nav>
      </header>
    );
};