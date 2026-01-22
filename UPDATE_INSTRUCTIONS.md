# 📝 Quick Guide: Updating Quiz Questions

## Location
File to edit: **`src/quizData.js`**

## Current Status
- ✅ App structure complete
- ✅ All components working
- ⚠️ Questions are PLACEHOLDERS
- ❌ Need real information about Darius Göttert

## How to Update

### 1. Open the quiz data file
```bash
# Edit this file:
src/quizData.js
```

### 2. Replace each question

**Current placeholder:**
```javascript
{
  id: 2,
  question: "[PLACEHOLDER] What is Darius's profession?",
  options: [
    "Option A - To be updated",
    "Option B - To be updated",
    "Option C - To be updated",
    "Option D - To be updated"
  ],
  correctAnswer: 0,
  explanation: "This answer needs to be updated with actual research."
}
```

**Replace with real data:**
```javascript
{
  id: 2,
  question: "What is Darius Göttert's profession?",
  options: [
    "Software Engineer",
    "Medical Doctor",
    "Teacher",
    "Artist"
  ],
  correctAnswer: 0, // 0 = first option (Software Engineer)
  explanation: "Darius Göttert is a software engineer based in Munich."
}
```

### 3. Important Notes

- **correctAnswer** is the INDEX (0, 1, 2, or 3) not the actual answer
  - 0 = first option
  - 1 = second option
  - 2 = third option
  - 3 = fourth option

- Keep questions clear and concise
- Provide 4 options for each question
- Write helpful explanations
- You can add more questions or remove some

### 4. Add/Remove Questions

**To add a question:**
```javascript
{
  id: 6, // Increment the ID
  question: "Your new question?",
  options: ["A", "B", "C", "D"],
  correctAnswer: 2,
  explanation: "Explanation here."
}
```

**To remove:** Just delete the entire question object

### 5. Test Your Changes

After updating:
```bash
# If dev server is running, it will auto-reload
# If not, start it:
npm run dev
```

## Example Topics for Questions

Based on research about Darius Göttert, you might include questions about:
- Birthplace / hometown (Munich confirmed)
- Profession / career
- Education
- Achievements
- Hobbies / interests
- Notable projects
- Timeline / important dates
- Personal facts

## ✅ Checklist

Before finalizing:
- [ ] All placeholder text removed
- [ ] All questions are accurate
- [ ] Correct answer indices are set properly
- [ ] Explanations are informative
- [ ] Tested the quiz in browser
- [ ] No [PLACEHOLDER] tags remain

---

**Ready to receive research information about Darius Göttert!**
