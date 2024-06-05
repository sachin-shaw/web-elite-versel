import React from "react";
import { useNavigate } from "react-router-dom";

const card = ({ cardN, cardP, cardB, cardI }) => {
  const navigate = useNavigate();

  const handleJoinUsClick = () => {
    // Redirect to the contactus page or any other desired page
    navigate("/contactus");
  };
  return (
    <div className="card">
      <div className="p-5 flex flex-col">
        <div className="rounded-xl overflow-hidden aspect-w-3 aspect-h-2">
          <img src={cardI} alt={cardN} />
        </div>
        <h1 className="text-2xl md:text-3xl font-medium mt-3 text-green">
          {cardN}
        </h1>
        <p className="text-slate-500 text-lg mt-3">{cardP}</p>
        <button
          type="button"
          className="mt-3 btn-primary"
          onClick={handleJoinUsClick}
        >
          {cardB}
        </button>
      </div>
    </div>
  );
};

export default card;
