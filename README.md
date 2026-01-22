# 👥 Person Quiz App - German Entrepreneurs Edition

A modern, interactive quiz web application featuring **4 German entrepreneurs**, built with React and Vite. Test your knowledge about startup founders and venture builders!

## 🎯 Featured Persons

### 🚀 Darius Göttert
Venture Builder & General Partner of Young Founders Fund (€10M) from Munich

### 💼 Ben Erler  
Chairman of Young Founders Network, B. Erler Ventures UG founder

### ⚡ Philipp Schmechel
Co-founder of Trimlog (Logistics-Tech) & QiTech Recycling (Sustainability)

### 🎨 Katharina Zieße Suari
LMU München student, Marketing/Videography entrepreneur, Etsy shop owner

## ✨ Features

- **🎨 Person Selection Screen**: Beautiful gradient cards with animations
- **📊 4 Complete Quizzes**: 40 questions total (10 per person)
- **💡 Interactive Learning**: Instant feedback with detailed explanations
- **📈 Progress Tracking**: Visual progress bar for each quiz
- **🎯 Score Display**: Percentage-based results with encouraging messages
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile
- **🎭 Smooth Animations**: Professional transitions and hover effects
- **🔄 Multi-Quiz Support**: Switch between persons easily

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open in Browser

Navigate to `http://localhost:5173` and start exploring!

## 📋 Project Structure

```
darius-quiz-app/
├── src/
│   ├── components/
│   │   ├── PersonSelector.jsx    # 👥 NEW: Person selection screen
│   │   ├── PersonSelector.css    # 🎨 NEW: Selection styles
│   │   ├── Quiz.jsx              # 🔄 Main quiz logic (updated)
│   │   ├── Quiz.css
│   │   ├── StartScreen.jsx       # 🔄 Welcome screen (updated)
│   │   ├── StartScreen.css
│   │   ├── Question.jsx          # Question display
│   │   ├── Question.css
│   │   ├── Results.jsx           # 🔄 Results screen (updated)
│   │   └── Results.css
│   ├── data/
│   │   └── personQuizzes.js      # 📊 NEW: 3 new person quizzes
│   ├── quizData.js               # Original Darius quiz
│   ├── App.jsx                   # 🔄 Main app (updated)
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## 🎮 How to Play

1. **Select a Person**
   - Start screen shows 4 gradient cards
   - Each card represents a different entrepreneur
   - Click any card to start their quiz

2. **Answer Questions**
   - 10 multiple-choice questions per person
   - Click your answer to submit
   - Instant feedback with explanation

3. **View Results**
   - See your score and percentage
   - Get an encouraging message
   - Choose to retry or select another person

4. **Explore More**
   - Return to selection screen
   - Try all 4 quizzes
   - Learn about each entrepreneur

## 📊 Quiz Content Breakdown

### Darius Göttert (10 Questions)
- Location and origin (Munich, moved at 16)
- Young Founders Fund (€10M GP)
- Early entrepreneurship (age 15, record watches)
- Ventures: inGemeinschaft, Spreadly, 3Bears
- Investment portfolio: TasyAI, FORA, Infinite Print
- Startup incubator near Stachus

### Ben Erler (10 Questions)
- B. Erler Ventures UG (Viersen)
- Young Founders Network Chairman
- Current location (Darmstadt)
- Munich startup scene activity
- TechTailor, Startup in School
- EUpreneur membership

### Philipp Schmechel (10 Questions)
- Origins (Krefeld)
- Trimlog logistics-tech startup
- QiTech Recycling (sustainable plastic)
- Education (Gymnasium am Stadtpark)
- Sports (Sailing, Triathlons)
- Startup Teens involvement
- Geographic journey (Krefeld → Kiel → Darmstadt)

### Katharina Zieße Suari (10 Questions)
- Hometown (Kronberg) → Current (München)
- LMU München student
- Etsy entrepreneurship (2 shops: jewelry & bags)
- Wire crystal jewelry designer
- Entrepreneurship Talent Akademie
- Young Founders Network Munich
- Creative focus (Marketing, Branding, Videography)

## 🎨 Design & UX

### Color Themes (Gradients)
- **Darius:** Purple (`#667eea → #764ba2`)
- **Ben:** Blue (`#3b82f6 → #1e40af`)
- **Philipp:** Green (`#10b981 → #047857`)
- **Katharina:** Pink (`#ec4899 → #9333ea`)

### Animations
- Fade-in on selection screen
- Staggered card entrance (100ms delay each)
- Hover lift and scale effects
- Smooth transitions between screens
- Emoji rotation on hover

### Responsive Breakpoints
- **Desktop:** 3-column grid (1024px+)
- **Tablet:** 2-column grid (768px - 1023px)
- **Mobile:** Single column (< 768px)

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
```

### Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool & dev server
- **CSS3** - Styling with gradients and animations
- **ESLint** - Code quality

## 📱 Responsive Design

Fully tested on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 768px)
- ✅ iOS Safari
- ✅ Android Chrome

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

**GitHub Pages** (Recommended)
```bash
# Update vite.config.js base path
npm run build
# Deploy dist folder to gh-pages branch
```

**Vercel**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📚 Documentation

- **[PERSON_QUIZZES_README.md](./PERSON_QUIZZES_README.md)** - Detailed person quiz documentation
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Original project summary
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment guide

## 🎓 Educational Value

Learn about:
- German startup ecosystem
- Entrepreneurial journeys
- Company founding stories
- Geographic startup hubs
- Professional backgrounds
- Personal interests of founders

## 💡 Key Features

### Person Selection
- Modern card-based interface
- Unique gradient for each person
- Emoji icons for visual identity
- Smooth hover animations
- Mobile-optimized layout

### Quiz Experience
- 10 questions per person
- 4 answer options each
- Instant feedback
- Educational explanations
- Progress visualization
- Final score with percentage

### Quality of Life
- Back navigation between screens
- Retry same quiz
- Switch to different person
- Responsive on all devices
- Fast load times
- Smooth transitions

## 📈 Statistics

- **Total Quizzes:** 4
- **Total Questions:** 40
- **Answer Options:** 160
- **Lines of Code:** ~800 (including new features)
- **Components:** 7
- **Data Files:** 2

## 🤝 Contributing

To add more person quizzes:

1. Research the person thoroughly
2. Create 10 diverse questions in `src/data/personQuizzes.js`
3. Add person card in `src/components/PersonSelector.jsx`
4. Choose unique gradient and emoji
5. Test thoroughly
6. Submit pull request

## 🔄 Version History

**v2.0.0** (January 2026) - **CURRENT**
- ✨ Added 3 new person quizzes
- ✨ Person selection screen
- ✨ 30 new questions
- ♻️ Enhanced UI/UX
- 📱 Improved mobile experience

**v1.0.0** (Previous)
- Initial Darius Göttert quiz

## 📄 License

This project is created for educational/personal purposes.

## 🙏 Acknowledgments

- Quiz content based on publicly available information
- Built with React, Vite, and modern web technologies
- Designed with accessibility and user experience in mind

---

**Built with ❤️ using React + Vite**

**Ready to play?** Run `npm run dev` and visit `http://localhost:5173`
