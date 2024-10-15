import React from 'react';
import discountImg from '../assets/discount.png';
import BlockWhite from './BlockWhite';

const Discount = () => {
  return (
    <BlockWhite>
      <div>
        <img src={discountImg} alt="Discount Image" />
      </div>
    </BlockWhite>
  );
};

export default Discount;
