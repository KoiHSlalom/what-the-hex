import React from 'react';

interface ChoiceButtonProps {
    choice: string;
    onSelect: (choice: string) => void;
    disabled?: boolean;
    isSelected?: boolean;
    isCorrect?: boolean | null;
    showCorrect?: boolean;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ 
    choice, 
    onSelect, 
    disabled = false,
    isSelected = false,
    isCorrect = null,
    showCorrect = false
}) => {
    let buttonClass = 'choice-button';
    let icon = '';
    
    if (isSelected && isCorrect === true) {
        buttonClass += ' correct';
        icon = ' ✓';
    } else if (isSelected && isCorrect === false) {
        buttonClass += ' incorrect';
        icon = ' ✗';
    } else if (showCorrect && !isSelected) {
        buttonClass += ' show-correct';
    }
    
    return (
        <button 
            className={buttonClass}
            onClick={() => onSelect(choice)}
            disabled={disabled}
        >
            {choice}{icon}
        </button>
    );
};

export default ChoiceButton;
