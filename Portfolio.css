@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #3b82f6 #0f172a; /* Blue on dark blue */
}

/* Optimize animations */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

@font-face {
    font-family: 'Yapari';
    src: url('Yaparivariable-ultra.ttf') format('truetype');
}

@font-face {
    font-family: 'Researcher';
    src: url('researcherfontregular.ttf') format('truetype');
}

body {
    min-height: 100vh;
    background-color: #2f4b8b; /* Dark blue */
    font-family: 'Inter', Arial, sans-serif;
    color: white;
    overflow-x: hidden;
    width: 100%;
    position: relative;
}

.container {
    width: 100%;
    overflow-x: hidden;
}

/* Custom Scrollbar Styling */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #0f172a; /* Dark blue */
}

::-webkit-scrollbar-thumb {
    background: #3b82f6; /* Blue */
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #2563eb; /* Darker blue */
}

/* Hide the name "Ashok Adhikari | Geomatics Engineer" */
.header-name, 
.website-title,
.site-title,
.page-title,
.name-title,
.header-text {
    display: none !important;
}

/* Alternative: If the name is in an h1 or specific element at the top */
body > h1:first-of-type,
.container > h1:first-child,
header > h1 {
    display: none !important;
}

.nav {
    height: 3.2rem;
    display: flex;
    color: white;
}

.nav-menu ul {
    margin: 0;
    padding: 0;
    display: flex;
}

.nav-menu li {
    list-style: none;
    margin-right: 20px;
}

.nav-menu a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
}

.nav-menu a:hover {
    color: #3b82f6; /* Blue */
}

.shok {
    width: 150px;
    height: 100%;
    border-radius: 50%;
    justify-content: center;
}

.text-content {
    max-width: 600px;
}

.text-gradient {
    background: linear-gradient(45deg, #3b82f6, #0ea5e9); /* Blue gradient */
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

h1 {
    font-family: Arial, sans-serif;
    font-size: 2.5rem;
    margin: 0;
}

p {
    margin-top: 10px;
    font-size: 1rem;
    line-height: 1.5;
}

#changing-text {
    transition: opacity 0.3s ease-in-out;
}

#line-break {
    margin-bottom: 10px;
}

#changing-text, #role-image {
    transition: opacity 0.2s ease-in-out;
    opacity: 1;
}

/* Art Section Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.art-item {
    animation: fadeInUp 0.6s ease-out forwards;
}

/* Ensures smooth image scaling */
.art-item img {
    backface-visibility: hidden;
}

/* Project description */
#project-container p {
  text-align: justify;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #d1d5db;
}

#community-container {
  display: flex;
  flex-wrap: wrap;
  text-align: justify;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

@media (max-width: 768px) {
    .nav {
        padding: 1rem;
    }
    
    #mobileMenu {
        box-shadow: -2px 0 10px rgba(0,0,0,0.3);
    }
    
    #mobileMenu a {
        font-size: 1.1rem;
        transition: color 0.3s ease;
    }
}

/* Media Queries */
@media (max-width: 640px) {
    h1 {
        font-size: 2rem;
        word-break: break-word;
    }
    
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    
    #aboutme, #award, #arts {
        padding-top: 3rem;
    }
    
    .grid {
        gap: 1rem;
    }
}

/* Fix for mobile Safari */
@supports (-webkit-touch-callout: none) {
    .min-h-screen {
        min-height: -webkit-fill-available;
    }
}

/* Add performance optimizations */
.transform, .transition {
    will-change: transform;
}

/* Add content-visibility for better performance */
.card {
    content-visibility: auto;
    contain-intrinsic-size: 0 500px;
}

/* Typewriter cursor effect */
.cursor::after {
    content: '|';
    display: inline-block;
    margin-left: 3px;
    opacity: 1;
    animation: blink 0.7s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

@media (min-width: 960px) and (max-width: 990px) {
    .hero-image-container {
        padding-left: 4rem !important;
    }
}
