import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import Form from './Form';

const ColorPicker = () => {
  const [color, setColor] = useState('#aabbcc');

  return (
    <>
      <div style={{ background: color }}>
        <h2>Your color is {color}</h2>
      </div>
      <HexColorPicker color={color} onChange={setColor} />
      <Form color={color} />
    </>
  );
};

export default ColorPicker;
