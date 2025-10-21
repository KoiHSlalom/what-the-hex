import React from 'react';

interface ChoiceButtonProps {
    choice: string;
    onSelect: (choice: string) => void;
    disabled?: boolean;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ choice, onSelect, disabled = false }) => {
    return (
        <button 
            className="choice-button" 
            onClick={() => onSelect(choice)}
            disabled={disabled}
        >
            {choice}
        </button>
    );
};

export default ChoiceButton;
