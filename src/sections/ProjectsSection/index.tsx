
import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { DataProjects } from '../../utils/DataProjects';

import { CardProject } from '../../components/CardProject';
import { Title } from '../../components/Title';

export const ProjectsSection: React.FC = () => {
  const slidesToShow = DataProjects.length > 3 ? 3 : DataProjects.length;
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section
      id="projetos"
      className="relative bg-zinc-900 flex flex-col py-20 text-white font-montserrat"
    >
      <Title>Meus projetos</Title>
      <div className="flex justify-center items-center my-10">
        {DataProjects.length > 1 ? (
          <Slider
            {...settings}
            className="w-3/4 sm:w-10/12 md:w-11/12 flex justify-center items-center"
          >
            {DataProjects.map((project) => (
              <div
                key={project.name}
                className="flex justify-center items-center px-5"
              >
                <CardProject
                  name={project.name}
                  src={project.src}
                  description={project.description}
                  github={project.github}
                  deploy={project.deploy || ''}
                />
              </div>
            ))}
          </Slider>
        ) : DataProjects.length != 0 ? (
          <div className="px-7">
            <CardProject
              name={DataProjects[0].name}
              src={DataProjects[0].src}
              description={DataProjects[0].description}
              github={DataProjects[0].github}
              deploy={DataProjects[0].deploy || ''}
            />
          </div>
        ) : (
          <h2 className="text-lg my-10">
            Parece que meus projetos não estão carregando. 😅
          </h2>
        )}
      </div>
    </section>
  );
};