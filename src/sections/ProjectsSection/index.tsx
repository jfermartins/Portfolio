import React from "react";

type CardProjectProps = {
    name: string;
    src: string;
    description: string;
    github: string;
    deploy: string;
};

export const CardProject = ({
    name,
    src,
    description,
    github,
    deploy,
}: CardProjectProps) => {
    return (
        <a
            href={deploy || github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-950 w-full max-w-96 flex flex-col justify-between items-center p-6 my-7 mx-auto rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl shadow-zinc-950 transition-all duration-300 hover:-translate-y-3 hover:scale-105 border border-zinc-800/80"
        >
            {/* Barra superior estilo editor */}
            <div className="w-full flex items-center justify-between mb-5">
                <div className="flex items-center space-x-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                <span className="text-xs text-zinc-500 font-mono">
                    {name ? name.toLowerCase().replace(/\s+/g, '-') : 'project'}.tsx
                </span>
            </div>

            {/* Imagem do Projeto com altura fixa para garantir estabilidade */}
            <div className="w-full h-44 overflow-hidden rounded-lg bg-zinc-900 mb-5 flex items-center justify-center border border-zinc-800">
                {src ? (
                    <img src={src} alt={name} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-zinc-600 text-xs">Sem imagem</span>
                )}
            </div>

            {/* Título e Divisor */}
            <div className="w-full text-center mb-3">
                <h2 className="text-xl font-semibold text-zinc-100">{name}</h2>
                <div className="w-16 h-0.5 bg-primary-600 mx-auto mt-2"></div>
            </div>

            {/* Descrição */}
            <p className="text-sm text-zinc-300 text-center mb-6 px-1">
                {description}
            </p>

            {/* Rodapé com link do GitHub */}
            <div className="w-full flex justify-start items-center mt-auto pt-2">
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(github, "_blank");
                    }}
                    role="button"
                    tabIndex={0}
                    className="inline-flex items-center text-zinc-400 hover:text-white transition-colors"
                >
                    <img
                        src="./github.svg"
                        alt="Repositório GitHub"
                        className="w-7 h-7 mr-2 cursor-pointer transition-transform hover:scale-110"
                    />
                    <span className="text-xs">Código fonte</span>
                </div>
            </div>
        </a>
    );
};

// ==========================================
// Lista de Projetos
// ==========================================

const projectsData = [
    {
        name: "Alan Mecânica de Motos",
        src: "/alan-motos.PNG",
        description: "Landing page promocional e responsiva desenvolvida para oficina mecânica de motos.",
        github: "https://github.com/jfermartins",
        deploy: "https://alan-motos.netlify.app/",
    },
    {
        name: "Portfólio Profissional",
        src: "/studio-linda-mulher.PNG",
        description: "Portfólio de engenharia de software desenvolvido com React, Tailwind CSS e TypeScript.",
        github: "https://github.com/jfermartins",
        deploy: "https://portifolio-jane.netlify.app/",
    },
    {
        name: "Projeto Netlify",
        src: "/portfolio.PNG",
        description: "Aplicação web moderna integrada e publicada no ecossistema Netlify.",
        github: "https://github.com/jfermartins",
        deploy: "https://jfermartins.netlify.app/",
    },
];

const ProjectsComponent = () => {
    return (
        <section id="projects" className="w-full py-16 px-4 bg-zinc-900">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Meus projetos</h2>
                <div className="w-32 h-1 bg-primary-600 mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {projectsData.map((project, index) => (
                    <CardProject
                        key={index}
                        name={project.name}
                        src={project.src}
                        description={project.description}
                        github={project.github}
                        deploy={project.deploy}
                    />
                ))}
            </div>
        </section>
    );
};

// Exportamos com os dois nomes (singular e plural) para evitar qualquer conflito de importação
export const ProjectsSection = ProjectsComponent;
export const ProjectSection = ProjectsComponent;