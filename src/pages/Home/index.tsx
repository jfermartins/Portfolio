import React from 'react';
import { Header } from '../../components/Header';
import { HomeSection } from '../../sections/HomeSection';
import { AboutSection } from '../../sections/AboutSection';
import { EducationSection } from '../../sections/EducationSection';
import { ProjectsSection } from '../../sections/ProjectsSection';
import { SkillsSection } from '../../sections/SkillsSection';
import { ContactSection } from '../../sections/ContactSection';
import { Footer } from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;