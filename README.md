# Yuanda Li - Personal Website

A personal portfolio website built with React and Tailwind CSS, inspired by the Microsoft AI website design.

## 🌐 Live Website

Visit: [Your deployed URL will be here]

## 📁 Project Structure

```
my-app/
├── public/                    # Static HTML pages
│   ├── about-detail.html      # About detail page (My Journey + Awards)
│   ├── projects.html          # Projects page
│   └── blog.html              # Blog page
├── src/
│   ├── sections/              # React components
│   │   ├── Navigation.tsx     # Top navigation bar
│   │   ├── Hero.tsx           # Homepage cover
│   │   ├── About.tsx          # About section with image carousel
│   │   ├── Quote.tsx          # Quote section
│   │   └── Footer.tsx         # Footer
│   ├── config.ts              # Main configuration file
│   └── App.tsx                # Main app component
└── README.md                  # This file
```

## 🎨 Website Sections

### 1. Homepage (`/`)
- **Hero**: Gradient cover with your name and tagline
- **About**: Fixed position section with image carousel
  - Scroll to flip through images
  - Click arrows or dots to navigate
  - "Learn More" button links to about-detail page
- **Quote**: Your personal statement
- **Footer**: Contact info and navigation

### 2. About Detail Page (`/about-detail.html`)
- **My Journey**: Four sections about your experiences
- **Honors & Awards**: All your awards displayed in cards

### 3. Projects Page (`/projects.html`)
- Template for showcasing your projects
- Currently empty with upload instructions

### 4. Blog Page (`/blog.html`)
- Template for your blog posts
- Currently empty with upload instructions

## 📝 How to Customize

### Edit Basic Info

Open `src/config.ts` and modify:

```typescript
personal: {
  name: 'Yuanda Li',           // Your name
  email: 'lydbest@outlook.com', // Your email
  wechat: 'Meinianda_Li',      // Your WeChat ID
  year: '2026',                // Copyright year
}
```

### Edit Homepage Content

In `src/config.ts`:

```typescript
hero: {
  greeting: "Hi, I'm",
  name: 'Yuanda Li',
  subtitle: 'Your tagline here',
}

about: {
  shortDescription: 'Your short bio here',
  images: [
    { id: 1, src: 'IMAGE_URL', alt: 'Description' },
    // Add more images...
  ],
}

quote: {
  text: 'Your quote here',
  author: 'Yuanda Li',
}
```

### Edit About Detail Page

Open `public/about-detail.html` and modify:
- **My Journey** sections (lines ~45-85)
- **Honors & Awards** cards (lines ~95-165)

### Add Projects

1. Open `public/projects.html`
2. Find the instructions comment (around line 60)
3. Copy the project card template
4. Paste it inside the `projects-grid` div
5. Replace:
   - `YOUR_IMAGE_URL` with your image URL
   - `Project Title` with your project name
   - `Project description` with your description
   - `your-project-link.html` with your project page URL

**Example:**
```html
<div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer" onclick="location.href='project-vex-robot.html'">
  <div class="aspect-[3/2] overflow-hidden">
    <img src="https://i.imgur.com/your-image.jpg" alt="VEX Robot" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
  </div>
  <div class="p-6">
    <span class="inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-primary mb-3">Robotics</span>
    <p class="text-sm text-gray-500 mb-2">2026</p>
    <h3 class="text-xl font-medium text-gray-900 mb-2">VEX Robot Control System</h3>
    <p class="text-gray-600 text-sm leading-relaxed">An advanced control system for VEX robotics competitions.</p>
    <div class="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
      View Project
      <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    </div>
  </div>
</div>
```

### Add Blog Posts

1. Open `public/blog.html`
2. Find the instructions comment (around line 60)
3. Copy the blog post card template
4. Paste it inside the `blog-grid` div
5. Replace with your content

### Create a Project/Blog Detail Page

1. Copy `public/projects.html` or `public/blog.html`
2. Rename it (e.g., `project-vex-robot.html`)
3. Modify the content with your details
4. Update the link in the main page to point to your new page

## 🖼️ How to Upload Images

### Option 1: Imgur (Recommended - Free)
1. Go to [imgur.com](https://imgur.com)
2. Click "New post" and upload your image
3. Right-click on the uploaded image
4. Select "Copy image address"
5. Paste the URL in your HTML

### Option 2: Cloudinary (Free tier available)
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Upload your image
3. Copy the URL
4. Paste in your HTML

### Option 3: GitHub (If using GitHub Pages)
1. Upload images to your repository
2. Use the raw GitHub URL

## 🚀 How to Deploy

### Build the project:
```bash
npm run build
```

### Deploy to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- Or any other static host

## 🛠️ Development

### Install dependencies:
```bash
npm install
```

### Run development server:
```bash
npm run dev
```

### Build for production:
```bash
npm run build
```

## 📧 Contact

- Email: lydbest@outlook.com
- WeChat: Meinianda_Li

---

© 2026 Yuanda Li. All rights reserved.






2026.3.7 codex

Worked for 5m 58s
Implemented. Your site now works the way you described.

What I changed:

Connected the flipping photos in this order:

fun1.jpg → music1.png → vex2.jpg → fun.jpg
Set in public/data/homepage.js (line 35)
Wired into React config via src/config.ts (line 110)
Unhid Projects and Blog preview sections on homepage:

Enabled in src/config.ts (line 198)
Removed example preview card behavior and made empty states clean:

Preview cards are now title + image only (no sample descriptions/tags)
If empty, it shows “No published … yet”
Done in src/sections/PreviewSection.tsx (line 89)
Made shared data source for homepage preview + projects/blog pages:

Shared files:
public/data/projects.js
public/data/blogs.js
public/data/homepage.js
React reads through src/data/projects.js, src/data/blogs.js, src/data/homepage.js
Updated projects.html and blog.html:

Use shared data modules
Show title + image only
Clicking item redirects to its htmlFile
Files:
public/projects.html (line 102)
public/blog.html (line 102)
Added upload/form workflow page:

public/content-form.html
Generates:
target HTML path (public/projects/<slug>.html or public/blogs/<slug>.html)
snippet for public/data/projects.js / public/data/blogs.js
reminder for preview title in public/data/homepage.js
Created target folders for your content pages:

public/projects/
public/blogs/
Build status: npm run build passes.

Note: you asked for vex2.png and fun.png, but your repo currently has vex2.jpg and fun.jpg, so I used those existing files.