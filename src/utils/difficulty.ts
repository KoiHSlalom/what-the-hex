export const Difficulty = {
    EASY: {
        label: "Easy",
        choices: 2,
    },
    MEDIUM: {
        label: "Medium",
        choices: 4,
    },
    HARD: {
        label: "Hard",
        choices: 6,
    },
};

export const getDifficultyChoices = (difficulty) => {
    switch (difficulty) {
        case Difficulty.EASY.label:
            return Difficulty.EASY.choices;
        case Difficulty.MEDIUM.label:
            return Difficulty.MEDIUM.choices;
        case Difficulty.HARD.label:
            return Difficulty.HARD.choices;
        default:
            return Difficulty.EASY.choices; // Default to easy if invalid
    }
};