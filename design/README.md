# Design - CoWork Social

**Proyecto by [ID For IDeas](https://idforideas.com/)**

Diseño UI/UX en Figma. Todo el trabajo es en la nube.

## 🎯 6 Tareas a Completar (DS-01 a DS-06)

🔥 **IMPORTANTE**: Debes completar las **6 tareas**, no solo 1.

### DS-01: Sistema de Diseño 🎨

**Qué hacer:**
1. Crea archivo Figma con Design System
2. Define paleta de colores (primario, secundario, grises, feedback)
3. Tipografía (headings, body, labels)
4. Spacing system (4px, 8px, 16px, 24px, 32px...)
5. Componentes básicos:
   - Botones (primary, secondary, estados)
   - Inputs y formularios
   - Cards
   - Navigation bar
   - Modal

**Estructura en Figma:**
- Página 1: Colors & Typography
- Página 2: Spacing & Grid
- Página 3: Components Library
- Página 4: Component States (hover, active, disabled)

**Deliverables:**
- Link público de Figma
- Exportar assets a `design/DS-01-design-system/assets/`
- `STYLE_GUIDE.md` con especificaciones

---

### DS-02: Mockups de App 📱

**Qué hacer:**
1. Diseña 3-5 pantallas principales en alta fidelidad
2. Screens a diseñar:
   - Login/Register
   - Feed (home con posts)
   - Perfil de usuario
   - Crear post (modal o página)
   - Búsqueda de usuarios (opcional)

**Requisitos:**
- Desktop (1440px) y Mobile (375px)
- Consistencia visual
- Estados: default, hover, loading
- Usa el Style Guide del proyecto (o crea uno simple)

**Deliverables:**
- Link público de Figma
- Exportar previews PNG a `design/DS-02-mockups/previews/`
- `DESIGN_DECISIONS.md` explicando tus decisiones

---

### DS-03: Logo y Branding 🎯

**Qué hacer:**
1. Diseña logo para "CoWork Social"
2. Crea variantes:
   - Full logo (icon + text)
   - Isotipo (solo icon)
   - Monocromático
   - Versiones para fondo claro y oscuro
3. Define Brand Guidelines:
   - Paleta de colores de marca
   - Tipografía corporativa
   - Usos correctos e incorrectos
   - Espaciado mínimo
   - Tamaños mínimos

**Deliverables:**
- Link público de Figma
- Exportar logos (SVG + PNG) a `design/DS-03-branding/logos/`
- `BRAND_GUIDELINES.md` con guía de uso

---

### DS-04: Componentes de Interacción Social 💬

**Qué hacer:**
1. Diseña componentes de like, comentarios y compartir
2. Define estados: default, hover, active, loading
3. Incluye especificaciones de microinteracciones

**Deliverables:**
- Componentes listos en Figma
- Assets exportados
- `INTERACTION_GUIDE.md`

---

### DS-05: Variantes Dark Mode 🌙

**Qué hacer:**
1. Adaptar pantallas principales a dark mode
2. Definir tokens de color para modo oscuro
3. Validar contraste y accesibilidad

**Deliverables:**
- Pantallas en dark mode
- Guía de contraste
- `DARK_MODE_GUIDE.md`

---

### DS-06: Prototipos Interactivos (User Flows) 🔁

**Qué hacer:**
1. Prototipar flujos end-to-end en Figma
2. Incluir transiciones entre pantallas
3. Documentar flujo de onboarding y publicación

**Deliverables:**
- Prototipos navegables
- Flujos documentados
- `USER_FLOWS.md`

---

## 📦 Estructura de Archivos

```
design/
├── DS-01-design-system/
│   ├── assets/           # SVGs, PNGs exportados
│   ├── STYLE_GUIDE.md
│   └── FIGMA_LINK.md
│
├── DS-02-mockups/
│   ├── previews/         # Screenshots de mockups
│   ├── DESIGN_DECISIONS.md
│   └── FIGMA_LINK.md
│
└── DS-03-branding/
    ├── logos/            # Logo exports

## 💬 ¿Necesitas Ayuda?

Únete al canal **#cowork** en Discord: [https://discord.gg/Vg5uACSs](https://discord.gg/Vg5uACSs)

¡La comunidad de ID For IDeas está lista para ayudarte! 🚀
    ├── BRAND_GUIDELINES.md
    └── FIGMA_LINK.md
```

---

## 🚀 Cómo Compartir Figma

### Hacer archivo público:

1. En Figma, click "Share" (arriba derecha)
2. "Anyone with the link" → **Can view**
3. Copia el link
4. Crea archivo `FIGMA_LINK.md`:

```markdown
# Figma Link - [Nombre del Proyecto]

**Link:** https://www.figma.com/file/XXXXXX/tu-archivo

**Cómo ver:**
1. Click en el link
2. Explora las páginas en el panel izquierdo
3. Haz zoom y navega libremente

**Páginas incluidas:**
- Page 1: [Descripción]
- Page 2: [Descripción]
- etc
```

---

## 📤 Exportar Assets de Figma

1. Selecciona el elemento
2. Panel derecho → **Export**
3. Agrega formato (PNG @2x, SVG)
4. Click "Export"
5. Guarda en carpeta `assets/` o `logos/`

---

## 📝 Cómo hacer tu PR

1. Crea tu diseño en Figma
2. Haz archivo público (view only)
3. Exporta assets necesarios
4. Crea carpeta en `/design` con tu tarea
5. Incluye:
   - `FIGMA_LINK.md` con el link
   - Assets exportados
   - Markdown explicando decisiones de diseño
6. PR con:
   - Link a Figma (público)
   - Screenshots en el PR description
   - Explicación de tu proceso de diseño
   - Por qué elegiste esos colores/fuentes

---

## 🎓 Recursos

- [Figma Learn](https://help.figma.com/)
- [Material Design](https://m3.material.io/)
- [iOS Design Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Coolors](https://coolors.co/) - Paletas
- [Google Fonts](https://fonts.google.com/)
- [Unicons](https://iconscout.com/unicons) - Iconos
- [Undraw](https://undraw.co/) - Ilustraciones

---

## 💡 Tips de Diseño

**Colores:**
- Usa 1 color primario, 1-2 secundarios
- Escala de grises (al menos 5 tonos)
- Colores de feedback (success, warning, error)

**Tipografía:**
- 1-2 fuentes máximo
- Escala tipográfica clara (h1, h2, body, small)

**Spacing:**
- Sistema de 4px o 8px
- Consistencia en márgenes y paddings

**Componentes:**
- Piensa en reusabilidad
- Documenta estados (hover, active, disabled)
- Mobile-first o responsive
