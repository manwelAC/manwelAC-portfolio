# Manwel Portfolio 2

A pixel art style portfolio website built with Next.js and the XPDR_02 pixel font.

## Setup Instructions

### 1. Copy Your Font File
Copy your `XPDR_02.ttf` font file from:
- `C:\Users\johnm\Downloads\xpaider_pixel_expl2\XPDR_02.ttf`

To:
- `C:\Users\johnm\manwel-portfolio-2\public\fonts\XPDR_02.ttf`

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### 4. Build for Production
```bash
npm run build
npm start
```

## Project Structure
- `app/` - Next.js App Router pages and layouts
- `app/page.tsx` - Main portfolio page
- `app/page.module.css` - Styling for portfolio layout
- `app/globals.css` - Global styles and font configuration
- `public/fonts/` - Font files directory
- `public/` - Static assets (will be deployed to Vercel)

## Font Configuration
The pixel font is configured in `app/globals.css`:
```css
@font-face {
  font-family: 'XPaider';
  src: url('/fonts/XPDR_02.ttf') format('truetype');
}
```

## Deployment to Vercel
1. Push your project to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy - Vercel will automatically include your `public/fonts/` directory

The font file will be served from your Vercel deployment just like it works locally.

## Customization
- Edit `app/page.tsx` to update content
- Edit `app/page.module.css` to adjust styling
- Edit `app/globals.css` to change global styles or colors

## Features
- ✅ Pixel art style design with retro borders
- ✅ Responsive layout (desktop, tablet, mobile)
- ✅ Custom pixel font (XPDR_02)
- ✅ Grid background pattern
- ✅ Project showcase sections
- ✅ Social media links
- ✅ Ready for Vercel deployment
