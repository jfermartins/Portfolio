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
            href={deploy ? deploy : github}
            className="bg-zinc-950 relative w-full max-w-96 flex flex-col justify-center items-center py-5 px-5 my-7 mx-auto rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl shadow-zinc-950 transition-all duration-300 hover:-translate-y-3 hover:scale-105"
        >
            <div className="absolute left-1 sm:left-2 md:left-4 top-1 sm:top-2 md:top-3 flex pl-3.5 pt-3">
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/70"
                >
                    <circle r="12" cy="12" cx="12"></circle>
                </svg>
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-ml-0.75 mr-1.5 h-3 w-3 text-primary-500/70"
                >
                    <circle r="12" cy="12" cx="12"></circle>
                </svg>
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/70"
                >
                    <circle r="12" cy="12" cx="12"></circle>
                </svg>
            </div>
            <span className="text-sm text-zinc-500 mt-3 sm:mt-0">
                {name.replace(' ', '-')}.tsx
            </span>
  
            <img src={src} alt={name} className="mt-7 md:w-11/12" />
            <div className="mx-auto my-7">
                <h2 className="text-xl md:text-2xl">{name}</h2>
                <div className="w-4/5 border-b-2 border-solid border-primary-600"></div>
            </div>
            <p className="text-sm text-zinc-300">{description}</p>
            <div className="mt-7 flex justify-start items-start">
                <a href={github}>
                    <img
                        src="./github.svg"
                        className="w-9 mr-5 cursor-pointer transition-transform hover:scale-125"
                    />
                </a>
            </div>
        </a>
    );
};