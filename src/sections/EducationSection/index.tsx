import React from 'react';
import { CardEducation } from '../../components/CardEducation';
import { Title } from '../../components/Title';

export const EducationSection = () => {
  return (
    <section className="bg-zinc-800 flex flex-col py-14 text-white font-montserrat">
      <Title>Formações</Title>
      <div className="flex justify-center items-center mt-10">
        <CardEducation />
      </div>
    </section>
  );
};