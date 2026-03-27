# 🤝 Cómo Contribuir

**Proyecto by [ID For IDeas](https://idforideas.com/)**

---

## 🎯 Regla Principal

**Completa el roadmap completo de tu rol** (ver README del área), no solo una parte.

---

## 🚀 7 Pasos para Contribuir

### 1️⃣ Fork del Repositorio

El **Fork** crea una copia del proyecto en tu cuenta de GitHub donde puedes hacer cambios libremente.

**Cómo hacer Fork:**

1. Ve al repositorio original: [github.com/ID-For-Ideas-Cowork/cowork-social](https://github.com/ID-For-Ideas-Cowork/cowork-social)
2. Haz clic en el botón **"Fork"** (esquina superior derecha)
3. Selecciona tu cuenta personal
4. Espera a que GitHub copie el proyecto
5. ¡Listo! Ahora tienes tu propia copia en `github.com/TU-USUARIO/cowork-social`

---

### 2️⃣ Clona tu Fork

**Clona** significa descargar el proyecto a tu computadora para trabajar localmente.

```bash
# 1. Clona TU fork (no el original)
git clone https://github.com/TU-USUARIO/cowork-social.git

# 2. Entra a la carpeta
cd cowork-social

# 3. Verifica que estás en tu fork
git remote -v
# Debe mostrar: origin  https://github.com/TU-USUARIO/cowork-social.git
```

**💡 Tip:** Reemplaza `TU-USUARIO` con tu username de GitHub.

---

### 3️⃣ Lee el README de tu Área

**Antes de escribir código, LEE el README completo de tu rol.**

Cada área tiene instrucciones específicas con:
- ✅ Qué hacer en cada tarea
- ✅ Archivos a crear/modificar
- ✅ Ejemplos de código
- ✅ Cómo ejecutar y probar

**Navega al README de tu rol:**

```bash
# Frontend
cat frontend/README.md
# O abrelo en tu editor: code frontend/README.md

# Backend Node.js
cat backend/nodejs/README.md

# Backend Python
cat backend/python/README.md

# Data Analytics
cat data/README.md

# Design
cat design/README.md

# Project Management
cat docs/README.md

# QA Testing
cat qa/README.md

# DevOps
cat devops/README.md
```

**📖 Lee TODO el README:** Tareas, estructura de archivos, ejemplos, deploy, recursos.

---

### 4️⃣ Instala Dependencias y Ejecuta

Cada rol tiene su propio proceso de setup. Sigue las instrucciones específicas:

#### 👨‍💻 Frontend Developer

```bash
cd frontend

# Instala dependencias
npm install

# Ejecuta el servidor de desarrollo
npm start

# Abre en navegador: http://localhost:3000
```

**Lee:** `frontend/README.md` para el roadmap Frontend (FE-01 a FE-09)

---

#### 🔧 Backend Developer - Node.js

```bash
cd backend/nodejs

# Instala dependencias
npm install

# Ejecuta el servidor
npm run dev

# API disponible en: http://localhost:5000
# Docs en: http://localhost:5000/api-docs
```

**Lee:** `backend/nodejs/README.md` para el roadmap Node.js (BE-01, BE-02, BE-04, BE-05)

---

#### 🐍 Backend Developer - Python

```bash
cd backend/python

# Crea entorno virtual (recomendado)
python -m venv venv

# Activa el entorno
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Instala dependencias
pip install -r requirements.txt

# Ejecuta el servidor
uvicorn main:app --reload

# API disponible en: http://localhost:8000
# Docs en: http://localhost:8000/docs
```

**Lee:** `backend/python/README.md` para el roadmap Python (BE-03, BE-06)

---

#### 📊 Data Analyst

```bash
cd data

# Crea entorno virtual
python -m venv venv

# Activa el entorno
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux

# Instala dependencias
pip install -r requirements.txt

# Inicia Jupyter Notebook
jupyter notebook

# O ejecuta dashboard de ejemplo
streamlit run EXAMPLE_DASHBOARD.md
```

**Lee:** `data/README.md` para el roadmap Data (DA-01 a DA-06)

---

#### 🎨 Designer

**No necesitas instalar nada.** Todo el trabajo es en Figma (cloud).

1. Crea cuenta gratuita en [figma.com](https://figma.com)
2. Lee `design/README.md` para el roadmap Design (DS-01 a DS-06)
3. Crea tu archivo Figma
4. Exporta assets cuando termines

---

#### 📋 Project Manager

**No necesitas instalar nada.** Solo herramientas de documentación.

1. Editor de Markdown (VS Code recomendado)
2. Cuenta en Miro/Notion (gratis)
3. Lee `docs/README.md` para el roadmap PM (PM-01 a PM-06)
4. Crea tus documentos

---

#### ✅ QA Tester

```bash
cd qa

# Para tests manuales: solo lee README
# Para tests automatizados (QA-02):

# Primero ejecuta el frontend
cd ../frontend
npm install
npm start

# Luego instala Cypress
npm install --save-dev cypress

# Abre Cypress
npx cypress open
```

**Lee:** `qa/README.md` para el roadmap QA (QA-01 a QA-06)

---

#### 🚀 DevOps Engineer

**Instala Docker:**

```bash
# Verifica si Docker está instalado
docker --version
docker-compose --version

# Si no está instalado, descarga desde:
# https://www.docker.com/get-started
```

**Setup inicial:**

```bash
cd devops

# Verifica que puedas construir imágenes
docker-compose build

# Levanta servicios
docker-compose up -d

# Para CI/CD: 
# - GitHub Actions se ejecuta automáticamente al hacer push
# - Configura secrets en GitHub Settings si es necesario

# Para Monitoring:
# - Crea cuenta en UptimeRobot.com o BetterUptime.com
# - Configura monitors después de hacer deploy
```

**Lee:** `devops/README.md` para el roadmap DevOps (DO-01 a DO-06)

---

### 5️⃣ Completa las Tareas de tu Roadmap

Ahora que tienes todo funcionando, **trabaja en todas las tareas de tu rol según el README actualizado.**

**Workflow recomendado:**

1. **Crea una rama** para tu trabajo:
   ```bash
   git checkout -b tu-nombre-rol
   # Ejemplo: git checkout -b maria-frontend
   ```

2. **Lee cada tarea** en el README de tu área

3. **Implementa los cambios** siguiendo las instrucciones

4. **Prueba que funciona** antes de hacer commit

5. **Haz commits** de cada tarea:
   ```bash
   git add .
   git commit -m "feat: implementa FE-01 dark mode"
   ```

**NO hagas un solo commit gigante. Haz 1 commit por tarea al menos.**

**NO hagas un solo commit gigante. Haz 1 commit por tarea al menos.**

---

### 6️⃣ Sube tu Código y Abre Pull Request

Cuando hayas completado las tareas definidas para tu rol:

```bash
# 1. Verifica tus cambios
git status

# 2. Asegúrate de tener todo commiteado
git add .
git commit -m "feat: completa roadmap de [tu-rol]"

# 3. Sube tu rama a GitHub
git push origin tu-nombre-rol
```

**Abre tu Pull Request:**

1. Ve a tu fork en GitHub: `github.com/TU-USUARIO/cowork-social`
2. Verás un banner amarillo: **"Compare & pull request"** → Click
3. **Título del PR:** `[ROL] Completo roadmap - Tu Nombre`  
   Ejemplo: `[Frontend] Completo roadmap FE-01 a FE-09 - María González`

4. **Descripción:** Incluye:
   - ✅ Lista de tareas del roadmap completadas
   - 📸 Screenshots o GIFs de tu trabajo
   - 🔗 Link a tu deploy
   - 🔗 Link a tu post de LinkedIn
   - 📝 Breve explicación de lo que aprendiste

**Ejemplo de descripción:**

```markdown
## Tareas Completadas

✅ FE-01: Tema Oscuro/Claro
✅ FE-02: Modal de Crear Post
✅ FE-03: Buscador de Usuarios
✅ ... (incluye todas las tareas de tu roadmap)

## Deploy

🔗 https://mi-cowork-social.vercel.app

## Screenshots

![Dark Mode](https://...)
![Create Post](https://...)
![Search](https://...)

## LinkedIn Post

🔗 https://linkedin.com/posts/...

## Aprendí

- Manejo de themes con CSS variables
- Estado global con localStorage
- Filtrado de arrays en React
```

---

### 7️⃣ Deploy y Publica en LinkedIn

1. **GitHub**: Abre PR con screenshots y link a deploy
2. **Deploy** tu trabajo:
   - Frontend: [Vercel](https://vercel.com) / [Netlify](https://netlify.com)
   - Backend: [Render](https://render.com) / [Railway](https://railway.app)
   - Data: [Streamlit Cloud](https://streamlit.io/cloud)
   - Design: Link público de Figma
   - Docs: Miro/Notion público

3. **LinkedIn**: Publica tu logro tagueando **ID For IDeas**

```
🚀 ¡Completé mi contribución a CoWork Social!

Terminé las tareas del roadmap de [Tu Rol]:
✅ [TAREA-01]: [Breve descripción]
✅ [TAREA-02]: [Breve descripción]
✅ [TAREA-03]: [Breve descripción]
✅ ...

🔧 Stack: [Tecnologías usadas]
🔗 Ver: [LINK]

Gracias @ID For IDeas 🙌
#IDForIDeas #CoWorkSocial #OpenSource
```

---

## ✅ Checklist Final

Antes de enviar:

- [ ] Tareas del roadmap completadas
- [ ] Código funciona sin errores
- [ ] Deploy funcionando
- [ ] Screenshots en el PR
- [ ] Post en LinkedIn publicado

---

## 📐 Estándares de Código

**Frontend:** Componentes funcionales con hooks  
**Backend:** async/await, no callbacks  
**Python:** Type hints, docstrings  
**Naming:** camelCase (JS), snake_case (Python)

---

## ❓ Preguntas Frecuentes

**¿Es mi primera vez contribuyendo a open source, por dónde empiezo?**  
💡 Sigue los pasos en orden: Fork → Clone → Lee el README de tu área → Ejecuta el código → Completa el roadmap de tu rol.

**¿Debo hacer fork del repo original o de otro fork?**  
✅ Siempre haz fork del repositorio ORIGINAL: `ID-For-Ideas-Cowork/cowork-social`

**¿Solo 1 tarea está bien?**  
❌ No, necesitas completar las tareas del roadmap de tu rol.

**¿Puedo trabajar varias tareas a la vez?**  
✅ Sí, pero es mejor avanzar por bloques y cerrar entregables completos.

**¿Qué si mi PR es rechazado?**  
💡 Lee el feedback, ajusta y vuelve a enviar.

**¿Puedo usar librerías externas?**  
✅ Sí, agrégalas a package.json/requirements.txt.

**¿Qué hago si `npm install` da error?**  
💡 Verifica que tienes Node.js v18+ instalado: `node -v`

**¿Y si `pip install` falla?**  
💡 Usa un entorno virtual: `python -m venv venv` y actívalo antes de instalar.

---

## 🔍 Proceso de Review

1. Publicas en LinkedIn tagueando **ID For IDeas**
2. Abres un PR en Github con el link de tu solucion y el post de Linkedin.
3. Participas en una revision grupal. 
4. Recibes feedback constructivo
5. Obtienes certificado de trabajo en equipo

---

## 💬 ¿Necesitas Ayuda?

1. Lee el README de tu área
2. Revisa [ejemplos](./data/EXAMPLE_DASHBOARD.md) en el repo
3. Consulta en el canal de Cowork en [Discord](https://discord.gg/Vg5uACSs)

---

**¡Gracias por contribuir!** 🎉

Hecho con ❤️ por [ID For IDeas](https://idforideas.com/)
