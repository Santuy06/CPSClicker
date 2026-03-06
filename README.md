# CPS Test Website

A minimalist white-themed Clicks Per Second (CPS) test website built with React and Vite.

## Features

✨ **Core Functionality**
- Multiple time modes: 1s, 5s, 10s, 15s, 30s, 60s, 100s
- Real-time click tracking and timer
- CPS (Clicks Per Second) calculation
- Performance ranking system

🎨 **Design**
- Clean, minimalist white theme
- Smooth animations and transitions
- Ripple click effects
- Fully responsive (mobile, tablet, desktop)

📊 **Results**
- Detailed statistics display
- Performance graph visualization
- Fun ranking titles based on CPS
- Auto-clicker detection (CPS > 50)
- Social sharing (Twitter, Facebook, WhatsApp)

## Local Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd c:\Users\DAUD ACHMAD\Documents\ProjectCoding\CPS
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from the project directory:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Method 2: Vercel Dashboard

1. Visit [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository or upload the project folder
4. Vercel will automatically detect Vite and configure the build settings
5. Click "Deploy"

### Vercel Configuration

The project includes a `vercel.json` file that handles SPA routing:
- All routes redirect to `index.html`
- This ensures the app works correctly with client-side routing

## Technology Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Recharts** - Chart visualization
- **CSS3** - Styling with animations

## Project Structure

```
CPS/
├── src/
│   ├── components/
│   │   ├── TimeSelector.jsx    # Time duration selector
│   │   ├── TimeSelector.css
│   │   ├── ClickPad.jsx         # Main click area
│   │   ├── ClickPad.css
│   │   ├── Results.jsx          # Results display
│   │   └── Results.css
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Global styles
│   ├── main.jsx                 # Entry point
│   └── index.css
├── public/
├── vercel.json                  # Vercel deployment config
├── package.json
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - Feel free to use this project for personal or commercial purposes.

---

Made with ❤️ | Minimalist CPS Tester
