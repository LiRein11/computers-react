import React from 'react';

const BenefitsTitle = ({titles, index, id, img}) => {
  return (
    <>
      <div
        style={
          index === id
            ? { backgroundImage: `url(${img})` }
            : { backgroundImage: `url(${titles.imageUrl})` }
        }
        className="benefits-tabs__top-box"></div>
      <p className="benefits-tabs__top-text">{titles.title}</p>
    </>
  );
};

export default BenefitsTitle;