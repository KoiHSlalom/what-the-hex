import React from 'react';

interface ColorSwatchProps {
  color: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color }) => {
  const swatchStyle = {
    backgroundColor: color,
    width: '200px',
    height: '200px',
    border: '1px solid #000',
    margin: '20px auto',
  };

  return <div style={swatchStyle}></div>;
};

export default ColorSwatch;