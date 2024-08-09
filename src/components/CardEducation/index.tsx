import React from "react";

export const CardEducation = () => {
    return (
        <a href="https://www.sp.senac.br/senac-santos"
            className="relative bg-zinc-900 flex flex-col w-4/5 sm:w-3/5 md:w-2/5 max-w-96 rounded-2xl py-7 px-5 cursor-pointer shadow-lg hover:shadow-2xl shadow-zinc-950 duration-300 hover:scale-105"
        >
            <img
                src=""
                alt=""
                className="w-20 absolute -left-6 -top-4 z-20"
            />
            <img
                src="./certificate.svg"
                alt=""
                className="w-2/3 mx-auto"
            />
            <div className="mx-auto my-5 rotating-border">
                {''}
                {/* Adicione a classe rotating-border aqui */}
                <h2 className="text-3xl">Senac Santos e Fatec PG</h2>
                <div className="w-4/5 border-b-2 border-solid border-primary-600"></div>
            </div>
            <p className="text-sm text-zinc-300">
                Aprimorei minhas habilidades no campo de tecnologia ao concluir o curso
                técnico em informática em 2018, o Senac Santos e também na faculdade de
                Tecnologiade Praia Grande <b>Fatec PG</b>. Durante este período, adquiri experiências valiosas em programação, desenvolvimento de sistemas,
                administração de banco de dados e gestão de projetos, além de consolidar
                meus conhecimentos gerais em Tecnologia da Informação (TI){''} 
                <b></b>
            </p>
        </a>
    );
};