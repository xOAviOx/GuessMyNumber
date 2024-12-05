# 🎯 Guess My Number Game  

A fun and interactive game built as part of the **DOM Basics** section in my JavaScript learning journey. The goal? Guess the randomly generated secret number and win!

---

## 🌟 Features  

- 🕹️ **Interactive Gameplay**: Guess the number between 1 and 20.  
- 🔊 **Sounds for Actions**:  
  - Click sound when checking your guess.  
  - Victory and failure sounds for dramatic effect!  
- 🎉 **Victory Animation**: Celebrate your win with confetti!  
- 🛠️ **Reset Functionality**: Play again with the click of a button.  

---

## 🛠️ Tech Stack  

- **HTML**: Markup for the game structure.  
- **CSS**: Simple styling for a clean interface.  
- **JavaScript**:  
  - DOM manipulation to handle user interaction.  
  - Logic for random number generation and gameplay.  

---

## 🚀 How to Play  

1. Enter a number between **1** and **20** in the input field.  
2. Click the **"Check"** button to see if your guess is correct.  
3. Get feedback for each guess:  
   - **Too High** 🆙  
   - **Too Low** 🔽  
   - **Correct!** 🎉  
4. Lose all your points, and it's **Game Over**. Reset the game using the **"Again"** button.  

---

## 📷 Screenshots  

| Victory Screen               | Guessing in Progress        | Game Over                     |
|------------------------------|-----------------------------|-------------------------------|
| ![Victory Screenshot](assets/victory.png) | ![In Progress Screenshot](assets/guessing.png) | ![Game Over Screenshot](assets/gameover.png) |

---

## 🗂️ Project Structure  

```plaintext
guessmynumber/
├── assets/
│   ├── click.mp3       # Sound for button clicks
│   ├── victory.mp3     # Sound for victory
│   ├── victory2.mp3    # Additional victory sound
│   ├── error.mp3       # Sound for errors
│   ├── lose.mp3        # Sound for losing
├── index.html          # Game structure
├── style.css           # Game styling
└── script.js           # Game logic and interactivity
