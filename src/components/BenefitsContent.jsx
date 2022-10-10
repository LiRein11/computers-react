import React from 'react';

const BenefitsContent = ({content, index, id}) => {
  
  return (
    <div
      // className='benefits-tabs__content-item'
      className={
        index === id ? 'benefits-tabs__content-item--active' : 'benefits-tabs__content-item'
      }>
      <div className="benefits-tabs__content-info">
        <img className="benefits-tabs__content-img" src={content.imageUrl} alt="benefits" />
        <div className="benefits-tabs__content-box">
          <h6 className="benefits-tabs__content-title">{content.title}</h6>
          <p className="benefits-tabs__content-text">{content.text}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsContent;