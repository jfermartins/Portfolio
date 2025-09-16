import React from "react";
import { CardEducation, CardEducationProps } from "./CardEducation";

export const EducationList = () => {
  const courses: CardEducationProps[] = [
    {
      link: "https://www.sp.senac.br/senac-santos",             
      certificate: "/certificate.svg",
      title: "Senac Santos",
      description:
        "Concluí o curso técnico em informática em 2018 no Senac Santos, adquirindo experiência em programação e gestão de projetos.",
    },
    {
      link: "https://www.fatecpg.edu.br/",
      certificate: "/certificate.svg",
      title: "Fatec Praia Grande",
      description:
        "Na Fatec PG aprofundei meus conhecimentos em desenvolvimento de sistemas e banco de dados.",
    },
    {
      link: "https://inex.com.br/",
      certificate: "/certificate.svg",
      title: "Instituto Inex",
      description:
        "O Inex complementou minha formação com cursos voltados para inovação e metodologias ágeis.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-8 flex-wrap">
      {courses.map((course, index) => (
        <CardEducation key={index} {...course} />
      ))}
    </div>
  );
};
