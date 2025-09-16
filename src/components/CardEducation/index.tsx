import React from "react";

export interface CardEducationProps {
  link: string;
  certificate: string;
  title: string;
  description: string;
}

export const CardEducation: React.FC<CardEducationProps> = ({
  link,
  certificate,
  title,
  description,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative bg-zinc-900 flex flex-col w-4/5 sm:w-3/5 md:w-1/3 max-w-sm rounded-2xl py-7 px-5 cursor-pointer shadow-lg hover:shadow-2xl shadow-zinc-950 duration-300 hover:scale-105"
    >

      <img src={certificate} alt="Certificado" className="w-2/3 mx-auto mt-10" />

      <div className="mx-auto my-5 text-center">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <div className="w-4/5 border-b-2 border-primary-500 mx-auto mt-2"></div>
      </div>

      <p className="text-sm text-zinc-300 text-center">{description}</p>
    </a>
  );
};
