# Frontend - CoWork Social

**Proyecto by [ID For IDeas](https://idforideas.com/)**

Frontend standalone con React. **No necesitas backend** - usa localStorage y datos mock.

## 🚀 Inicio Rápido

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000)

## ✅ Tareas Implementadas

### FE-01: Tema Oscuro/Claro ⚫⚪

**Archivos:**
- `src/hooks/useTheme.js` — hook que lee/guarda el tema en `localStorage` y aplica la clase `dark-theme` al `body`
- `src/App.css` — variables CSS para modo claro y oscuro (`--bg-color`, `--text-color`, `--card-bg`, etc.)
- `src/App.js` — usa el hook y pasa `theme` / `toggleTheme` al Navbar
- `src/components/Navbar.js` — toggle switch ☀️/🌙 en la barra de navegación
- Todos los archivos CSS de páginas y componentes actualizados para usar las variables de tema

**Cómo funciona:**
- El toggle en el navbar cambia entre modo claro y oscuro
- La preferencia se guarda en `localStorage` y se aplica automáticamente al recargar

---

### FE-02: Modal de Crear Post 📝

**Archivos:**
- `src/components/CreatePostModal.js` — modal con textarea, vista previa en tiempo real y botón de publicar
- `src/components/CreatePostModal.css` — estilos del modal con animación de entrada
- `src/pages/Feed.js` — integra el modal, guarda y carga posts desde `localStorage`

**Cómo funciona:**
- El botón "✏️ Nueva Publicación" abre el modal
- Mientras escribes aparece una vista previa del post
- Al publicar, el post se agrega al inicio del feed y se persiste en `localStorage`

---

### FE-03: Buscador de Usuarios 🔍

**Archivos:**
- `src/data/mockUsers.js` — 12 usuarios fake con nombre, ubicación, bio y skills
- `src/pages/Search.js` — página `/search` con búsqueda por nombre y filtro por skill
- `src/pages/Search.css` — estilos de la página y las cards de usuarios
- `src/App.js` — ruta `/search` agregada
- `src/components/Navbar.js` — link "Buscar" agregado al navbar

**Cómo funciona:**
- Input de texto filtra usuarios por nombre en tiempo real
- Tags de skills clickeables filtran por tecnología
- Ambos filtros funcionan combinados
- Al hacer clic en un skill de una card se activa ese filtro

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
