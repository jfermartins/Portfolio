import React, { useState } from 'react';

import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

import { Title } from '../../components/Title';
import { Popup } from '../../components/Popup';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messagePopup, setMessagePopup] = useState('');
  const [successPopup, setSuccessPopup] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleClose = () => {
    setPopup(false);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Preencha todos os campos!');
      return;
    }

    const data = {
      from_name: name,
      email,
      message,
    };

    try {
      const response = await emailjs.send(
        'service_kg2y0b1',
        'template_8nxnv3i',
        data,
        'yfxRc9em62EqOHa7x',
      );
      setSuccessPopup(true);
      setPopup(true);
      setMessagePopup('Sua mensagem foi enviada, logo te darei um retorno!');
      console.log('Contato enviado: ', response.status, response.text);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setSuccessPopup(false);
      setPopup(true);
      setMessagePopup(
        'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.',
      );
    }
  };

  return (
    <section
      id="contato"
      className="relative bg-zinc-900 flex flex-col py-20 text-white font-montserrat"
    >
      {popup && (
        <Popup
          message={messagePopup}
          success={successPopup}
          onClose={handleClose}
        />
      )}

      <Title>Contato</Title>
      <div className="w-3/5 flex flex-col max-w-96 mx-auto text-center">
        <p className="mt-10 text-zinc-300">
          Entre em contato por uma das seguintes redes sociais para sugestões,
          propostas, etc...
        </p>
        <div className="flex justify-center items-center gap-4 mt-5">
          <a href="mailto:marcelo.soares1070@gmail.com" target="">
            <Mail className="text-primary-500 w-8 h-8 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1" />
          </a>
          <a href="https://github.com/marcelo-Soares-codes/" target="">
            <Github className="text-primary-500 w-8 h-8 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/marcelo-soares-codes/"
            target=""
          >
            <Linkedin className="text-primary-500 w-8 h-8 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1" />
          </a>
          <a href="https://www.instagram.com/s.soares_marcelo/" target="">
            <Instagram className="text-primary-500 w-8 h-8 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1" />
          </a>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center mt-7"
      >
        <label
          htmlFor="name"
          className="flex flex-col w-3/5 max-w-96 text-xs indent-3"
        >
          Nome
          <input
            type="text"
            name="name"
            onChange={handleChangeName}
            value={name}
            className="text-sm text-zinc-800 outline-none py-1 px-3 border-2 border-solid border-primary-600 rounded-full"
            required
          />
        </label>
        <label
          htmlFor="email"
          className="flex flex-col w-3/5 max-w-96 text-xs indent-3 mt-5"
        >
          Email
          <input
            type="email"
            name="email"
            onChange={handleChangeEmail}
            value={email}
            className="text-sm text-zinc-800 outline-none py-1 px-3 border-2 border-solid border-primary-600 rounded-full"
            required
          />
        </label>
        <label
          htmlFor="name"
          className="flex flex-col w-3/5 max-w-96 text-xs indent-3 mt-5"
        >
          Mensagem
          <textarea
            name="name"
            onChange={handleChangeMessage}
            value={message}
            className="text-sm text-zinc-800 outline-none py-1 px-3 border-2 border-solid border-primary-600 rounded-lg"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-primary-600 w-3/5 max-w-96 text-lg py-2 mt-16 mb-10 rounded-lg transition-all duration-200 hover:bg-primary-500"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};