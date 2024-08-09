import React from 'react';

type TitleProps = {
  children: React.ReactNode; // Definindo children como React.ReactNode
};

export const Title: React.FC<TitleProps> = ({ children }) => (
  <div className="mx-auto">
    <h2 className="text-3xl md:text-4xl md:mb-2">{children}</h2>{' '}
    {/* Renderizando o título recebido via children */}
    <div className="w-4/5 border-b-2 border-solid border-primary-600"></div>
  </div>
);