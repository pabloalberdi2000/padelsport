# PROMPT: React + Tailwind CSS Web Development (Ilusión Pádel Sport)

## 📌 Context & Role
Act as an expert Senior Frontend Developer and UI/UX Designer specialized in React, Tailwind CSS, and headless CMS integrations. 
Your task is to build a high-performance, fully responsive, and modern website for **"Ilusión Pádel Sport"**, a premium sports club located in Granada (Spain) featuring **9 padel courts and 1 tennis court**.

---

## 🛠️ Technical Stack & Architecture
Create a clean, modular React project (Vite-ready) structured as follows:
- `/components` (Modular, reusable UI components)
- `/hooks` (For custom logic, e.g., fetching data from Contentful)
- `/services` (API and Client configurations)

### Key Technologies:
1. **Frontend:** React with Tailwind CSS (Mobile-First approach).
2. **CMS (Contentful):** Contentful SDK integration to dynamic manage texts, rates, and announcements.
3. **Reservations (Playtomic):** A booking section integrated via an embedded widget/iframe or a seamless redirection UI.

---

## 🎨 Input Design (To be converted)
I will provide you with the raw HTML/CSS of the design. You must:
- Analyze the HTML and refactor it into clean React components.
- Translate all styling to **Tailwin CSS utility classes**.
- Ensure the color palette is maintained using Tailwind config (Deep charcoal main background, Electric lime/padel ball green as the primary accent, and clean white).

---

## ⚙️ Core Components to Generate

### 1. `Header.jsx`
- Fully responsive navigation bar (hamburger menu on mobile).
- Brand logo placeholder ("Ilusión Pádel Sport") and links: Inicio, Instalaciones, Tarifas, Contacto.
- High-visibility Call-To-Action (CTA) button: "Reservar Pista".

### 2. `Hero.jsx`
- High-impact visual section.
- Dynamics titles and descriptions fetched from Contentful.
- Main CTA ("Reservar Pista") and Secondary CTA ("Ver Instalaciones").

### 3. `Facilities.jsx`
- Responsive CSS Grid displaying the club services: 9 Pistas de Pádel, 1 Pista de Tenis, Escuela de Pádel, Cafetería & Tienda.

### 4. `BookingWidget.jsx` (Playtomic Integration)
- A clean, modern card component representing the Playtomic engine.
- Must display a visual calendar/time-slot mockup to guide the user.
- Action button linked directly to the club's official Playtomic URL.
- Must include a seamless iframe integration option that falls back gracefully on mobile devices to direct app-linking.

### 5. `Footer.jsx`
- Contact info (Granada address, phone, email, map link).
- Social media icons and a "Powered by Playtomic" badge.

---

## 🔌 Headless CMS Integration (Contentful)
Create a helper service `services/contentfulClient.js` using `@contentful/delivery-api-sdk`.
The home page components must dynamically fetch the following fields from a `homePage` content model:
- `heroTitle` (Text)
- `heroSubtitle` (Text)
- `aboutText` (Long Text)
- `pricingData` (JSON or Rich Text)

---

## 📦 Expected Deliverables
1. **React Components:** Clean, documented, and fully modular `.jsx` files.
2. **Tailwind Config:** `tailwind.config.js` configuration including custom colors, fonts, and responsive breakpoints.
3. **Environment Setup:** A `.env.example` file specifying the required keys (`VITE_CONTENTFUL_SPACE_ID`, `VITE_CONTENTFUL_ACCESS_TOKEN`, `VITE_PLAYTOMIC_CLUB_URL`).
4. **Responsive Integrity:** Ensure no layout shifting or broken structures between mobile, tablet, and desktop viewports.

---

<!DOCTYPE html>

<html class="light" lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "inverse-on-surface": "#f0f1f2",
                    "surface-dim": "#d9dadb",
                    "on-primary-fixed-variant": "#093cab",
                    "primary-fixed-dim": "#b6c4ff",
                    "on-tertiary-fixed-variant": "#852402",
                    "surface-container-lowest": "#ffffff",
                    "surface-tint": "#3056c4",
                    "tertiary": "#591400",
                    "surface-container-low": "#f3f4f5",
                    "tertiary-container": "#802100",
                    "on-primary-container": "#96adff",
                    "surface-container-high": "#e7e8e9",
                    "secondary-fixed": "#d1f041",
                    "on-background": "#191c1d",
                    "on-secondary-fixed-variant": "#3f4c00",
                    "on-surface": "#191c1d",
                    "on-primary": "#ffffff",
                    "outline": "#747685",
                    "on-secondary-fixed": "#181e00",
                    "on-surface-variant": "#444653",
                    "on-tertiary-container": "#ff9474",
                    "on-tertiary": "#ffffff",
                    "on-error": "#ffffff",
                    "surface-container": "#edeeef",
                    "primary": "#002576",
                    "surface": "#f8f9fa",
                    "on-secondary-container": "#596a00",
                    "tertiary-fixed": "#ffdbd1",
                    "secondary": "#556500",
                    "tertiary-fixed-dim": "#ffb59f",
                    "inverse-primary": "#b6c4ff",
                    "surface-bright": "#f8f9fa",
                    "secondary-container": "#ceed3e",
                    "on-primary-fixed": "#00164f",
                    "primary-container": "#0038a8",
                    "on-secondary": "#ffffff",
                    "surface-variant": "#e1e3e4",
                    "primary-fixed": "#dce1ff",
                    "inverse-surface": "#2e3132",
                    "error-container": "#ffdad6",
                    "background": "#f8f9fa",
                    "outline-variant": "#c4c5d5",
                    "on-error-container": "#93000a",
                    "secondary-fixed-dim": "#b5d321",
                    "on-tertiary-fixed": "#3a0a00",
                    "surface-container-highest": "#e1e3e4",
                    "error": "#ba1a1a"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "margin-desktop": "48px",
                    "margin-mobile": "16px",
                    "gutter": "24px",
                    "unit": "4px",
                    "md": "24px",
                    "sm": "16px",
                    "xl": "64px",
                    "lg": "40px",
                    "xs": "8px",
                    "container-max": "1200px"
            },
            "fontFamily": {
                    "display-lg": ["Inter"],
                    "label-sm": ["Inter"],
                    "headline-lg-mobile": ["Inter"],
                    "title-md": ["Inter"],
                    "body-lg": ["Inter"],
                    "headline-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "label-md": ["Inter"]
            },
            "fontSize": {
                    "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "600"}],
                    "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "600"}],
                    "title-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}]
            }
          },
        },
      }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .ambient-shadow { box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05); }
        .hero-gradient { background: linear-gradient(rgba(0, 37, 118, 0.7), rgba(0, 37, 118, 0.7)); }
    </style>
</head>
<body class="bg-surface text-on-surface">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-16">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-primary text-[32px]">sports_tennis</span>
<span class="font-display-lg text-title-md font-bold text-primary">Ilusión Pádel Sport</span>
</div>
<nav class="hidden md:flex gap-lg items-center">
<a class="font-label-md text-label-md text-primary font-bold border-b-2 border-primary" href="#">Inicio</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Instalaciones</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Escuela</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Tarifas</a>
</nav>
<button class="bg-primary text-on-primary px-sm py-xs rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">
                Reservar Pista
            </button>
</div>
</header>
<main class="mt-16">
<!-- Hero Section -->
<section class="relative h-[600px] flex items-center overflow-hidden">
<div class="absolute inset-0 z-0">
<img alt="Padel Court" class="w-full h-full object-cover" data-alt="A pristine, professional padel court with blue artificial turf and glass walls under bright, natural daylight. The image is captured from a low angle showing the crisp white lines and the net in sharp focus. The overall mood is high-end, clean, and athletic, reflecting a premium sports club environment in Granada. Soft sunlight filters through the surrounding area creating a welcoming atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtpT44dJ-CuMnrt1BYXY1XDx6DbBzRRfiSeRsQkNOZ3K1cAgwQzqTsybcApRjtRY58I9ES5uUgccaZP7LgE8VmbEUqY6ERIPzxgpEFqWKB1hE37vC9FMWmWXicMPpCAjDKxX-bLdNbB_T78pJY6IGNBLHRESQChjeMVM8VCUJk8YdQGOHEmIUz_ESD-S2V-i21xEAnDAjrrfPQ74xUF5oASTxeFTaqsgq_Y4uk0pwoGfaxQfKvtuJPpOEefedMjJmSpWMB9oHJfHWf"/>
<div class="absolute inset-0 hero-gradient"></div>
</div>
<div class="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-white">
<div class="max-w-2xl">
<h1 class="font-display-lg text-display-lg mb-md leading-tight">Siente la pasión del pádel en Granada</h1>
<p class="font-body-lg text-body-lg mb-lg opacity-90">Disfruta de nuestras instalaciones de primer nivel. Deporte, comunidad y el mejor ambiente en el corazón de la ciudad.</p>
<div class="flex flex-wrap gap-md">
<button class="bg-secondary-container text-on-secondary-container px-lg py-sm rounded-lg font-title-md text-title-md hover:scale-105 transition-transform">
                            Reservar Ahora
                        </button>
<button class="border-2 border-white text-white px-lg py-sm rounded-lg font-title-md text-title-md hover:bg-white/10 transition-colors">
                            Ver Instalaciones
                        </button>
</div>
</div>
</div>
</section>
<!-- Ball Transition Element -->
<div class="relative h-24 -mt-12 z-20 flex justify-center pointer-events-none">
<img alt="Pelota de Pádel" class="h-48 drop-shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh7W0aQK-wpKDYbAzUn_QsVP6RK1sB51EU7I2Qde2MHfIUs5wdAExCIHqRRYNug7gw6Q2AWKROyHcYlOt_J7RlvNc3imbDXwsnK35aJZY_yCZc1xX5zxqeKaBamiywIU9hwBmHJsEbhifN5goO_dSmyMefrc0TIYdPK3RD9i-IXiXu0-hfjL-XFolVdy1f_la3AYj4X5Xaj2u6SXHuIYOSiBuJ9j-OPzOig-nHd7lKZUa_AtWq6oXLZ_J8ZEIkUqMpE1j1C8Wyu0gk"/>
</div>
<!-- Stats Grid -->
<section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-xl">
<div class="grid grid-cols-2 md:grid-cols-4 gap-gutter">
<div class="bg-white border border-outline-variant p-lg rounded-xl text-center ambient-shadow border-t-4 border-t-primary">
<span class="material-symbols-outlined text-primary text-[40px] mb-xs">stadium</span>
<h3 class="font-display-lg text-title-md text-primary">9 Pistas</h3>
<p class="font-label-md text-on-surface-variant">Pádel de Cristal</p>
</div>
<div class="bg-white border border-outline-variant p-lg rounded-xl text-center ambient-shadow border-t-4 border-t-secondary-container">
<span class="material-symbols-outlined text-primary text-[40px] mb-xs">sports_tennis</span>
<h3 class="font-display-lg text-title-md text-primary">1 Pista</h3>
<p class="font-label-md text-on-surface-variant">Tenis Quick</p>
</div>
<div class="bg-white border border-outline-variant p-lg rounded-xl text-center ambient-shadow border-t-4 border-t-primary">
<span class="material-symbols-outlined text-primary text-[40px] mb-xs">location_on</span>
<h3 class="font-display-lg text-title-md text-primary">Granada</h3>
<p class="font-label-md text-on-surface-variant">Ubicación Central</p>
</div>
<div class="bg-white border border-outline-variant p-lg rounded-xl text-center ambient-shadow border-t-4 border-t-secondary-container">
<span class="material-symbols-outlined text-primary text-[40px] mb-xs">coffee</span>
<h3 class="font-display-lg text-title-md text-primary">Cafetería</h3>
<p class="font-label-md text-on-surface-variant">&amp; Tienda Oficial</p>
</div>
</div>
</section>
<!-- Booking Widget Section -->
<section class="bg-surface-container-low py-xl">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div class="grid md:grid-cols-12 gap-xl items-center">
<div class="md:col-span-5">
<h2 class="font-display-lg text-headline-lg text-primary mb-md">Reserva tu pista al instante</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-lg">Gestionamos nuestras reservas a través de Playtomic para ofrecerte la mayor comodidad. Consulta disponibilidad en tiempo real y asegura tu partido en segundos.</p>
<div class="flex items-center gap-sm p-sm bg-white rounded-lg border border-outline-variant mb-md">
<span class="material-symbols-outlined text-secondary text-[24px]">verified</span>
<span class="font-label-md text-on-surface">Instalaciones homologadas por la FAP</span>
</div>
</div>
<div class="md:col-span-7">
<div class="bg-white rounded-xl border border-outline-variant ambient-shadow p-lg overflow-hidden">
<div class="flex items-center justify-between mb-lg border-b border-outline-variant pb-md">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-primary">calendar_month</span>
<span class="font-title-md text-title-md">Hoy, 24 de Mayo</span>
</div>
<span class="bg-secondary-container text-on-secondary-container px-xs py-1 rounded font-label-sm text-label-sm">5 Pistas Libres</span>
</div>
<div class="grid grid-cols-3 gap-sm mb-lg">
<button class="p-sm rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container transition-all text-center group">
<span class="block font-label-sm text-on-surface-variant group-hover:text-primary">17:00</span>
<span class="block font-label-md text-primary">Libre</span>
</button>
<button class="p-sm rounded-lg border border-primary bg-primary-fixed text-center group">
<span class="block font-label-sm text-primary">18:30</span>
<span class="block font-label-md text-primary font-bold">Seleccionado</span>
</button>
<button class="p-sm rounded-lg border border-outline-variant bg-surface-container-highest opacity-50 cursor-not-allowed text-center">
<span class="block font-label-sm text-on-surface-variant">20:00</span>
<span class="block font-label-md text-on-surface-variant">Ocupado</span>
</button>
<button class="p-sm rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container transition-all text-center group">
<span class="block font-label-sm text-on-surface-variant group-hover:text-primary">21:30</span>
<span class="block font-label-md text-primary">Libre</span>
</button>
</div>
<button class="w-full bg-primary-container text-on-primary-container py-md rounded-lg font-title-md flex items-center justify-center gap-sm hover:opacity-90 transition-opacity">
<span class="material-symbols-outlined">bolt</span>
                                Reservar en Playtomic
                            </button>
</div>
</div>
</div>
</div>
</section>
<!-- Facilities Grid -->
<section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-xl">
<h2 class="font-display-lg text-headline-lg text-center mb-xl">Nuestras Instalaciones</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div class="group relative h-80 rounded-xl overflow-hidden ambient-shadow">
<img alt="Padel Courts" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="An expansive view of multiple indoor-outdoor padel courts at Ilusión Pádel Sport. The perspective shows high-quality glass walls and professional blue turf courts perfectly lined up. The lighting is bright and airy, capturing a professional yet approachable sporting environment. The corporate blue colors of the club are subtly visible in the structural elements." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdNh6f3Fz_GP2DFh2lz_D_XP8gSZ7diZgC4j7kukPBHLIkhjq1MeGBU8WZWb3aypmHxy-R411JOcJ7BkPfrDFmwVxyLPj-Lnim6KvnMr-lcz26cbm0FP9ltvuCjSe0-nYPW4nQtunFIEh0zumafhwqlIy2miGrAbGvVzpZNuDtIrbKOqnqJrikJL95fD6VNJLaJ7mqZEhnEGAqNskdOcq2RqN9AZLiLTBvXffvwf9LoPdkFSHQMsNV7wrRzPVPMZSNzcxqm4930j6F"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-lg">
<div class="text-white">
<h3 class="font-title-md text-title-md mb-1">Pistas de Pádel</h3>
<p class="font-body-md text-label-md opacity-80">9 pistas de última generación con iluminación LED.</p>
</div>
</div>
</div>
<div class="group relative h-80 rounded-xl overflow-hidden ambient-shadow">
<img alt="Padel School" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A professional coach giving a padel lesson to a student on a bright blue court. The coach is demonstrating a stroke, emphasizing technique and focus. The atmosphere is educational and energetic, set in a clean, modern sports facility. High-key lighting highlights the vibrant optic yellow balls and the professional gear." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6YgCsdUbu48-Qzw8SF3S-7JVtt1-Uo2p-eZ6ARxeTX_z7D4QthpRje6M8YSUd2Yb9pDWOdlaITpZBq5ZUIzIbDjru803sdIvWUc6i9BibooU_L0bab8PHyMCaKB_g7J0wXNF5zVzVisvariWzwjKmSndPEjBcetXCdUXfuSzGFN2wSm_zg8oJfNj73skczcekoNLGjKAwar7WRyfdK8XDS12_zHWxMCcnSW_Z_omZNhcGlzfFhBg0W1WryrektgJ2m3oZ2sFcRVFm"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-lg">
<div class="text-white">
<h3 class="font-title-md text-title-md mb-1">Escuela de Pádel</h3>
<p class="font-body-md text-label-md opacity-80">Clases para todos los niveles con monitores titulados.</p>
</div>
</div>
</div>
<div class="group relative h-80 rounded-xl overflow-hidden ambient-shadow">
<img alt="Tennis Court" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A classic tennis court with a quick-dry surface, beautifully maintained within the club's grounds. The sharp white lines contrast with the court surface, and the net is perfectly tensioned. The scene is bright and professional, suggesting a premium tennis experience in Granada. Background reveals modern club architecture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-revj0qhDTzsrAHLrWvrTnf1bzIFt-VdS9EbBt9u65QDgQaHkxlLstRFkr-VuMUP3QPzDEkYbDLoLSlmEPc65U8EHlVaSFnSwlR4LqZcp74MJpEEWBCyzrAwhHtd7XNdpAUdQo3EnutT85E-QhUoreUy_4rlGKj32lE7FAPXOGHGcQT4MrSZGOUT33y4ZdPFBuW1g-4GxwchsoRgZS0x0yjEcA1FJFyTHlGoGT6nQz-I5eOZ-CpHLZ7FYkVu4tt6Uor-dlvBV39zs"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-lg">
<div class="text-white">
<h3 class="font-title-md text-title-md mb-1">Pista de Tenis</h3>
<p class="font-body-md text-label-md opacity-80">Complementamos nuestra oferta con tenis de calidad.</p>
</div>
</div>
</div>
<div class="group relative h-80 rounded-xl overflow-hidden ambient-shadow">
<img alt="Cafe Lounge" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A modern and clean cafeteria and lounge area within the sports club. Minimalist furniture, large windows overlooking the courts, and a bright, welcoming atmosphere. The space feels premium and relaxed, featuring a coffee bar and displays of sporting equipment. Soft interior lighting complements the natural light from outside." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS46cMj8lfJXHuiR1nnPTQ0wWTjSLTAoeMAszQufYBHgwuDVklJJg6F2ZacLIl0ZANF5dRtc-Ha31SWhv4Ry0pT_xF51hDz5ZUh8zCFeZDHUqrKLKF2Bb9aCWzAIZZzG8aaUF0ccc1Xzg-34bccZhnR2eT7ESOSU2EbrGZjol3iDmJ-B3e8Pr4De91p8A4XsjZfiI9QGaaZ9YCXDjYFBkUKzmhOJXaZg_3NiNQRlUhSgdWqIHx1OGoZw3pNV_a5v6regdZI5qETNLg"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-lg">
<div class="text-white">
<h3 class="font-title-md text-title-md mb-1">Café &amp; Lounge</h3>
<p class="font-body-md text-label-md opacity-80">El tercer tiempo se vive mejor en nuestra cafetería.</p>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-inverse-surface text-secondary-container py-xl">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div class="col-span-1 md:col-span-1">
<div class="flex items-center gap-xs mb-md">
<span class="material-symbols-outlined text-secondary text-[32px]">sports_tennis</span>
<span class="font-display-lg text-title-md font-bold text-secondary-container">Ilusión Pádel</span>
</div>
<p class="font-body-md text-surface-variant mb-md">Tu club de pádel de referencia en Granada. Pasión, deporte y comunidad.</p>
</div>
<div>
<h4 class="font-title-md text-white mb-md">Enlaces Rápidos</h4>
<ul class="space-y-sm">
<li><a class="font-body-md text-surface-variant hover:text-white transition-colors" href="#">Instalaciones</a></li>
<li><a class="font-body-md text-surface-variant hover:text-white transition-colors" href="#">Escuela de Pádel</a></li>
<li><a class="font-body-md text-surface-variant hover:text-white transition-colors" href="#">Tarifas y Bonos</a></li>
<li><a class="font-body-md text-surface-variant hover:text-white transition-colors" href="#">Normativa</a></li>
</ul>
</div>
<div>
<h4 class="font-title-md text-white mb-md">Contacto</h4>
<ul class="space-y-sm">
<li class="flex items-center gap-xs text-surface-variant">
<span class="material-symbols-outlined text-secondary text-[20px]">call</span>
<span class="font-body-md">+34 958 00 00 00</span>
</li>
<li class="flex items-center gap-xs text-surface-variant">
<span class="material-symbols-outlined text-secondary text-[20px]">mail</span>
<span class="font-body-md">info@ilusionpadel.es</span>
</li>
<li class="flex items-center gap-xs text-surface-variant">
<span class="material-symbols-outlined text-secondary text-[20px]">location_on</span>
<span class="font-body-md">Granada, España</span>
</li>
</ul>
</div>
<div>
<h4 class="font-title-md text-white mb-md">Síguenos</h4>
<div class="flex gap-md">
<a class="text-surface-variant hover:text-secondary transition-colors" href="#"><span class="material-symbols-outlined text-[32px]">Notebook</span></a>
<a class="text-surface-variant hover:text-secondary transition-colors" href="#"><span class="material-symbols-outlined text-[32px]">camera</span></a>
<a class="text-surface-variant hover:text-secondary transition-colors" href="#"><span class="material-symbols-outlined text-[32px]">alternate_email</span></a>
</div>
</div>
</div>
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-xl pt-lg border-t border-outline text-center">
<p class="font-body-md text-surface-variant">© 2024 Ilusión Pádel Sport Granada. Todos los derechos reservados.</p>
</div>
</footer>
</body></html>


---
### 🔄 Interactive Transition & Animation (The Rolling Tennis Ball)
In the provided HTML, there is an image of a tennis/padel ball. You must make this asset interactive and use it as a smooth transition element across the site:
- **Interactive Behavior:** - On hover or scroll, the ball should realistically rotate (spin) and slightly slide horizontally.
  - Use **Framer Motion** to handle this performance-friendly physics animation.
- **Page Transitions:**
  - Create a custom transition component (e.g., `PageTransition.jsx`).
  - When navigating between sections or pages, the ball should roll across the screen from left to right, leaving a subtle motion trail (or acting as a loading/wipe transition mask) before revealing the new content.
- Ensure the animation is GPU-accelerated (using `transform` and `will-change`) so it remains buttery smooth (60fps) on both mobile devices and desktops.


**Please acknowledge that you understand these requirements. Once you confirm, I will paste the raw HTML design for you to transform.**

