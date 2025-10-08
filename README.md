
# ACEB Website - Association of Circular Economists of the Balkans

This is the official website for ACEB (Association of Circular Economists of the Balkans / Asocijacija Cirkularnih Ekonomista Balkana), built as a fully bilingual (English/Serbian) React application with Vite.

## 🌟 Features

- **Fully Bilingual**: Complete support for English and Serbian languages with proper i18n routing
- **SEO Optimized**: Meta tags, structured data, sitemap.xml, and robots.txt
- **Responsive Design**: Mobile-first approach that works on all devices
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Modern UI**: Clean design with CSS modules and custom theme
- **Professional Content**: 11 complete pages with mock data for news, events, resources, and directory

## 🚀 Live Demo

- **English**: [http://localhost:5173/en](http://localhost:5173/en)
- **Serbian**: [http://localhost:5173/sr](http://localhost:5173/sr)

## 📁 Project Structure

```
aceb_website/
├── public/
│   ├── robots.txt              # SEO robots file
│   └── sitemap.xml             # XML sitemap for search engines
├── src/
│   ├── assets/                 # Logo files (language-specific)
│   │   ├── aceb-logo-en.png
│   │   └── aceb-logo-sr.png
│   ├── components/             # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── LangSwitch.tsx
│   │   └── Section.tsx
│   ├── data/                   # Mock data (JSON files)
│   │   ├── directory.json
│   │   ├── events.en.json
│   │   ├── events.sr.json
│   │   ├── news.en.json
│   │   ├── news.sr.json
│   │   ├── resources.en.json
│   │   └── resources.sr.json
│   ├── i18n/                   # Internationalization
│   │   └── index.ts            # Language dictionaries and helpers
│   ├── pages/                  # Page components
│   │   ├── About.tsx
│   │   ├── Certification.tsx
│   │   ├── Contact.tsx
│   │   ├── Directory.tsx
│   │   ├── Events.tsx
│   │   ├── Home.tsx
│   │   ├── Knowledge.tsx
│   │   ├── Membership.tsx
│   │   ├── News.tsx
│   │   ├── NotFound.tsx
│   │   └── Partners.tsx
│   ├── seo/                    # SEO components
│   │   └── Seo.tsx
│   ├── styles/                 # CSS files
│   │   ├── globals.css
│   │   └── theme.css
│   ├── App.tsx
│   ├── main.tsx
│   └── routes.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd aceb_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically redirect to `/en` (English)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Routing & Languages

### English Routes
- `/en` - Home
- `/en/about` - About ACEB
- `/en/membership` - Membership
- `/en/certification` - Certification Programs
- `/en/knowledge` - Knowledge Base
- `/en/events` - Events
- `/en/news` - News
- `/en/partners` - Partners
- `/en/contact` - Contact
- `/en/directory` - Professional Directory

### Serbian Routes
- `/sr` - Home
- `/sr/o-nama` - About ACEB
- `/sr/clanstvo` - Membership
- `/sr/licenciranje` - Certification Programs
- `/sr/baza-znanja` - Knowledge Base
- `/sr/dogadjaji` - Events
- `/sr/vesti` - News
- `/sr/partneri` - Partners
- `/sr/kontakt` - Contact
- `/sr/imenik` - Professional Directory

## 📝 Content Management

### Adding/Editing News Items

Edit the JSON files in `src/data/`:
- English: `news.en.json`
- Serbian: `news.sr.json`

```json
{
  "id": "unique-id",
  "title": "Article Title",
  "date": "2024-03-15",
  "excerpt": "Brief description...",
  "content": "Full article content...",
  "slug": "url-friendly-slug"
}
```

### Adding/Editing Events

Edit the JSON files in `src/data/`:
- English: `events.en.json`
- Serbian: `events.sr.json`

```json
{
  "id": "unique-id",
  "title": "Event Title",
  "date": "2024-06-15",
  "location": "Belgrade, Serbia",
  "description": "Event description...",
  "registrationLink": "#registration",
  "status": "upcoming" // or "past"
}
```

### Adding/Editing Resources

Edit the JSON files in `src/data/`:
- English: `resources.en.json`
- Serbian: `resources.sr.json`

```json
{
  "id": "unique-id",
  "title": "Resource Title",
  "description": "Resource description...",
  "type": "article", // or "guide", "report"
  "sector": "General",
  "year": 2024,
  "downloadLink": "/resources/filename.pdf"
}
```

### Adding/Editing Directory Entries

Edit `src/data/directory.json`:

```json
{
  "id": "unique-id",
  "name": "Full Name",
  "city": "City",
  "country": "Country",
  "licenseLevel": "I", // or "II", "III"
  "status": "Active", // or "Inactive"
  "email": "email@example.com",
  "organization": "Organization Name"
}
```

## 🎨 Customizing the Theme

The theme is defined in `src/styles/theme.css` with CSS custom properties:

```css
:root {
  --green: #0F7A40;      /* Primary green */
  --green-deep: #0A5B2F; /* Darker green */
  --blue: #1E88E5;       /* Primary blue */
  --blue-deep: #0F5FA6;  /* Darker blue */
  --lime: #7AC943;       /* Accent lime */
  --text: #222831;       /* Text color */
  --muted: #6C757D;      /* Muted text */
  --bg: #F6F8FA;         /* Background */
  --white: #FFFFFF;      /* White */
}
```

## 📧 Forms & Functionality

### Contact Form
- Location: Contact page (`/en/contact`, `/sr/kontakt`)
- Functionality: Client-side validation and simulated submission
- Fields: Name, Email, Subject, Message, Consent checkbox

### Membership Application Form
- Location: Membership page (`/en/membership`, `/sr/clanstvo`)
- Functionality: Modal form with validation and simulated submission
- Fields: Full name, Email, Phone, City, Country, Category, Organization (optional), Message (optional), Consent

### Search & Filtering
- **Knowledge Base**: Filter by type, sector, year + search functionality
- **Directory**: Filter by city, license level, status + search by name/organization

## 🔍 SEO Features

- **Dynamic meta tags** for each page
- **Structured data** (Organization, WebSite schemas)
- **Hreflang tags** for bilingual content
- **Canonical URLs** for proper indexing
- **XML sitemap** with all routes
- **robots.txt** for crawler guidance
- **Open Graph** and **Twitter Card** tags

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🧪 Testing

The website includes:
- TypeScript type checking
- ESLint for code quality
- All forms are functional with validation
- All navigation links work properly
- Both languages are fully implemented
- All mock data is realistic and complete

## 🚀 Deployment Options

### Vercel (Recommended)
1. Import the repository to Vercel
2. Build command: `npm run build`
3. Output directory: `dist`
4. Configure client-side routing fallback

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add `_redirects` file for SPA routing:
   ```
   /*    /index.html   200
   ```

### Static Hosting
1. Run `npm run build`
2. Upload the `dist/` folder contents to your hosting provider
3. Configure server to serve `index.html` for all routes

## 🎯 Future Enhancements

### Backend Integration
This MVP is designed to easily integrate with a headless CMS like Strapi:

1. Replace JSON files with API calls
2. Add environment variables for API endpoints
3. Implement real form submissions
4. Add user authentication for admin features

### Additional Features
- Newsletter subscription functionality
- Event registration system
- Member login portal
- Payment integration for membership fees
- Content management system
- Advanced search functionality
- Blog/news detail pages with full content

## 🤝 Contributing

1. Follow the existing code style and structure
2. Add new translations to both language files
3. Test all functionality on multiple devices
4. Ensure accessibility standards are maintained
5. Update this README for any structural changes

## 📞 Support

For technical support or questions about the website:
- Email: info@aceb.org
- Address: Vojvode Tankosića 14/8, 18000 Niš, Serbia

---

**ACEB Website - Built with ❤️ for the circular economy community in the Balkans**
