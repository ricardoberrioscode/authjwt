//"use client"
import { useState, useMemo } from 'react';
import { createTheme, useTheme } from '@mui/material/styles';
import { tokens } from "./colors";

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode, //triggered
      ...(mode === 'dark'
        ? {
          // palette values for dark mode
          toolbarPrimary: {
            main: 'rgba(31, 42, 64, 0.2)',
          },
          areasPrimary: {
            main: 'rgba(31, 42, 64, 0.2)',
          },
          itemsPrimary: {
            main: '#1F2A55',
          },
          background: {
            default: '#141b2d',
            backgroundAreas: 'rgb(153,102,153, 0.38)',
          },
          backgroundAreas: {
            default: 'rgb(153,102,153, 0.38)',
          },
          header: {
            main: colors.grey[100],
          }
        }
        : {
          // palette values for light mode
          //main:"linear-gradient(to right, #f7f7f7, #203A43, #203A47)",
          toolbarPrimary: {
            main: 'rgba(200, 246, 242, 0.4)',
          },
          areasPrimary: {
            main: '#f2f0f0',
          },
          itemsPrimary: {
            main: '#f2f0f8',
          },
          background: {
            default: '#daeefe',
            backgroundBlendMode: 'overlay',
            backgroundAreas: 'rgb(153,102,153, 0.38)',
          },
          backgroundAreas: {
            default: 'rgb(153,102,153, 0.38)',
          },
          header: {
            main: colors.grey[100],
          },
          Mybackground: {
            background: '#0F2027',
          },
        }),
    },
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 40,
      },
    },
    Mybreakpoints: {
      values: {
        xs: 290, //xs: 0,  CHROME MOBIL
        sm: 600, //sm: 769,
        md: 900, //md: 770,
        lg: 1200, //lg: 1200,
        xl: 1536, //xl: 1536,
      },
      myValuesBoolean: {
        xs: true, // removes the `xs` breakpoint
        sm: true,
        md: true,
        lg: false,
        xl: false
      },
    },
  };
};


export const useMode = () => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode, mode];
};

