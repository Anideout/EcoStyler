# 🌿 EcoStyle - Tienda de Plantas E-commerce
Integrantes: Sergio Puebla, Javiera Perez, Matías Borquez

Link de diseño en Lovable:
[EcoStyle](https://lovable.dev/projects/bb77dac0-a843-4258-af91-0e4942e84c3d?magic_link=mc_a58f5a18-32e3-4415-bf2e-1c798e29f082)

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
</div>

## 📋 Descripción del Proyecto

**EcoStyle** es una aplicación de e-commerce moderna y escalable diseñada para la venta de plantas con un enfoque en diseño contemporáneo y estilo natural. La aplicación combina una estética minimalista con funcionalidad completa para ofrecer una experiencia de compra excepcional.

### 🎨 Características del Diseño

- **Diseño Moderno y Minimalista**: 
  - Estética limpia y contemporánea
  - Tipografía elegante con Playfair Display e Inter
  - Espacios amplios y respirables
  - Enfoque en la experiencia del usuario

- **Paleta de Colores Natural**: 
  - Verde esmeralda (#3EB489) - Naturaleza y frescura
  - Coral (#F08370) - Calidez y energía
  - Amarillo dorado (#F3C857) - Luminosidad y vitalidad
  - Lavanda (#AA89D9) - Elegancia y sofisticación

- **Efectos Visuales Avanzados**:
  - Gradientes suaves y transiciones fluidas
  - Sombras sutiles con profundidad
  - Efectos de hover elegantes
  - Animaciones de carrusel automático

- **Sistema de Diseño Robusto**:
  - Tokens CSS centralizados
  - Componentes reutilizables
  - Modo oscuro completo
  - Responsive design avanzado

## 🚀 Tecnologías Utilizadas

### Frontend Core
- **React 18.3.1** - Biblioteca de UI con hooks modernos
- **TypeScript** - Tipado estático para mayor seguridad
- **Vite** - Build tool ultra rápido
- **React Router DOM 6.30** - Navegación SPA

### Estilos y UI
- **Tailwind CSS 3.4** - Framework utility-first
- **shadcn/ui** - Componentes UI modernos y accesibles
- **Radix UI** - Primitivos de UI sin estilos
- **Lucide React** - Iconos SVG optimizados
- **Google Fonts** - Playfair Display + Inter

### Componentes Avanzados
- **Embla Carousel** - Carrusel con autoplay
- **React Hook Form** - Gestión de formularios
- **Zod** - Validación de esquemas
- **TanStack Query** - Gestión de estado del servidor

### Funcionalidades
- **Context API** - Gestión de estado global del carrito
- **Toast Notifications** - Notificaciones elegantes
- **Sheet/Dialog** - Componentes modales

## 📁 Estructura del Proyecto

```
ecostyle/
├── src/
│   ├── assets/              # Imágenes de productos
│   │   ├── hero-plants.jpg
│   │   ├── monstera.jpg
│   │   ├── succulent.jpg
│   │   └── ...
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes shadcn/ui
│   │   ├── Header.tsx      # Header con carrito y búsqueda
│   │   ├── Hero.tsx        # Carrusel hero con autoplay
│   │   ├── ProductCard.tsx # Tarjeta de producto
│   │   ├── ProductGrid.tsx # Grid con filtros
│   │   ├── CartDrawer.tsx  # Drawer del carrito
│   │   ├── SearchDialog.tsx # Modal de búsqueda
│   │   └── Footer.tsx      # Footer completo
│   ├── contexts/           # Context API
│   │   └── CartContext.tsx # Estado global del carrito
│   ├── pages/              # Páginas
│   │   ├── Index.tsx       # Página principal
│   │   └── NotFound.tsx    # Página 404
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilidades
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Entry point
│   └── index.css           # Sistema de diseño global
├── public/                 # Archivos estáticos
├── index.html              # HTML con Google Fonts
├── tailwind.config.ts      # Configuración Tailwind
├── tsconfig.json           # Configuración TypeScript
└── vite.config.ts          # Configuración Vite
```

## 🎯 Funcionalidades Implementadas

### ✅ Características Principales
- ✨ Carrusel hero con autoplay y transiciones suaves
- 🛒 Carrito de compras completamente funcional
- 🔍 Sistema de búsqueda en tiempo real
- 🏷️ Filtros por categoría y ofertas
- 💳 Drawer lateral para el carrito
- 🎨 Sistema de diseño moderno y consistente
- 📱 Diseño completamente responsive
- 🌙 Soporte para modo oscuro
- ❤️ Botones de favoritos en productos
- 🏷️ Badges para productos nuevos
- 📊 Contador de items en el carrito
- 🔔 Notificaciones toast elegantes
- ⚡ Scroll suave a secciones
- 🎭 Efectos hover sofisticados
- 🖼️ Imágenes optimizadas

### 🎨 Mejoras de UX/UI
- Tipografía dual (Playfair Display + Inter)
- Gradientes personalizados
- Sombras con profundidad
- Transiciones suaves (300ms)
- Estados hover interactivos
- Loading states
- Empty states elegantes

## 🛠️ Instalación y Configuración

### Requisitos Previos
- Node.js 18+ y npm/yarn instalados
- Git para control de versiones
- Editor de código (VS Code recomendado)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <URL_DEL_REPOSITORIO>
cd ecostyle
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
```
http://localhost:8080
```

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo con HMR

# Producción
npm run build        # Compila para producción optimizada
npm run preview      # Previsualiza el build de producción

# Linting y Formato
npm run lint         # Ejecuta ESLint
```

## 🎨 Sistema de Diseño

### Tipografía
```css
--font-display: 'Playfair Display'  /* Títulos y encabezados */
--font-sans: 'Inter'                /* Cuerpo de texto */
```

### Colores Principales (HSL)
```css
/* Light Mode */
--primary: 158 64% 52%        /* Verde esmeralda */
--secondary: 40 88% 62%       /* Amarillo dorado */
--accent: 12 88% 65%          /* Coral cálido */
--tertiary: 280 58% 68%       /* Lavanda suave */

/* Backgrounds */
--background: 140 30% 98%     /* Blanco verdoso */
--card: 0 0% 100%             /* Blanco puro */
--muted: 140 20% 96%          /* Gris verdoso */
```

### Gradientes
```css
--gradient-primary: linear-gradient(135deg, #3EB489, #64DBBA)
--gradient-accent: linear-gradient(135deg, #F08370, #F3C857)
--gradient-hero: linear-gradient(180deg, #FAFCFB, #F0F6F4)
--gradient-card: linear-gradient(145deg, #FFFFFF, #FAFCFA)
```

### Sombras
```css
--shadow-soft: 0 2px 24px -8px rgba(62, 180, 137, 0.12)
--shadow-medium: 0 8px 32px -8px rgba(62, 180, 137, 0.18)
--shadow-glow: 0 0 40px rgba(100, 219, 186, 0.25)
```

### Border Radius
```css
--radius: 0.75rem      /* Base */
--radius-md: 0.5rem    /* Medium */
--radius-sm: 0.375rem  /* Small */
```

## 🌐 Despliegue

### Despliegue en Lovable
1. Abre el proyecto en [Lovable](https://lovable.dev)
2. Haz clic en "Publish" en la esquina superior derecha
3. Tu app estará en `tuproyecto.lovable.app`

### Despliegue Manual
Compatible con:
- **Vercel** (Recomendado)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**
- **Cloudflare Pages**

```bash
npm run build
# Los archivos compilados estarán en /dist
```

## 📱 Características Responsive

### Breakpoints
```css
mobile:  < 768px     /* 1 columna */
tablet:  768-1024px  /* 2 columnas */
desktop: > 1024px    /* 3 columnas */
```

### Adaptaciones Móviles
- Navegación hamburger (< 768px)
- Grid adaptativo automático
- Carrusel touch-friendly
- Drawer full-screen en móvil
- Tipografía escalable

## 🚀 Roadmap Futuro

### Próximas Funcionalidades
- [ ] Persistencia del carrito (localStorage)
- [ ] Páginas de detalle de producto
- [ ] Sistema de wishlist completo
- [ ] Checkout con formulario
- [ ] Integración de pagos (Stripe)
- [ ] Sistema de reviews y ratings
- [ ] Filtros avanzados (precio, popularidad)
- [ ] Ordenamiento de productos
- [ ] Animaciones de página mejoradas
- [ ] PWA (Progressive Web App)
- [ ] Autenticación de usuarios
- [ ] Panel de administración
- [ ] Historial de pedidos
- [ ] Seguimiento de envíos

### Mejoras Técnicas
- [ ] Tests unitarios (Vitest)
- [ ] Tests E2E (Playwright)
- [ ] Optimización de imágenes (WebP)
- [ ] Lazy loading de rutas
- [ ] Service Worker para offline
- [ ] Analytics integration
- [ ] Error boundary
- [ ] Performance monitoring

## 🔒 Mejores Prácticas

- ✅ TypeScript estricto para type safety
- ✅ Componentes modulares y pequeños
- ✅ Sistema de diseño centralizado con tokens
- ✅ Accesibilidad con Radix UI
- ✅ SEO optimizado (meta tags, alt texts)
- ✅ Responsive design mobile-first
- ✅ Code splitting automático
- ✅ Optimización de bundle size
- ✅ Git conventional commits
- ✅ ESLint + Prettier

## 👥 Contribuir

Las contribuciones son bienvenidas:
1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guía de Commits
```
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
style: cambios de formato
refactor: refactorización de código
test: añadir tests
chore: tareas de mantenimiento
```

## 📄 Licencia

Este proyecto fue creado como parte de un proyecto académico.

## 📞 Contacto

Para preguntas o sugerencias sobre este proyecto:
- Email: contacto@ecostyle.com
- Website: www.ecostyle.com
- Instagram: @ecostyle

---

<div align="center">
  <strong>Desarrollado con 💚 por el equipo de EcoStyle</strong>
  <br />
  <em>Estilo natural, diseño moderno</em>
</div>
