import React from "react";

const Card = ({ data }) => {
  return (
    <div className="snap-center shrink-0 w-11/12">
      <div className="border rounded-lg p-4 shadow-lg">
        <div className="font-bold">{data.title}</div>
        {data.position ? (
          <div className="text-lg">{data.position}</div>
        ) : (
          <div></div>
        )}
        {data.data ? (
          <ul className="text-base mt-6">
            {data.data.map((singleData) => {
              return <li key={singleData}>{singleData}</li>;
            })}
          </ul>
        ) : (
          <div></div>
        )}
        {data.description ? (
          <div className="text-base mt-8">{data.description}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Card;
