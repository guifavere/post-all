export type Color = 'blue' | 'gray' | 'green' | 'orange' | 'purple' | 'red' | 'yellow';

export default {
  colors: {
    blue: {
      100: '#0062ff',
      400: '#005df2',
      700: '#163e72',
    },
    gray: {
      100: '#475e69',
      400: '#30444e',
      700: '#1a282f',
    },
    green: {
      100: '#3dd598',
      400: '#25c685',
      700: '#286053',
    },
    orange: {
      100: '#ff974a',
      400: '#ff8a34',
      700: '#624d3b',
    },
    purple: {
      100: '#755fe2',
      400: '#6952dc',
      700: '#393d69',
    },
    red: {
      100: '#ff575f',
      400: '#ff464f',
      700: '#623a42',
    },
    yellow: {
      100: '#ffc542',
      400: '#ffbc25',
      700: '#625b39',
    },
    background: '#22343C',
    border: '#fff',
    shadow: '#19282f',
    text: '#fff',
    mutedText: '#96A7AF',
  },
  fontFamilies: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto', sans-serif",
  },
  fontSizes: {
    xs: '0.6875rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xg: '2rem',
  },
  fontWeights: {
    light: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
  radii: {
    sm: '6px',
    md: '12px',
    lg: '25px',
  },
};
