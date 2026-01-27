# Quant Link Portfolio

A modern portfolio website for Abhinav Raj, showcasing work in NLP, Hardware, and Quantitative Strategies.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features

- Modern, responsive design
- Hero section with introduction
- Background and interests sections
- Featured projects showcase
- Contact information with email link

## Tech Stack

- React 18
- Vite
- CSS3

## Deploy (GitHub Pages + Namecheap)

### 1) Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/abhinavraj404/website
git push -u origin main
```

### 2) Enable GitHub Pages

- Repo Settings -> Pages
- Source: GitHub Actions
- Custom domain: `abhinavraj.me`
- Enable "Enforce HTTPS" after it appears

### 3) Namecheap DNS

Add these records in Namecheap -> Domain List -> Manage -> Advanced DNS:

- A records (host `@`):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- CNAME:
  - Host: `www`
  - Value: `abhinavraj404.github.io`
