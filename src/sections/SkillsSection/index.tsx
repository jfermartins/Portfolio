import React from 'react';
import { useState } from 'react';
import { Skill } from '../../components/Skill';
import { Skills } from '../../utils/DataSkills';
import { Title } from '../../components/Title';

export const SkillsSection = () => {
  const [hoveredSkillFront, setHoveredSkillFront] = useState({
    name: '',
    description: '',
  });
  const [hoveredSkillBack, setHoveredSkillBack] = useState({
    name: '',
    description: '',
  });
  const [hoveredSkillOther, setHoveredSkillOther] = useState({
    name: '',
    description: '',
  });

  const handleMouseEnterFront = (name: string, description: string) => {
    setHoveredSkillFront({ name, description });
  };
  const handleMouseEnterBack = (name: string, description: string) => {
    setHoveredSkillBack({ name, description });
  };
  const handleMouseEnterOther = (name: string, description: string) => {
    setHoveredSkillOther({ name, description });
  };

  return (
    <section className="min-h-screen bg-zinc-800 flex flex-col py-20 text-white font-montserrat">
      <Title>Habilidades</Title>

      <div className="md:flex justify-center mt-14">
        <div className="flex flex-col max-w-144 mx-auto">
          <div className="mx-auto mb-7 md:mb-0">
            <h2 className="text-2xl md:mb-1">Front End</h2>
            <div className="w-2/5 border-b-2 border-solid border-primary-600"></div>
          </div>

          <div className="px-7">
            <h3 className="text-lg my-2">
              {!hoveredSkillFront.name ? 'Skill' : hoveredSkillFront.name}
            </h3>
            <p className="min-h-28 text-sm text-zinc-400">
              {!hoveredSkillFront.description
                ? 'Escolha uma das habilidades abaixo e deixe-me compartilhar um pouco sobre ela!'
                : hoveredSkillFront.description}
            </p>
            <div className="my-10 flex flex-wrap justify-center gap-10">
              {Skills.front.map((skill) => (
                <Skill
                  key={skill.name}
                  src={skill.src}
                  name={skill.name}
                  onMouseEnter={() =>
                    handleMouseEnterFront(skill.name, skill.description)
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* Back End Section */}
        <div className="flex flex-col max-w-144 mx-auto mt-7 md:mt-0">
          <div className="mx-auto mb-7 md:mb-0">
            <h2 className="text-2xl md:mb-1">Back End</h2>
            <div className="w-2/5 border-b-2 border-solid border-primary-600"></div>
          </div>

          <div className="px-5">
            <h3 className="text-lg my-2">
              {!hoveredSkillBack.name ? 'Skill' : hoveredSkillBack.name}
            </h3>
            <p className="min-h-28 text-sm text-zinc-400">
              {!hoveredSkillBack.description
                ? 'Escolha uma das habilidades abaixo e deixe-me compartilhar um pouco sobre ela!'
                : hoveredSkillBack.description}
            </p>
            <div className="my-10 flex flex-wrap justify-center gap-10">
              {Skills.back.map((skill) => (
                <Skill
                  key={skill.name}
                  src={skill.src}
                  name={skill.name}
                  onMouseEnter={() =>
                    handleMouseEnterBack(skill.name, skill.description)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-144 mx-auto mt-7">
        <div className="mx-auto mb-7 md:mb-0">
          <h2 className="text-2xl md:mb-1">Outras</h2>
          <div className="w-2/5 border-b-2 border-solid border-primary-600"></div>
        </div>

        <div className="px-5">
          <h3 className="text-lg my-2">
            {!hoveredSkillOther.name ? 'Skill' : hoveredSkillOther.name}
          </h3>
          <p className="min-h-28 text-sm text-zinc-400">
            {!hoveredSkillOther.description
              ? 'Escolha uma das habilidades abaixo e deixe-me compartilhar um pouco sobre ela!'
              : hoveredSkillOther.description}
          </p>
          <div className="my-10 flex flex-wrap justify-center gap-10">
            {Skills.others.map((skill) => (
              <Skill
                key={skill.name}
                src={skill.src}
                name={skill.name}
                onMouseEnter={() =>
                  handleMouseEnterOther(skill.name, skill.description)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};