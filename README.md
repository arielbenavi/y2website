# Y2K E-commerce Website

A nostalgic Windows 2000-inspired e-commerce platform built with modern web technologies.

## 🖥️ Live Demo
[shop.pudabeats.com](https://shop.pudabeats.com)

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.0
- **Build Tool:** Vite 7.0
- **Styling:** Tailwind CSS 4.1.10
- **Routing:** React Router DOM 6.28.0
- **Deployment:** Vercel
- **Domain Management:** GoDaddy DNS

## ✨ Features

### UI/UX Design
- **Authentic Windows 2000 Aesthetic:** Pixel recreation of classic desktop interface
- **Desktop Metaphor:** Interactive desktop icons with hover effects and authentic cursor interactions
- **Window System:** Folder-style product pages with functional title bars and window controls

### Technical Implementation
- **Component-Based Architecture:** Modular React components for scalable development
- **Client-Side Routing:** Navigation using React Router
- **Responsive Design:** Mobile-optimized while maintaining retro aesthetic
- **Asset Management:** Organized file structure for images, icons, and fonts
- **SEO Optimization:** Custom meta tags for social media link previews

### E-commerce Functionality
- **Product Catalog:** Dynamic product listings with grid layouts
- **Category Navigation:** Organized product categories (T-Shirts, Hoodies)
- **External Integration:** Direct Instagram DM integration for order processing
- **Information Pages:** Disclaimer and FAQ sections with image-based content

## 🏗️ Project Structure

```
src/
├── pages/
│   ├── Desktop.jsx          # Main landing page with desktop icons
│   ├── Hoodies.jsx          # Hoodies product category
│   ├── Tshirts.jsx          # T-shirts product category
│   ├── Warning.jsx          # Disclaimer page
│   └── FAQ.jsx              # Size guide page
├── App.jsx                  # Main routing component
└── main.jsx                 # Application entry point

public/
├── icons/                   # Desktop and UI icons
├── images/                  # Product images
├── fonts/                   # Custom DOS font files
└── *.png                    # Page-specific assets
```

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/y2website.git
   cd y2website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🧩 Key Technical Challenges Solved

1. **CSS-Only Window System:** Implemented authentic Windows UI without JavaScript frameworks
2. **Font Integration:** Successfully integrated custom DOS fonts for cross-browser compatibility
3. **Responsive Retro Design:** Balanced nostalgic aesthetics with modern usability standards
4. **Asset Optimization:** Efficient loading of high-resolution retro graphics

## 📊 Performance Optimizations

- Optimized image formats and compression
- Efficient bundle splitting with Vite
- Minimal runtime dependencies
- Fast deployment with Vercel edge network

## 🔧 Configuration Files

- `vite.config.js` - Build tool configuration
- `tailwind.config.js` - CSS framework customization
- `package.json` - Project dependencies and scripts

## 🌐 Deployment

Deployed on Vercel with automatic builds triggered by GitHub commits. Custom domain configured through GoDaddy DNS management.