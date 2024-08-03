import axios from 'axios';
import { HexColors } from '../models/hexColor';

export const getData = async (color: string) => {
  const formattedHex = color.replace('#', '');

  const api = `https://www.thecolorapi.com/scheme?hex=${formattedHex}&mode=triad&count=6`;
  const response = await axios.get(api);
  return response.data as HexColors;
};
