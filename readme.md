# Puzzle Game - Setup Guide

## 📁 File Structure

```
puzzle-game/
│
├── index.html          # Main game file
├── config.js          # Game configuration
├── translations.js    # Language translations
├── background.png     # Background image
├── winscreen.png      # Victory screen image
└── README.md          # This file
```

## 🚀 Quick Start

1. **Download all files** to the same folder
2. **Add your images**:
   - `background.png` - Game background image
   - `winscreen.png` - Victory screen image
3. **Open `index.html`** in a web browser
4. Click **"Start Game"** to begin!

## ⚙️ Configuration Guide

### ⏱️ Setting the Start Time (config.js)

Set the countdown timer duration in seconds:

```javascript
startTimeSeconds: 3600  // 1 hour (60 minutes × 60 seconds)
```

Common time settings:
- 30 minutes: `1800`
- 45 minutes: `2700`
- 1 hour: `3600`
- 90 minutes: `5400`
- 2 hours: `7200`

### 📝 Setting Up Puzzles (config.js)

Edit the `config.js` file to customize your puzzles:

```javascript
puzzles: [
    {
        title: "Your Puzzle Title",
        hints: [
            {
                text: "First hint - easy clue",
                penalty: 30  // Time penalty in seconds
            },
            {
                text: "Second hint - medium clue",
                penalty: 60
            },
            {
                text: "Third hint - gives away the answer",
                penalty: 90
            }
        ]
    }
]
```

**Tips for creating puzzles:**
- Start with easier hints and increase difficulty
- Set smaller penalties for vague hints (deducts less time)
- Set larger penalties for hints that give away the answer (deducts more time)
- You can have any number of hints per puzzle (not limited to 3)
- Remember: penalties are deducted from the countdown timer!

### 🔐 Setting the Final Password

In `config.js`, change the final password:

```javascript
finalPassword: 'YOUR_SECRET_WORD'
```

The password is **case-insensitive** (ENIGMA = enigma = Enigma).

### 🌍 Language Configuration

#### Method 1: Force a specific language
In `config.js`, set the language:

```javascript
language: 'en'  // Options: en, pl, de, fr, es
```

#### Method 2: Add a new language
Edit `translations.js` and add your language:

```javascript
translations: {
    // ... existing languages ...
    
    it: {  // Italian example
        gameTitle: "Missione Enigmi",
        timeElapsed: "Tempo Trascorso",
        startButton: "Inizia il Gioco",
        finalPuzzle: "Enigma Finale",
        enterPassword: "Inserisci Password",
        cancel: "Annulla",
        submit: "Invia",
        congratulations: "Congratulazioni!",
        yourTime: "Il Tuo Tempo",
        hint: "Suggerimento",
        puzzle: "Enigma"
    }
}
```

## 🎮 Game Features

### Countdown Timer System
- **Starts** with configured time (default: 1 hour)
- **Counts down** to 00:00:00
- **Color changes** as time runs low:
  - Green: Normal time
  - Orange: Less than 5 minutes (warning)
  - Red + Pulsing: Less than 1 minute (critical)
- **Time's up** screen when timer reaches zero

### Hint System
- Each hint **deducts time** from the countdown timer
- First use of a hint applies the time penalty
- Subsequent views of the same hint are free (no additional penalty)
- Used hints change color to green to indicate they've been activated
- Touch-optimized buttons for tablet/touchscreen use

### Two-Row Grid Layout
- Puzzles displayed in a **responsive grid** (not horizontal scroll)
- **Desktop**: Multiple columns based on screen size
- **Tablet**: 2 columns for optimal viewing
- **Mobile**: Single column for easy navigation
- Fully **touch-screen optimized** interface

### Final Puzzle
- Button becomes active after starting the game
- Opens a modal for password entry
- Validates the password (case-insensitive)
- Shows victory screen with total time used upon success

## 🎨 Customization Options

### Images
- **background.png**: Recommended size: 1920x1080 or larger
- **winscreen.png**: Recommended size: 1920x1080 or larger
- Both images should be in the same folder as index.html

### Styling
The game uses a modern, Apple-inspired design with:
- Glassmorphism effects
- Smooth animations
- Gradient buttons
- Responsive layout

To modify colors, edit the CSS in `index.html`:
- Primary gradient: `#667eea` to `#764ba2`
- Secondary gradient: `#f093fb` to `#f5576c`

## 📱 Mobile & Touch Screen Support

The game is fully optimized for touch screens and works on:
- **Touch screen kiosks** and tablets (iPad, Android tablets)
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- **Interactive displays** and touch-enabled monitors

Touch optimizations include:
- Large, finger-friendly buttons
- No hover-dependent interactions
- Prevented accidental zooming
- Smooth touch scrolling
- Responsive grid layout
- No context menus on long press

## 🐛 Troubleshooting

### Images not showing?
- Ensure `background.png` and `winscreen.png` are in the same folder as `index.html`
- Check file names are exactly as specified (case-sensitive on some systems)

### Hints not working?
- Make sure you've started the game first
- Check that the `config.js` file is properly formatted (no syntax errors)

### Password not accepted?
- Password is case-insensitive
- Check for extra spaces in the `finalPassword` setting
- Ensure there are no special characters causing issues

## 💡 Advanced Tips

### Creating a Puzzle Hunt
1. Create physical puzzles that lead to hints
2. Each physical puzzle solution reveals which hint to use
3. Final puzzle combines all previous solutions
4. Use QR codes to link physical puzzles to the digital game

### Team Play
- Display the game on a large screen
- Teams work together to solve puzzles
- Use hint penalties to encourage strategic thinking
- Add a leaderboard by recording times

### Educational Use
- Create subject-specific puzzles (history, science, literature)
- Use hints to teach concepts progressively
- Adjust penalties based on learning objectives
- Track completion times for assessment

## 📄 License

This game is provided as-is for personal and educational use. Feel free to modify and distribute as needed.

## 🤝 Support

For questions or issues:
1. Check this README first
2. Ensure all files are in the correct location
3. Verify no syntax errors in config files
4. Test in different browsers if issues persist

Happy puzzling! 🧩