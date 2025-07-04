# Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my work as a web developer. The site features a clean, minimalist design with dark mode support and smooth animations.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Engaging scroll and interaction animations
- **Contact Form**: Validated contact form with anti-spam measures
- **Portfolio Gallery**: Showcase of featured projects with descriptions
- **Skills Section**: Visual representation of technical skills
- **Blog Section**: Ready for future blog posts and tutorials
- **SEO Optimized**: Includes meta tags and OpenGraph tags
- **Accessibility**: WCAG compliant with proper contrast and semantic HTML

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox/Grid)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts
- Intersection Observer API

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/javi2481/sitio_personal.git
   ```

2. Navigate to the project directory:
   ```bash
   cd sitio_personal
   ```

3. Open `index.html` in your browser to view the site locally.

## 📂 Project Structure

```
sitio_personal/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   ├── style.css      # Main styles
│   │   └── dark-mode.css  # Dark theme styles
│   ├── js/
│   │   ├── main.js        # Main JavaScript
│   │   └── form-validation.js  # Form validation
│   └── images/            # Image assets
└── README.md              # Project documentation
```

## 🔧 Customization

### Adding Projects

1. Open `index.html`
2. Locate the Portfolio section
3. Add new project using the existing template structure:
   ```html
   <div class="portfolio-item">
       <div class="portfolio-image">
           <img src="path/to/image" alt="Project Name">
           <!-- ... -->
       </div>
       <div class="portfolio-content">
           <h3>Project Name</h3>
           <p>Project Description</p>
           <!-- ... -->
       </div>
   </div>
   ```

### Modifying Styles

- Main styles are in `assets/css/style.css`
- Dark mode styles are in `assets/css/dark-mode.css`
- Colors and variables can be modified in the `:root` section of `style.css`

## 📱 Responsive Design

The website is responsive across different screen sizes:
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## 🌙 Dark Mode

Dark mode can be toggled using the moon/sun icon in the navigation bar. The preference is saved in localStorage.

## 📝 Form Validation

The contact form includes:
- Real-time validation
- Required field checking
- Email format validation
- Anti-spam measures
- Success/error messages
- Character limits

## 🚀 Deployment

### GitHub Pages Deployment

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to repository Settings > Pages
3. Set source branch to `main`
4. Save changes
5. Your site will be available at `https://javi2481.github.io/sitio_personal`

### Custom Domain (Optional)

1. Purchase a domain name
2. Add a CNAME record pointing to `javi2481.github.io`
3. Add your domain in GitHub Pages settings
4. Add a CNAME file to your repository

## 🔍 SEO

The website includes:
- Meta descriptions
- OpenGraph tags
- Semantic HTML
- Alt text for images
- Proper heading hierarchy

## ♿ Accessibility

- ARIA labels
- Semantic HTML
- Keyboard navigation
- Color contrast compliance
- Screen reader friendly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For any questions or suggestions, please feel free to reach out through the contact form on the website.
