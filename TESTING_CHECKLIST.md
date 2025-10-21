# Testing Checklist for What The Hex

## ✅ Start Page
- [ ] Game title displays correctly with gradient effect
- [ ] "How to Play" section is visible and clear
- [ ] All three difficulty buttons are visible (Easy, Medium, Hard)
- [ ] Clicking a difficulty button highlights it
- [ ] "Start Game" button is prominent and clickable

## ✅ Game Play (10 Rounds)
- [ ] Round counter shows "Level 1 of 10" initially
- [ ] Color swatch displays correctly
- [ ] Correct number of choices based on difficulty:
  - Easy: 2 choices
  - Medium: 4 choices
  - Hard: 6 choices
- [ ] Clicking correct answer shows "✅ Correct!" feedback
- [ ] Clicking wrong answer shows "❌ Wrong! It was [hex]" feedback
- [ ] Score increments on correct answer
- [ ] Round counter increments after each round
- [ ] Buttons are disabled during feedback display
- [ ] After round 10, automatically goes to end screen

## ✅ End Screen
- [ ] "Game Complete!" title displays
- [ ] Final score shows correctly (e.g., "7/10")
- [ ] Percentage calculation is accurate
- [ ] Performance message matches score:
  - 100% → "Perfect! 🏆"
  - 80-99% → "Excellent! 🌟"
  - 60-79% → "Good Job! 👍"
  - 40-59% → "Not Bad! 💪"
  - <40% → "Keep Practicing! 📚"
- [ ] Difficulty badge shows selected difficulty
- [ ] Statistics show correct/incorrect breakdown
- [ ] "Play Again" button works (returns to start)
- [ ] "Share Results" button is visible

## ✅ Share Functionality

### Desktop Testing
- [ ] Click "Share Results" button
- [ ] Green notification appears: "✅ Copied to clipboard!"
- [ ] Notification disappears after 2 seconds
- [ ] Paste clipboard content to verify format
- [ ] Share text includes:
  - Score (e.g., "8/10 (80%)")
  - Difficulty level
  - Performance message
  - Game URL

### Mobile Testing (if available)
- [ ] Click "Share Results" button
- [ ] Native share sheet appears
- [ ] Can share to various apps (Messages, Email, Social Media)
- [ ] Share text is properly formatted

## ✅ Responsive Design
- [ ] Test on desktop (full width)
- [ ] Test on tablet (medium width)
- [ ] Test on mobile (small width)
- [ ] All buttons are clickable and properly sized
- [ ] Text is readable at all sizes
- [ ] Layout doesn't break

## ✅ User Flow
- [ ] Complete full game flow: Start → Play 10 rounds → End
- [ ] Use "Play Again" to restart
- [ ] Try all three difficulty levels
- [ ] Share results at least once

## 🐛 Edge Cases
- [ ] Rapidly clicking choice buttons (should be disabled after selection)
- [ ] Clicking "Start Game" multiple times (shouldn't break state)
- [ ] Sharing on browsers that don't support clipboard API
- [ ] Very long screen (portrait mobile)
- [ ] Very wide screen (ultrawide desktop)

## 📊 Score Verification
Play a full game and verify:
- [ ] Score starts at 0
- [ ] Score increments only on correct answers
- [ ] Final score matches number of correct answers
- [ ] Percentage calculation: (score / 10) * 100

## 🎨 Visual Polish
- [ ] All animations are smooth
- [ ] Color transitions work properly
- [ ] Hover effects on all buttons
- [ ] No visual glitches or overlapping elements
- [ ] Gradients display correctly
