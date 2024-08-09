import { CircleX, MailWarning } from 'lucide-react';
import React from 'react';

type PropsType = {
  message: string;
  success: boolean;
  onClose: () => void;
};

export const Popup = ({ message, success, onClose }: PropsType) => {
  return (
    <div
      className={`fixed right-10 top-16 flex ${success ? 'bg-green-700' : 'bg-red-700'} text-white p-4 rounded-xl shadow-xl z-50 duration-300`}
    >
      <MailWarning className="text-2xl mr-3" />
      <span className="flex-grow">{message}</span>
      <button className="ml-3" onClick={onClose}>
        <CircleX />
      </button>
    </div>
  );
};