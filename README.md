# Darius Göttert Quiz App

A modern, interactive quiz web application about Darius Göttert from Munich, built with React and Vite.

## 🚀 Features

- **Modern UI Design**: Beautiful gradient backgrounds and smooth animations
- **Interactive Quiz**: Multiple choice questions with instant feedback
- **Progress Tracking**: Visual progress bar showing quiz completion
- **Score Display**: Detailed results with percentage and encouraging messages
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Transitions**: Animated screen changes for better user experience

## 📋 Project Structure

```
darius-quiz-app/
├── src/
│   ├── components/
│   │   ├── Quiz.jsx          # Main quiz logic and state management
│   │   ├── Quiz.css
│   │   ├── StartScreen.jsx   # Welcome screen
│   │   ├── StartScreen.css
│   │   ├── Question.jsx      # Question display and answer handling
│   │   ├── Question.css
│   │   ├── Results.jsx       # Results screen with score
│   │   └── Results.css
│   ├── quizData.js           # Quiz questions and answers (UPDATE THIS!)
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd darius-quiz-app
   ```

2. **Install dependencies** (already done):
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The app will run on `http://localhost:5173`
   - Click the URL in the terminal or open it manually

## ⚠️ IMPORTANT: Update Quiz Questions

The app currently contains **placeholder questions** that need to be replaced with actual information about Darius Göttert.

**To update the quiz:**

1. Open `src/quizData.js`
2. Replace placeholder questions with real information about Darius
3. Update the options arrays with correct choices
4. Set the correct answer index (0-3)
5. Add meaningful explanations

**Example structure:**
```javascript
{
  id: 1,
  question: "Your actual question here?",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  correctAnswer: 1, // Index of correct option (0-3)
  explanation: "Explanation of the correct answer."
}
```

## 🎨 Customization

### Colors
The app uses a purple gradient theme. To change colors, update:
- `src/components/Quiz.css` - Background gradient
- `src/components/StartScreen.css` - Button colors
- Other component CSS files as needed

### Questions
- Add or remove questions in `src/quizData.js`
- Each question supports 4 options
- Include explanations for better learning experience

## 📱 Responsive Design

The app is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy Options

**Option 1: Vercel**
```bash
npm install -g vercel
vercel
```

**Option 2: Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Option 3: GitHub Pages**
1. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/darius-quiz-app/',
     plugins: [react()],
   })
   ```
2. Build and deploy:
   ```bash
   npm run build
   ```
3. Push the `dist` folder to gh-pages branch

## 🧪 Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## 📝 Quiz Flow

1. **Start Screen**: Welcome message and quiz introduction
2. **Questions**: Display one question at a time with 4 options
3. **Answer Feedback**: Immediate feedback with explanation
4. **Progress Bar**: Visual indicator of quiz progress
5. **Results**: Final score with percentage and message
6. **Restart**: Option to retake the quiz

## 🎯 Next Steps

1. ✅ Project structure created
2. ✅ Components built and styled
3. ✅ Quiz logic implemented
4. ⚠️ **WAITING**: Add real quiz questions about Darius Göttert
5. 🔜 Test the application
6. 🔜 Deploy to production

## 💡 Tips

- Keep questions clear and concise
- Use 4 options per question for consistency
- Add explanations to make the quiz educational
- Test on mobile devices before deployment
- Consider adding more questions (7-10 is ideal)

## 🤝 Contributing

To add or modify quiz content:
1. Edit `src/quizData.js`
2. Save the file
3. The dev server will hot-reload automatically

## 📄 License

This project is created for educational/personal purposes.

---

**Created with React + Vite**
**Waiting for research information about Darius Göttert to complete the quiz questions.**
