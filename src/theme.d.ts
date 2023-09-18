import { PaletteColor, SimplePaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    gradient1 : PaletteColor;

    gradient2 : PaletteColor;
  }

  interface PaletteOptions {
    gradient1? : SimplePaletteColorOptions;

    gradient2? : SimplePaletteColorOptions; 
  }
}