function generateChoices(currentColor: string, allColors: string[], difficulty: 'easy' | 'medium' | 'hard'): string[] {
    let numberOfChoices: number;

    switch (difficulty) {
        case 'easy':
            numberOfChoices = 2;
            break;
        case 'medium':
            numberOfChoices = 4;
            break;
        case 'hard':
            numberOfChoices = 6;
            break;
        default:
            numberOfChoices = 4; // Default to medium if something goes wrong
    }

    const choices = new Set<string>();
    choices.add(currentColor);

    while (choices.size < numberOfChoices) {
        const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
        choices.add(randomColor);
    }

    return Array.from(choices).sort(() => Math.random() - 0.5); // Shuffle the choices
}

export default generateChoices;