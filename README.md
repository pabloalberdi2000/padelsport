# Ilusión Pádel Sport - React Website

Sitio web moderno y responsivo para el club de pádel **Ilusión Pádel Sport** en Granada, España. Construido con React, Tailwind CSS, Framer Motion y Contentful CMS.

## 🚀 Características

- ✨ **UI/UX moderna y responsiva** - Mobile-first design
- 🎨 **Tailwind CSS** - Styling completamente basado en utilities
- 🎬 **Framer Motion** - Animaciones suaves y realistas (pelota interactiva)
- 📦 **Contentful CMS** - Gestión dinámica de contenidos
- 🎯 **Playtomic Integration** - Sistema de reservas integrado
- ⚡ **Vite** - Build tool ultra-rápido
- 📱 **Fully Responsive** - Perfecto en cualquier dispositivo
- ♿ **Accesible** - Semánticamente correcto

## 📋 Estructura del Proyecto

```
padelsport/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navegación responsive
│   │   ├── Hero.jsx             # Sección hero con CTA
│   │   ├── BallTransition.jsx   # Pelota interactiva con scroll
│   │   ├── Stats.jsx            # Grid de estadísticas
│   │   ├── BookingWidget.jsx    # Widget de reservas Playtomic
│   │   ├── Facilities.jsx       # Grid de instalaciones
│   │   ├── Footer.jsx           # Pie de página
│   │   └── PageTransition.jsx   # Transiciones de página
│   ├── hooks/
│   │   ├── useContentful.js     # Hooks para Contentful
│   │   └── useScrollPosition.js # Hook para posición de scroll
│   ├── services/
│   │   ├── contentfulClient.js  # Cliente y configuración Contentful
│   │   └── playtomicService.js  # Utilidades para Playtomic
│   ├── App.jsx                  # Componente raíz
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── public/                      # Archivos estáticos
├── index.html                   # HTML principal
├── vite.config.js              # Configuración Vite
├── tailwind.config.js          # Configuración Tailwind
├── postcss.config.js           # Configuración PostCSS
├── tsconfig.json               # Configuración TypeScript
├── .env.example                # Variables de entorno ejemplo
└── package.json                # Dependencias

```

## 🛠️ Instalación y Setup

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Copia `.env.example` a `.env.local` y completa tus credenciales:

```bash
cp .env.example .env.local
```

Edita `.env.local`:

```env
# Contentful CMS Configuration
VITE_CONTENTFUL_SPACE_ID=tu_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=tu_access_token

# Playtomic Booking Integration
VITE_PLAYTOMIC_CLUB_URL=https://www.playtomic.io/clubs/tu-club-id

# App Configuration
VITE_APP_ENV=development
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

El sitio se abrirá en `http://localhost:5173`

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

## 🔌 Integración con Contentful

### Modelos de contenido requeridos

#### 1. **homePage**
```
- heroTitle (Short Text)
- heroSubtitle (Long Text)
- aboutText (Long Text)
- pricingData (JSON)
```

#### 2. **facility**
```
- title (Short Text)
- subtitle (Short Text)
- image (Asset)
- description (Long Text)
```

#### 3. **announcement**
```
- title (Short Text)
- message (Long Text)
- date (Date & Time)
- visible (Boolean)
```

### Obtener credenciales Contentful

1. Ve a [Contentful](https://www.contentful.com/)
2. Crea un espacio o usa uno existente
3. En **Settings → API keys**, obtén:
   - **Space ID**
   - **Content Delivery API token**

## 🎯 Integración Playtomic

1. Accede a [Playtomic](https://www.playtomic.io/)
2. Obtén el ID de tu club
3. Construye la URL: `https://www.playtomic.io/clubs/{CLUB_ID}`
4. Añade a `.env.local` como `VITE_PLAYTOMIC_CLUB_URL`

## 📱 Componentes Principales

### Header
- Navegación responsive (hamburger menu en mobile)
- Logo y botón CTA "Reservar Pista"
- Animaciones con Framer Motion

### Hero
- Imagen de fondo impactante
- Título y subtítulo dinámicos (desde Contentful)
- Doble CTA (Reservar / Ver Instalaciones)

### BallTransition
- Pelota de pádel interactiva
- Rotación realista en scroll
- Animaciones GPU-accelerated

### Stats
- Grid responsivo 2x2 (mobile) → 4x1 (desktop)
- Iconos Material Symbols
- Animaciones staggered al scroll

### BookingWidget
- Selector de horarios interactivo
- Información en tiempo real (mock data)
- Botón directo a Playtomic

### Facilities
- Grid de 4 instalaciones
- Hover zoom effects
- Gradientes dinámicos

### Footer
- Enlaces rápidos
- Información de contacto
- Social media links
- Copyright dinámico

## 🎨 Paleta de Colores

```javascript
// Colores principales
primary: '#002576'          // Azul marino
'secondary-container': '#ceed3e'  // Verde lima
'on-surface': '#191c1d'     // Texto oscuro
'surface': '#f8f9fa'        // Fondo claro
```

Todos los colores están configurados en `tailwind.config.js`

## 🎬 Animaciones con Framer Motion

- **Componentes**: Header, Hero, Stats, Facilities, Footer
- **Transiciones**: Fade-in, slide-in, scale, y custom spring animations
- **Interactividad**: Hover effects, tap feedback
- **Performance**: GPU-accelerated transforms, will-change optimizations

## 🚀 Optimizaciones de Performance

- ✅ Code splitting con Vite
- ✅ Lazy loading de imágenes
- ✅ CSS utilities (no CSS innecesario)
- ✅ GPU-accelerated animations
- ✅ Responsive images
- ✅ Minificación automática en build

## 📦 Scripts disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Build optimizado
npm run preview      # Preview del build

# Quality
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

## 🔒 Variables de Entorno

Ver `.env.example` para todas las variables requeridas:

| Variable | Descripción | Obligatorio |
|----------|-------------|------------|
| `VITE_CONTENTFUL_SPACE_ID` | ID del espacio Contentful | ✅ |
| `VITE_CONTENTFUL_ACCESS_TOKEN` | Token API Contentful | ✅ |
| `VITE_PLAYTOMIC_CLUB_URL` | URL del club Playtomic | ✅ |
| `VITE_APP_ENV` | Entorno (development/production) | ❌ |

## 🐛 Troubleshooting

### Error: "Contentful API not configured"
- Verifica que `.env.local` existe y está bien formado
- Comprueba que `VITE_CONTENTFUL_SPACE_ID` y `VITE_CONTENTFUL_ACCESS_TOKEN` son válidos

### Las imágenes no cargan
- Las imágenes están en CDN de Google (placeholder)
- Reemplaza las URLs en los componentes con tus propias imágenes

### Playtomic no abre
- Verifica que `VITE_PLAYTOMIC_CLUB_URL` está correctamente configurado
- El widget necesita estar configurado en Playtomic

## 📚 Recursos Adicionales

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Contentful CMS](https://www.contentful.com)
- [Vite Guide](https://vitejs.dev)

## 📄 Licencia

Proyecto propietario de Ilusión Pádel Sport Granada.

## 👨‍💻 Desarrollo

Construido con ❤️ para Ilusión Pádel Sport
