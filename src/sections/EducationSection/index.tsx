import React from "react";

interface EducationSectionProps {
  title?: string;
  children: React.ReactNode;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  title = "Educação",
  children,
}) => {
  return (
    <section className="bg-zinc-800 flex flex-col py-14 text-white font-montserrat">
      {title && (
        <h2 className="text-4xl text-center text-white font-bold mb-12">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};
