# ForteLab Website

A modern, bilingual static website for ForteLab - Innovation. Connection. Future.

## Features

- **Bilingual Support**: English and Thai language switching
- **Modern Design**: Inspired by Dyte.io with gradient backgrounds and smooth animations
- **Responsive**: Mobile-first design that works across all devices
- **Performance Optimized**: Static HTML/CSS/JS with optimized loading
- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO Friendly**: Meta tags, structured data, and clean URLs
- **PWA Ready**: Web app manifest and service worker support
- **Brand Consistency**: Tech Blue (#1B5CFF) company colors throughout

## Tech Stack

- **HTML5**: Semantic markup with modern standards
- **CSS3**: Custom properties, Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks, pure JS for interactions
- **Fonts**: IBM Plex Sans (English) + Prompt (Thai) from Google Fonts

## Project Structure

```
fortelab/
├── index.html                 # Main HTML file
├── assets/
│   ├── styles.css            # Main stylesheet
│   ├── translations.js       # Bilingual content and language switching
│   ├── main.js              # Main JavaScript functionality
│   ├── fortelab_icon.svg    # Company logo (Tech Blue #1B5CFF)
│   ├── favicon.ico          # Website favicon
│   └── site.webmanifest     # PWA manifest file
├── README.md                # This file
└── CLAUDE.md               # Development guidelines
```

## Development

### Local Development

1. Clone this repository
2. Open a local server (Python, Node.js, or VS Code Live Server)
3. Navigate to `http://localhost:PORT`

**Using Python:**
```bash
cd fortelab
python3 -m http.server 8000
```

**Using Node.js:**
```bash
npx serve .
```

### Making Changes

1. **Content Updates**: Edit `assets/translations.js` for bilingual content
2. **Styling**: Modify `assets/styles.css` for design changes
3. **Functionality**: Update `assets/main.js` for interactive features
4. **Structure**: Edit `index.html` for layout changes

### Language Switching

The website supports English (default) and Thai:
- Language preference is stored in localStorage
- All content is defined in `assets/translations.js`
- CSS adjusts typography for different languages
- Add new languages by extending the translations object

## Deployment to GitHub Pages

### Option 1: GitHub Repository Settings

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://username.github.io/repository-name`

### Option 2: GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

### Custom Domain (Optional)

1. Add `CNAME` file to root directory with your domain
2. Configure DNS to point to GitHub Pages servers
3. Enable HTTPS in repository settings

## Design System

### Colors
- **Primary Blue**: #1B5CFF
- **Light Blue**: #4C7EFF  
- **Purple**: #8B5CF6
- **Navy**: #0B2545
- **Gray**: #6B7280

### Gradients
- **Primary**: Linear gradient from Blue to Purple
- **Secondary**: Linear gradient from Light Blue to Cyan

### Typography
- **English**: IBM Plex Sans (400, 500, 600, 700)
- **Thai**: Prompt (400, 500, 600, 700)
- **Headings**: Bold weights for impact
- **Body**: Regular weight for readability

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Two variants (primary, ghost) with hover states
- **Navigation**: Sticky header with backdrop blur
- **Forms**: Clean inputs with focus states

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Loading Time**: Sub-3 second load times
- **Bundle Size**: <500KB total (including fonts)

## Content Guidelines

### Writing Style
- **Professional yet approachable**: Balance technical expertise with accessibility
- **Action-oriented**: Use active voice and clear CTAs
- **Bilingual consistency**: Ensure translations maintain the same tone
- **SEO optimized**: Include relevant keywords naturally

### Visual Guidelines
- **Consistent spacing**: Use the design system's spacing scale
- **Readable typography**: Maintain proper contrast ratios
- **Responsive images**: Optimize for different screen sizes
- **Brand consistency**: Follow ForteLab's brand guidelines

## Social Media

Connect with ForteLab:
- **Facebook**: https://www.facebook.com/profile.php?id=61579829097837
- **LinkedIn**: https://www.linkedin.com/company/fortelab-ai

## License

© 2025 ForteLab — All rights reserved.

---

For questions or support, please contact the development team or follow us on social media.
