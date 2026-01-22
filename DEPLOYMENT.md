# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd /tmp/darius-quiz-app
   vercel
   ```

3. **Follow prompts:**
   - Login to Vercel
   - Confirm project settings
   - Get your live URL!

**Or use Vercel website:**
- Go to [vercel.com](https://vercel.com)
- Import Git repository
- Automatic deployment!

---

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

**Or drag & drop:**
- Go to [netlify.com](https://netlify.com)
- Drag the `dist` folder
- Instant deployment!

---

### Option 3: GitHub Pages

1. **Update `vite.config.js`:**
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     base: '/darius-quiz-app/',
     plugins: [react()],
   })
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   # Install gh-pages
   npm install -D gh-pages
   
   # Add to package.json scripts:
   "deploy": "gh-pages -d dist"
   
   # Deploy
   npm run deploy
   ```

---

### Option 4: Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login & Initialize:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Build & Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

---

## Pre-Deployment Checklist

- [ ] All quiz questions updated with real data
- [ ] No placeholder text remains
- [ ] Tested locally (`npm run dev`)
- [ ] Production build works (`npm run build` then `npm run preview`)
- [ ] Responsive design tested
- [ ] All links and functionality work
- [ ] Quiz questions are accurate

## Build Command

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

## Environment Variables

This project doesn't use environment variables, but if you need them:

Create `.env` file:
```
VITE_APP_TITLE=Darius Göttert Quiz
```

Access in code:
```javascript
const title = import.meta.env.VITE_APP_TITLE
```

## Post-Deployment

After deployment:
1. Test all quiz functionality
2. Verify on mobile devices
3. Check loading speed
4. Share the URL!

## Troubleshooting

**Build fails:**
- Check Node version: `node --version` (should be 18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

**Blank page after deploy:**
- Check `vite.config.js` base path
- Verify all imports are correct
- Check browser console for errors

**Styles not loading:**
- Ensure all CSS files are imported
- Check build output includes CSS

---

**The app is ready for deployment once quiz questions are updated!**
