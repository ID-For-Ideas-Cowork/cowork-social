# Ejemplo: Sistema de Diseño en Figma

Esta es una guía completa para implementar la tarea **DS-01: Sistema de Diseño**.

---

## 🎨 ¿Qué es un Sistema de Diseño?

Un sistema de diseño es una colección de componentes reutilizables, guías de estilo y patrones que aseguran consistencia visual en toda la aplicación.

---

## 📋 Estructura del Sistema de Diseño

### 1. **Fundamentos** (Foundation)
- Colores
- Tipografía
- Espaciado
- Bordes y sombras
- Grid system

### 2. **Componentes** (Components)
- Botones
- Inputs
- Cards
- Modals
- Navbar
- Avatars
- Badges

### 3. **Patrones** (Patterns)
- Formularios
- Layouts de página
- Estados (hover, active, disabled)
- Feedback visual (success, error, warning)

---

## 🚀 Paso a Paso en Figma

### Paso 1: Crear el archivo base

1. Abre Figma → New Design File
2. Renombra: "CoWork Social - Design System"
3. Crea 3 páginas:
   - `🎨 Foundation` (fundamentos)
   - `🧩 Components` (componentes)
   - `📐 Layouts` (ejemplos de uso)

---

### Paso 2: Definir Colores (Foundation)

#### Paleta de Colores Recomendada:

```
PRIMARY (Azul):
- primary-900: #1e3a8a
- primary-700: #1d4ed8
- primary-500: #3b82f6 ← Principal
- primary-300: #93c5fd
- primary-100: #dbeafe

NEUTRAL (Grises):
- neutral-900: #171717
- neutral-700: #404040
- neutral-500: #737373
- neutral-300: #d4d4d4
- neutral-100: #f5f5f5

SUCCESS (Verde):
- success-500: #10b981

ERROR (Rojo):
- error-500: #ef4444

WARNING (Amarillo):
- warning-500: #f59e0b
```

**En Figma:**
1. Crea cuadrados de 100x100 px para cada color
2. Usa "Local Styles" → "Color Style" para guardarlos
3. Nombra: `primary/500`, `neutral/900`, etc.
4. Agrega descripción: "Botones principales, links"

---

### Paso 3: Tipografía (Foundation)

#### Fuente Recomendada: **Inter** (disponible en Figma)

```
Headings:
- H1: Inter Bold 40px / 48px line-height
- H2: Inter Bold 32px / 40px line-height
- H3: Inter SemiBold 24px / 32px line-height

Body:
- Body Large: Inter Regular 18px / 28px
- Body: Inter Regular 16px / 24px
- Body Small: Inter Regular 14px / 20px

UI Elements:
- Button: Inter SemiBold 16px
- Caption: Inter Regular 12px / 16px
```

**En Figma:**
1. Crea texto de ejemplo para cada estilo
2. Define en "Local Styles" → "Text Style"
3. Nombra: `Heading/H1`, `Body/Regular`, etc.

---

### Paso 4: Espaciado (Foundation)

**Sistema de 4px:**
```
spacing-1: 4px
spacing-2: 8px
spacing-3: 12px
spacing-4: 16px
spacing-5: 20px
spacing-6: 24px
spacing-8: 32px
spacing-12: 48px
spacing-16: 64px
```

**En Figma:**
1. Crea cuadrados de cada tamaño
2. Etiqueta cada uno
3. Usa estos valores en todos tus componentes

---

### Paso 5: Crear Componentes

#### **Componente 1: Button**

**Variantes:**
- **Type**: Primary, Secondary, Outline, Ghost
- **Size**: Small (32px), Medium (40px), Large (48px)
- **State**: Default, Hover, Active, Disabled

**Ejemplo - Primary Button (Medium):**
```
Frame: 
  - Auto-layout horizontal
  - Padding: 12px horizontal, 8px vertical
  - Border-radius: 8px
  - Background: primary-500

Text:
  - "Button Text"
  - Text Style: Button
  - Color: White

Icon (opcional):
  - 20x20px antes del texto
  - Spacing: 8px
```

**Crear variante en Figma:**
1. Selecciona el botón → Right-click → "Create Component"
2. Click derecho → "Add Variant"
3. Define properties: `type`, `size`, `state`
4. Duplica y modifica para cada combinación

---

#### **Componente 2: Input Field**

**Estados:**
- Default
- Focus (borde azul)
- Error (borde rojo + mensaje)
- Disabled (gris claro)

**Estructura:**
```
Frame:
  - Width: 320px (o fill container)
  - Auto-layout vertical

Label:
  - Text Style: Body Small
  - Color: neutral-700
  - Margin-bottom: 4px

Input:
  - Height: 40px
  - Padding: 12px
  - Border: 1px solid neutral-300
  - Border-radius: 8px
  - Background: white

Error Message:
  - Text Style: Caption
  - Color: error-500
  - Margin-top: 4px
  - Visible solo en estado error
```

---

#### **Componente 3: Card (Post)**

```
Frame:
  - Width: 600px
  - Auto-layout vertical
  - Padding: 16px
  - Border-radius: 12px
  - Background: white
  - Shadow: 0px 2px 8px rgba(0,0,0,0.08)

Header:
  - Avatar (40x40px círculo)
  - Name (Body SemiBold)
  - Time (Caption, neutral-500)
  - Spacing: 8px

Content:
  - Text: Body
  - Max-width: full
  - Margin-top: 12px

Actions:
  - Like button + count
  - Comment button + count
  - Share button
  - Spacing: 16px
```

---

### Paso 6: Documentar

**Para cada componente, agrega:**

1. **Descripción**: Cuándo usarlo
2. **Anatomía**: Partes que lo componen
3. **Spacing**: Distancias internas
4. **Behavior**: Cómo se comporta (hover, click)
5. **Code Reference**: Clase CSS o componente React

**Ejemplo de documentación:**

```
📦 BUTTON COMPONENT

✅ Cuándo usar:
  - Acciones principales (Primary)
  - Acciones secundarias (Secondary)
  - Acciones destructivas (Outline con rojo)

❌ No usar para:
  - Links de navegación (usa <a> tag)
  - Abrir URLs externas (usa link con ícono)

📏 Spacing:
  - Margin-right entre botones: 8px
  - Margin-top en mobile: 12px

🎨 Estados:
  - Hover: brightness(110%)
  - Active: brightness(90%)
  - Disabled: opacity(50%) + cursor not-allowed

💻 Código:
  <Button variant="primary" size="md">
    Click me
  </Button>
```

---

## 📤 Entregables

Al completar **DS-01**, tu PR debe incluir:

### 1. Link público de Figma
Comparte con "Anyone with the link can view"

### 2. Exportar assets
```
design/
├── assets/
│   ├── icons/
│   │   ├── icon-like.svg
│   │   ├── icon-comment.svg
│   │   └── icon-share.svg
│   ├── logo/
│   │   ├── logo.svg
│   │   ├── logo.png
│   │   └── logo-icon.svg
│   └── colors.json (opcional)
└── design-system-link.txt
```

### 3. Archivo de documentación
Crea `design/DESIGN_SYSTEM.md` con:
- Link al archivo de Figma
- Guía de colores (hex codes)
- Guía de tipografía (fuentes y tamaños)
- Capturas de pantalla de componentes principales

---

## 🎯 Checklist de Calidad

Antes de enviar tu PR, verifica:

- [ ] Colores definidos como "Color Styles"
- [ ] Tipografía definida como "Text Styles"
- [ ] Botones organizados por variantes (type, size, state)
- [ ] Inputs con todos los estados (default, focus, error, disabled)
- [ ] Cards con estructura consistente
- [ ] Componentes documentados con descripción
- [ ] Assets exportados en SVG cuando sea posible
- [ ] Link de Figma público funciona
- [ ] README actualizado con link al sistema de diseño

---

## 💡 Tips Avanzados

### Auto-Layout
Usa Auto-Layout en todos los componentes para que se adapten automáticamente al contenido.

### Constraints
Define constraints para que componentes se redimensionen correctamente en responsive.

### Plugins Útiles
- **Stark**: Verificar contraste de colores (accesibilidad)
- **A11y - Color Contrast Checker**: WCAG compliance
- **Component Replacer**: Actualizar componentes en masa
- **Content Reel**: Datos fake para prototipos

### Naming Convention
```
ComponentName/Variant/State/Size

Ejemplos:
- Button/Primary/Default/Medium
- Input/Text/Focus
- Card/Post/Default
```

---

## 📚 Referencias

- [Figma Best Practices](https://www.figma.com/best-practices/)
- [Material Design System](https://m3.material.io/)
- [Atlassian Design System](https://atlassian.design/)
- [Primer (GitHub)](https://primer.style/)
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)

---

## 🎓 Siguiente Paso: DS-02 (Mockups)

Una vez que tengas el Design System, podrás crear mockups de páginas completas reutilizando estos componentes. ¡Es como tener LEGO para diseño! 🧱

---

**¡Listo para crear tu Design System!** 🎨🚀

Si tienes dudas, revisa sistemas de diseño populares como Material Design o Ant Design para inspiración.
