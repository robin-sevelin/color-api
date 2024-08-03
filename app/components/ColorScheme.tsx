import React, { useState } from 'react';
import { HexColor, HexColors } from '../models/hexColor';

interface Props {
  scheme: HexColor[];
}

const ColorScheme = ({ scheme }: Props) => {
  return (
    <div className='scheme'>
      {scheme &&
        scheme.map((color, index) => (
          <div
            className='color-container'
            style={{ background: color.hex.value }}
            key={index}
          >
            {color.hex.value}
          </div>
        ))}
    </div>
  );
};

export default ColorScheme;
