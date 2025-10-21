import { generateChoices } from '../utils/generateChoices';

describe('generateChoices', () => {
    it('should return 2 choices for easy mode', () => {
        const currentColor = '#ff5733';
        const choices = generateChoices(currentColor, 'easy');
        expect(choices.length).toBe(2);
    });

    it('should return 4 choices for medium mode', () => {
        const currentColor = '#33ff57';
        const choices = generateChoices(currentColor, 'medium');
        expect(choices.length).toBe(4);
    });

    it('should return 6 choices for hard mode', () => {
        const currentColor = '#3357ff';
        const choices = generateChoices(currentColor, 'hard');
        expect(choices.length).toBe(6);
    });

    it('should include the current color in the choices', () => {
        const currentColor = '#ff5733';
        const choices = generateChoices(currentColor, 'easy');
        expect(choices).toContain(currentColor);
    });

    it('should return unique choices', () => {
        const currentColor = '#ff5733';
        const choices = generateChoices(currentColor, 'medium');
        const uniqueChoices = new Set(choices);
        expect(uniqueChoices.size).toBe(choices.length);
    });
});