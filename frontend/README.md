# Frontend - CoWork Social

**Proyecto by [ID For IDeas](https://linkedin.com/company/idforideas)**

Frontend standalone con React. **No necesitas backend** - usa localStorage y datos mock.

## 🚀 Inicio Rápido

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000)

## 🎯 3 Tareas a Completar

🔥 **IMPORTANTE**: Debes completar las **3 tareas**, no solo 1.

### FE-01: Tema Oscuro/Claro ⚫⚪

**Qué hacer:**
- Crear toggle switch para cambiar tema
- Definir variables CSS para modo claro y oscuro
- Guardar preferencia en `localStorage`
- Aplicar el tema al cargar la página

**Ejemplo de colores:**
- Claro: fondo #fff, texto #000
- Oscuro: fondo #1a1a1a, texto #fff

**Archivos a modificar:**
- `src/App.js` o crear `src/hooks/useTheme.js`
- `src/App.css` - variables CSS
- Agregar toggle en `Navbar.js`

---

### FE-02: Modal de Crear Post 📝

**Qué hacer:**
- Crear componente Modal que se abre con un botón
- Formulario: textarea para contenido, botón para enviar
- Preview del texto mientras escribes
- Guardar posts en `localStorage`
- Actualizar el feed automáticamente

**Archivos a crear:**
- `src/components/CreatePostModal.js`
- `src/components/CreatePostModal.css`

**Modificar:**
- `src/pages/Feed.js` - agregar botón y lógica

---

### FE-03: Buscador de Usuarios 🔍

**Qué hacer:**
- Crear página `/search` con input de búsqueda
- Filtros: por nombre, por skill
- Mostrar resultados en cards
- Usar datos mock (array de 10-15 usuarios fake)

**Archivos a crear:**
- `src/pages/Search.js`
- `src/pages/Search.css`
- `src/data/mockUsers.js` (datos fake)

**Modificar:**
- `src/App.js` - agregar ruta
- `src/components/Navbar.js` - agregar link

---

## 📦 Deploy

### Opción 1: Vercel (Recomendado)

1. Crea cuenta en [vercel.com](https://vercel.com)
2. Instala Vercel CLI:
```bash
npm i -g vercel
```
3. Deploy:
```bash
cd frontend
vercel
```
4. Sigue las instrucciones, selecciona el proyecto
5. Copia el link que te da

### Opción 2: Netlify

1. Build:
```bash
npm run build
```
2. Arrastra carpeta `build/` a [netlify.com/drop](https://app.netlify.com/drop)
3. Copia el link

## 📝 Cómo hacer tu PR

1. Fork del repo
2. Crea rama: `git checkout -b feature/FE-01-dark-mode`
3. Haz commits: `git commit -m "feat: implementa tema oscuro"`
4. Push: `git push origin feature/FE-01-dark-mode`
5. Crea PR en GitHub
6. Incluye:
   - Screenshots de tu feature
   - Link del deploy
   - Breve explicación

## 🎓 Recursos

- [React Docs](https://react.dev/)
- [localStorage MDN](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [CSS Variables](https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties)

## 💬 ¿Necesitas Ayuda?

Únete al canal **#cowork** en Discord: [https://discord.gg/Vg5uACSs](https://discord.gg/Vg5uACSs)

¡La comunidad de ID For IDeas está lista para ayudarte! 🚀
