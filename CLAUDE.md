# Ilusión Pádel Sport - Guía de Desarrollo

## 📋 Descripción del Proyecto

Sitio web React moderno para el club de pádel **Ilusión Pádel Sport** en Granada. Stack: React 18 + Vite + Tailwind CSS + Framer Motion + Contentful CMS + Playtomic API.

## 🏗️ Arquitectura

```
Presentación (Components) 
↓
Lógica (Hooks - useContentful, useScrollPosition)
↓
Servicios (contentfulClient, playtomicService)
↓
Datos (Contentful CMS, Playtomic API)
```

### Componentes Principales

| Componente | Ubicación | Responsabilidad |
|-----------|-----------|-----------------|
| `Header` | `src/components/Header.jsx` | Navegación + CTA |
| `Hero` | `src/components/Hero.jsx` | Sección principal con imagen |
| `BallTransition` | `src/components/BallTransition.jsx` | Pelota interactiva con scroll |
| `Stats` | `src/components/Stats.jsx` | Grid 2x2/4x1 de estadísticas |
| `BookingWidget` | `src/components/BookingWidget.jsx` | Integración Playtomic |
| `Facilities` | `src/components/Facilities.jsx` | Grid 1x4/2x2 de instalaciones |
| `Footer` | `src/components/Footer.jsx` | Pie + contacto + social |

## 🔧 Tecnologías

- **React 18** - UI framework
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion 10** - Animaciones
- **Contentful SDK** - CMS
- **TypeScript** - Type safety (opcional)

## 📦 Dependencias Clave

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "contentful": "^10.5.0",
  "framer-motion": "^10.16.4",
  "tailwindcss": "^3.3.0"
}
```

## 🎯 Flujos Principales

### 1. Fetching de Contenido (Contentful)

```javascript
// Hook personalizado
const { content, loading, error } = useHomePageContent()

// Servicio base
contentfulClient.getEntries({ content_type: 'homePage' })
```

### 2. Animaciones (Framer Motion)

```javascript
// Uso estándar
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### 3. Reservas (Playtomic)

```javascript
// Abre enlace directo a Playtomic
openPlaytomicBooking()

// O integra widget con iframe
embedPlaytomicWidget(containerId)
```

## 📱 Responsive Design

```
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px+
```

Breakpoints Tailwind usados:
- Ninguno (default mobile-first)
- `md:` (768px+)

## 🎨 Sistema de Diseño

### Colores (Tailwind Config)

```javascript
primary: '#002576'                    // Azul marino
'secondary-container': '#ceed3e'      // Verde lima
'on-surface': '#191c1d'               // Texto oscuro
'surface': '#f8f9fa'                  // Fondo
```

### Tipografía

```javascript
'display-lg': ['48px', { fontWeight: '700' }]
'headline-lg': ['32px', { fontWeight: '600' }]
'title-md': ['20px', { fontWeight: '600' }]
'body-md': ['16px', { fontWeight: '400' }]
```

### Espaciado

```javascript
margin-mobile: '16px'
margin-desktop: '48px'
gutter: '24px'
```

## ⚡ Convenciones de Código

### Componentes

```javascript
// Siempre functional components
const MyComponent = ({ prop1, prop2 }) => {
  // Hooks al inicio
  const [state, setState] = useState(null)
  const data = useCustomHook()
  
  // JSX
  return (
    <div>Content</div>
  )
}
```

### Estilos

```jsx
// Usar clases de Tailwind
className="bg-primary text-white px-lg py-sm rounded-lg hover:opacity-90"

// Variables de color personalizadas disponibles
className="text-primary bg-secondary-container"
```

### Animaciones

```javascript
// Siempre con Framer Motion
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.5 }}
>
```

## 🔌 Configuración de APIs

### Contentful

Crear modelos de contenido en el dashboard de Contentful:

```
1. homePage
   - heroTitle: Short Text
   - heroSubtitle: Long Text
   - aboutText: Long Text
   - pricingData: JSON

2. facility
   - title: Short Text
   - subtitle: Short Text
   - image: Asset
   - description: Long Text

3. announcement
   - title: Short Text
   - message: Long Text
   - date: Date & Time
   - visible: Boolean
```

### Variables de Entorno

`.env.local` requerido:

```
VITE_CONTENTFUL_SPACE_ID=xxx
VITE_CONTENTFUL_ACCESS_TOKEN=xxx
VITE_PLAYTOMIC_CLUB_URL=https://www.playtomic.io/clubs/xxx
VITE_APP_ENV=development
```

## 🚀 Comandos Comunes

```bash
# Desarrollo
npm run dev                    # Vite dev server

# Build
npm run build                  # Producción
npm run preview                # Ver build local

# Calidad
npm run lint                   # ESLint
npm run type-check             # TypeScript

# Instalar deps
npm install                    # Todas
npm install <package>          # Específico
```

## 🧪 Patrones de Testing

(Próximo: agregar Jest + React Testing Library)

```javascript
// Test de componente
describe('Header', () => {
  it('should render booking button', () => {
    // test
  })
})
```

## 📊 Estructura de Carpetas Futura

```
src/
├── components/          # ✅ Componentes UI
├── hooks/              # ✅ Custom hooks
├── services/           # ✅ API clients
├── utils/              # TODO: Funciones auxiliares
├── constants/          # TODO: Constantes globales
├── types/              # TODO: TypeScript types
└── tests/              # TODO: Tests
```

## 🔒 Secrets & Seguridad

- ✅ Variables sensibles en `.env.local` (gitignored)
- ✅ No commitar `.env` o credenciales
- ✅ Tokens Contentful incluidos en deploy seguro (CI/CD)
- ✅ API calls desde frontend (Contentful permite read-only)

## 📈 Performance

- ✅ Vite para build ultra-rápido
- ✅ Tree-shaking automático
- ✅ CSS utilities (sin CSS innecesario)
- ✅ Framer Motion GPU-accelerated
- ✅ Images servidas desde CDN

## 🐛 Debug & Troubleshooting

```javascript
// Contentful
console.log(import.meta.env.VITE_CONTENTFUL_SPACE_ID)
contentfulClient.getEntries().then(console.log)

// Scroll
useScrollPosition() → retorna número actual de pixels

// Animaciones
Framer Motion DevTools disponible en desarrollo
```

## 📚 Recursos Internos

- `README.md` - Guía de usuario final
- `.env.example` - Template de variables
- `tailwind.config.js` - Tema completo
- `vite.config.js` - Configuración build

## 🎯 Next Steps

1. ✅ Estructura completa generada
2. ⏳ Setup Contentful con modelos
3. ⏳ Setup Playtomic club ID
4. ⏳ Tests con Jest
5. ⏳ Deployment (Vercel/Netlify)
6. ⏳ Monitore con Sentry/LogRocket

## 👥 Equipo & Contacto

- **Owner**: Ilusión Pádel Sport Granada
- **Email**: info@ilusionpadel.es
- **Phone**: +34 958 00 00 00

---

**Última actualización**: 2025-01-XX
**Versión**: 1.0.0
**Estatus**: Pronto en desarrollo
