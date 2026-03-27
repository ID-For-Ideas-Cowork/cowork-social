# Frontend - CoWork Social

**Proyecto by [ID For IDeas](https://idforideas.com/)**

Frontend standalone con React. **No necesitas backend** - usa localStorage y datos mock.

## 🚀 Inicio Rápido

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000)

## 🎯 Tareas a Completar

🔥 **IMPORTANTE**: Debes completar las **9 tareas** (FE-01 a FE-09), no solo 1.

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

### FE-04: Editar Perfil de Usuario 👤

**Qué hacer:**
- Crear formulario de edición de perfil en página `/profile/edit`
- Campos: nombre, bio, skills (tags), foto de perfil (URL)
- Validaciones: nombre requerido, bio máx 200 caracteres
- Guardar cambios en `localStorage`
- Mostrar perfil actualizado en página de perfil

**Datos a guardar:**
```js
{
  id: "user-1",
  name: "Juan Pérez",
  bio: "Full Stack Developer",
  skills: ["React", "Node.js", "Python"],
  avatar: "https://..."
}
```

**Archivos a crear:**
- `src/pages/ProfileEdit.js`
- `src/pages/ProfileEdit.css`

**Modificar:**
- `src/App.js` - agregar ruta `/profile/edit`
- `src/pages/Profile.js` - botón "Editar Perfil" (solo en tu perfil)

---

### FE-05: Interacciones en Posts (Like & Comentarios) 💬

**Qué hacer:**
- Agregar botón de "Like" a cada post (contador + toggle)
- Sistema de comentarios: botón para mostrar/ocultar
- Formulario para agregar comentario (input + botón)
- Guardar likes y comentarios en `localStorage`
- Mostrar cantidad de likes y comentarios en preview

**Estructura de datos:**
```js
{
  postId: "post-1",
  likes: 15,
  likedByMe: true,
  comments: [
    { id: "c1", author: "María", text: "Excelente!", date: "..." }
  ]
}
```

**Archivos a modificar:**
- `src/components/PostCard.js` - agregar botones de like/comment
- `src/components/PostCard.css` - estilos para interacciones

**Opcional:**
- Crear `src/components/CommentSection.js` para lista de comentarios

---

### FE-06: Centro de Notificaciones 🔔

**Qué hacer:**
- Crear dropdown de notificaciones en Navbar (ícono de campana)
- Mostrar notificaciones fake: likes, comentarios, nuevos seguidores
- Badge con contador de no leídas
- Marcar como leídas al abrir el dropdown
- Guardar estado en `localStorage`

**Tipo de notificaciones:**
- "A María le gustó tu post"
- "Juan comentó en tu post"
- "Ana comenzó a seguirte"

**Datos mock:**
```js
[
  {
    id: "n1",
    type: "like",
    user: "María López",
    postId: "post-1",
    read: false,
    date: "2026-03-13T10:30:00"
  }
]
```

**Archivos a crear:**
- `src/components/NotificationDropdown.js`
- `src/components/NotificationDropdown.css`
- `src/data/mockNotifications.js`

**Modificar:**
- `src/components/Navbar.js` - agregar ícono de notificaciones

---

### FE-07: Sistema de Seguir/Dejar de Seguir Usuarios 🤝

**Qué hacer:**
- Implementar botón de seguir/dejar de seguir en perfiles
- Mostrar listas de seguidores y siguiendo
- Actualizar contadores en tiempo real
- Persistir estado en `localStorage`

**Archivos a crear:**
- `src/components/FollowButton.js`
- `src/components/FollowButton.css`
- `src/pages/FollowersList.js`
- `src/pages/FollowingList.js`

**Modificar:**
- `src/pages/Profile.js`
- `src/App.js` (agregar rutas)

---

### FE-08: Responsive Design y Mobile Optimization 📱

**Qué hacer:**
- Optimizar todas las vistas para mobile, tablet y desktop
- Implementar menú hamburguesa en navbar
- Añadir media queries en componentes y páginas
- Validar usabilidad táctil

**Breakpoints sugeridos:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

**Modificar:**
- `src/App.css`
- `src/components/Navbar.js`
- `src/components/Navbar.css`
- CSS de páginas/componentes

---

### FE-09: Página de Configuración de Usuario ⚙️

**Qué hacer:**
- Crear página `/settings`
- Secciones: notificaciones, privacidad, idioma y cuenta
- Guardar preferencias en `localStorage`
- Agregar validaciones y confirmaciones para acciones críticas

**Archivos a crear:**
- `src/pages/Settings.js`
- `src/pages/Settings.css`
- `src/components/SettingsSection.js`

**Modificar:**
- `src/App.js` (ruta `/settings`)
- `src/components/Navbar.js` (link a settings)

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
