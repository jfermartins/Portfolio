import React from 'react';

type SkillProps = {
    src: string;
    name: string;
    onMouseEnter: () => void;
  };
  
  export const Skill = ({ src, name, onMouseEnter }: SkillProps) => {
    return (
      <div
        className="bg-zinc-700 flex justify-center items-center w-24 h-24 text-lg rounded-full shadow-md hover:shadow-xl shadow-zinc-900 border-2 border-x-0 border-solid border-primary-600 cursor-pointer transition-all duration-300 hover:-translate-y-1"
        onMouseEnter={onMouseEnter}
      >
        <img src={src} className="w-1/3 object-contain" alt={name} />
      </div>
    );
  };