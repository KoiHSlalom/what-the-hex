import React from 'react';

interface ChoiceButtonProps {
    choice: string;
    onSelect: (choice: string) => void;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ choice, onSelect }) => {
    return (
        <button className="choice-button" onClick={() => onSelect(choice)}>
            {choice}
        </button>
    );
};

export default ChoiceButton;