'use client';

import React, { FormEvent, useState } from 'react';
import { getData } from '../services/GetData';
import ColorScheme from './ColorScheme';
import { HexColor } from '../models/hexColor';

interface Props {
  color: string;
}

const Form = ({ color }: Props) => {
  const [scheme, setScheme] = useState<HexColor[]>([]);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const colorScheme = await getData(color);
    setScheme(colorScheme.colors);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Submit</button>
      </form>
      <ColorScheme scheme={scheme} />
    </>
  );
};

export default Form;
