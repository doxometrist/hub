import { Presence } from '@/data/presences';
import React from 'react';

const PresenceCard = ({ presence }: { presence: Presence }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
      <div className="font-bold text-xl mb-2 text-white">{presence.title}</div>
      <p className="text-white text-base">
        {presence.description}
      </p>
      <div className="pt-4">
        <a href={presence.link} className="text-teal-200 hover:text-green-400 transition duration-300 ease-in-out">
          Visit
        </a>
      </div>
    </div>
  );
};

export default PresenceCard;
