import React from 'react';

interface ColorSwatchProps {
  color: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color }) => {
  return (
    <div 
      className="color-swatch" 
      style={{ backgroundColor: color }}
      title={color}
    />
  );
};

export default ColorSwatch;