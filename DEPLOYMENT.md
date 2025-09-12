# Deployment Guide

## Quick Deployment Commands

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir dist
```

## Environment Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Local Development

```bash
# Clone and setup
git clone <repository-url>
cd portfolio
npm install

# Start development server
npm run dev
# Server will run at http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

## Asset Preparation

Before deploying to production, ensure you have:

### Required Files

1. **`/public/assets/headshot.jpg`** - Professional photo (400x400px)
2. **`/public/assets/project1.jpg`** - E-commerce API screenshot
3. **`/public/assets/project2.jpg`** - Task manager screenshot
4. **`/public/assets/project3.jpg`** - Microservices screenshot
5. **`/public/resume.pdf`** - Latest resume in PDF format

### Content Updates

Update the following in the source code:

#### Personal Information

- Replace placeholder email addresses
- Update phone numbers and location
- Add real social media links
- Update GitHub profile URLs

#### Project Information

- Replace demo URLs with actual project links
- Update GitHub repository URLs
- Add real project screenshots
- Verify all external links work

## Performance Optimization

The portfolio is already optimized with:

- ✅ Vite bundler for fast builds
- ✅ Code splitting and lazy loading
- ✅ Optimized images and assets
- ✅ Minified CSS and JavaScript
- ✅ Modern web standards

### Additional Optimizations

- Compress images before uploading (use tools like TinyPNG)
- Enable gzip compression on your hosting platform
- Set up proper caching headers
- Consider using a CDN for static assets

## SEO Checklist

- ✅ Updated meta titles and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Proper heading structure (H1, H2, H3)
- ✅ Alt text for images (add when you upload real images)
- ✅ Semantic HTML structure
- ✅ Fast loading times
- ✅ Mobile-responsive design

### Additional SEO Steps

1. Submit sitemap to Google Search Console
2. Add Google Analytics (optional)
3. Set up proper redirects if needed
4. Test with Lighthouse for performance audit

## Domain Setup

### Custom Domain (Optional)

1. Purchase domain from registrar (Namecheap, GoDaddy, etc.)
2. Configure DNS settings:
   - For Vercel: Add CNAME record pointing to `cname.vercel-dns.com`
   - For Netlify: Add CNAME record pointing to your Netlify subdomain
3. Update domain in deployment platform settings
4. Enable HTTPS (usually automatic)

## Maintenance

### Regular Updates

- Keep dependencies updated: `npm update`
- Update project information as you gain experience
- Add new projects to showcase
- Update resume regularly
- Check for broken links periodically

### Performance Monitoring

- Use Lighthouse to check performance scores
- Monitor Core Web Vitals
- Check mobile responsiveness regularly
- Test loading times from different locations

## Troubleshooting

### Common Build Issues

1. **TailwindCSS not working**: Ensure `@tailwindcss/postcss` is installed
2. **Import errors**: Check file paths and extensions
3. **TypeScript errors**: Run `npm run lint` to identify issues

### Deployment Issues

1. **Build fails**: Check Node.js version compatibility
2. **Assets not loading**: Verify file paths are correct
3. **Routing issues**: Ensure SPA redirects are configured

## Security Considerations

- ✅ No sensitive information in code
- ✅ Contact form uses proper validation
- ✅ External links open in new tabs
- ✅ HTTPS enabled by default on modern platforms

## Analytics & Monitoring (Optional)

Consider adding:

- Google Analytics for visitor tracking
- Google Search Console for SEO monitoring
- Hotjar or similar for user behavior analysis

---

## Production Checklist

Before going live, verify:

- [ ] All placeholder content replaced
- [ ] Real images and resume uploaded
- [ ] Contact form tested
- [ ] All links work correctly
- [ ] Mobile responsiveness tested
- [ ] Performance score > 90 on Lighthouse
- [ ] SEO meta tags updated
- [ ] Social media links verified
- [ ] Domain configured (if using custom domain)
- [ ] SSL certificate active
- [ ] Analytics set up (if desired)

---

**Ready to deploy!** 🚀

Your portfolio is now ready for production deployment. Choose your preferred platform and follow the deployment commands above.
