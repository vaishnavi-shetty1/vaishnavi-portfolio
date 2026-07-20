# Vaishnavi Shetty — Portfolio

Pixel-edition personal portfolio built with **React + Vite**.

## Quick Start

```bash
npm install
npm run dev
```

---

## 📧 Enable Contact Form → Gmail Delivery

The contact form uses **EmailJS** (free, no backend needed).

### Setup (5 minutes)

1. **Sign up** at [https://www.emailjs.com](https://www.emailjs.com)

2. **Add Email Service**
   - Dashboard → Email Services → Add New Service → Gmail
   - Authorize with your Google account
   - Copy the **Service ID** (e.g. `service_abc123`)

3. **Create Email Template**
   - Dashboard → Email Templates → Create New Template
   - Set **To Email** → `shettyvaishnavi871@gmail.com`
   - Use these template variables in the body:
     ```
     From: {{from_name}} <{{from_email}}>
     Subject: {{subject}}

     {{message}}
     ```
   - Copy the **Template ID** (e.g. `template_xyz789`)

4. **Get your Public Key**
   - Dashboard → Account → API Keys
   - Copy your **Public Key**

5. **Update `src/pages/Contact.jsx`** (lines 8–10):
   ```js
   const EMAILJS_SERVICE_ID  = 'service_abc123'
   const EMAILJS_TEMPLATE_ID = 'template_xyz789'
   const EMAILJS_PUBLIC_KEY  = 'AbCdEfGhIjKlMnOp'
   ```

6. Done! Every contact form submission will arrive at **shettyvaishnavi871@gmail.com**.

---

## 🚀 Deploy to Vercel

```bash
npm run build
# drag the dist/ folder to vercel.com, or:
npx vercel
```

## Tech Stack
- React 18 + Vite
- React Router v6
- EmailJS (contact form)
- CSS custom properties (design system)
- Press Start 2P + VT323 + Space Mono fonts
