import React from "react";

const CommunityStatus = ({ community, title, image }) => {
  return (
    <div className="text-center">
      <img src={image} alt={image} />
      <h2 className="text-6xl mb-3">{community}</h2>
      <span className="text-gray-600">{title}</span>
    </div>
  );
};

export default CommunityStatus;
