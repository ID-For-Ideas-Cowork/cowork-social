# 🚀 CoWork Social

<div align="center">

**Proyecto de Aprendizaje por [ID For IDeas](https://idforideas.com/)**

![CoWork Social](https://img.shields.io/badge/CoWork-Social-blue?style=for-the-badge)
![ID For IDeas](https://img.shields.io/badge/ID%20For-IDeas-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Base%20Template-green?style=for-the-badge)

**Red social para profesionales - Proyecto base para contribuir y aprender**

> 📚 **Este es un repositorio base de referencia**  
> Para participar activamente en el CoWork: [idforideas.com/cowork](https://idforideas.com/cowork)

</div>

---

## 🎯 ¿Qué es esto?

**CoWork Social** es un **repositorio base de ID For IDeas** que sirve como guía y plantilla para colaborar en el [CoWork de ID For IDeas](https://idforideas.com/cowork).

**Tu misión**: Usar este repo como referencia, completar las tareas de tu rol en tu propio repositorio y compartir tu trabajo en LinkedIn.

✅ Código base como guía para tu proyecto  
✅ Roadmap extendido: la mayoría de roles ahora tiene 6 tareas, Frontend tiene 9  
✅ No necesitas esperar a otros  
✅ Agrega el proyecto a tu portfolio  
✅ Aprende Git, GitHub y trabajo real

> 📌 **Nota importante**: Este es un repo de referencia. Para participar en el CoWork, visita [idforideas.com/cowork](https://idforideas.com/cowork)

---

## ⚡ Inicio Rápido

### 1. Descarga o clona este repo como referencia

```bash
git clone https://github.com/ID-For-Ideas-Cowork/cowork-social.git
cd cowork-social
```

### 2. Crea tu propio repositorio

Usa este proyecto como base para crear tu propio repositorio y comienza a trabajar en tu proyecto.

### 3. Elige tu rol y completa el roadmap de tu rol

Ve a la sección [Roles y Tareas](#-roles-y-tareas) 👇

Cada rol tiene sus propias instrucciones de instalación y ejecución.

> Actualización: el detalle vigente de tareas extendidas (continuidad) está en los README de cada carpeta de rol y en project-meta.json.

### 4. Participa en el CoWork

Regístrate y participa en [idforideas.com/cowork](https://idforideas.com/cowork) para recibir soporte y retroalimentación de la comunidad.

### Resumen rápido por rol

| Rol | Rango de tareas | README |
|---|---|---|
| Frontend | FE-01 a FE-09 | [frontend/README.md](frontend/README.md) |
| Backend Node.js | BE-01, BE-02, BE-04, BE-05 | [backend/nodejs/README.md](backend/nodejs/README.md) |
| Backend Python | BE-03, BE-06 | [backend/python/README.md](backend/python/README.md) |
| Data Analyst | DA-01 a DA-06 | [data/README.md](data/README.md) |
| Designer | DS-01 a DS-06 | [design/README.md](design/README.md) |
| Project Manager | PM-01 a PM-06 | [docs/README.md](docs/README.md) |
| QA Tester | QA-01 a QA-06 | [qa/README.md](qa/README.md) |
| DevOps Engineer | DO-01 a DO-06 | [devops/README.md](devops/README.md) |

---

## 📁 Estructura del Proyecto

```
cowork-social/
├── frontend/                 # Aplicación React
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── pages/           # Páginas de la aplicación
│   │   ├── services/        # Llamadas a API
│   │   ├── hooks/           # Custom hooks
│   │   ├── styles/          # Estilos globales
│   │   └── utils/           # Utilidades
│   └── public/              # Assets estáticos
│
├── backend/
│   ├── nodejs/              # API REST con Express
│   │   ├── routes/          # Endpoints
│   │   ├── controllers/     # Lógica de negocio
│   │   ├── models/          # Modelos de datos
│   │   ├── middleware/      # Middleware personalizado
│   │   └── tests/           # Tests unitarios
│   │
│   └── python/              # Microservicio de Analytics
│       ├── api/             # FastAPI endpoints
│       ├── analytics/       # Procesamiento de datos
│       ├── models/          # Modelos ML
│       └── tests/           # Tests
│
├── data/                    # Análisis y visualizaciones
│   ├── notebooks/           # Jupyter notebooks
│   ├── scripts/             # Scripts de ETL
│   ├── dashboards/          # Configuración de dashboards
│   └── datasets/            # Datos de prueba
│
├── design/                  # Assets y documentación de diseño
│   ├── figma/               # Links y exports de Figma
│   ├── assets/              # Iconos, logos, imágenes
│   ├── styleguide/          # Guía de estilos
│   └── prototypes/          # Prototipos y mockups
│
├── docs/                    # Documentación del proyecto
│   ├── project-management/  # Planes, roadmaps, sprints
│   ├── api/                 # Documentación de API
│   ├── architecture/        # Diagramas y decisiones
│   └── user-guides/         # Guías de usuario
│
├── qa/                      # Testing y QA
│   ├── test-plans/          # Planes de prueba
│   ├── test-cases/          # Casos de prueba
│   ├── bug-reports/         # Reportes de bugs
│   └── automated-tests/     # Tests E2E
│
├── devops/                  # DevOps y automatización
│   ├── DO-01-ci-cd/         # CI/CD workflows
│   ├── DO-02-docker/        # Docker setup
│   └── DO-03-monitoring/    # Monitoring y logs
│
└── .github/
    ├── PULL_REQUEST_TEMPLATE/  # Templates de PR por rol
    └── workflows/              # CI/CD pipelines
```

---

## 🛠 Requisitos Previos por Rol

Solo necesitas instalar lo que tu rol requiere:

### Frontend Developer
- **Node.js** v18+ - [Descargar](https://nodejs.org/)
- npm (incluido con Node.js)
- Editor de código (VS Code recomendado)

### Backend Developer
- **Node.js** v18+ (para BE-01, BE-02)
- **Python** v3.10+ (para BE-03)
- npm y pip
- Editor de código

### Data Analyst
- **Python** v3.10+ - [Descargar](https://www.python.org/)
- pip
- Editor de código o Jupyter

### Project Manager
- Navegador web
- Cuenta en Miro/Notion (gratis)
- Editor de Markdown

### Designer
- Navegador web
- Cuenta en Figma (gratis) - [figma.com](https://figma.com)

### QA Tester
- **Node.js** v18+ (para tests automatizados)
- Navegador web
- Editor de código

### DevOps Engineer
- **Docker** - [Descargar](https://www.docker.com/get-started)
- **Git** (requerido)
- Cuenta en GitHub (para Actions)
- Cuenta en Docker Hub (opcional)
- Cuenta en UptimeRobot o similar (gratis)
- Editor de código

**Git** es requerido para todos los roles - [Descargar](https://git-scm.com/)

---

## 👥 Roles y Tareas

**🔥 IMPORTANTE**: Debes completar todas las tareas de tu rol según el roadmap actualizado.

Cada área es **100% independiente**. No esperes a que otros terminen.

---

### 1️⃣ Frontend Developer

**Stack**: React + localStorage (sin backend)

#### ✅ Completa estas tareas del roadmap:

1. **FE-01: Tema Oscuro/Claro** - Toggle entre modos, guarda preferencia en localStorage
2. **FE-02: Modal de Crear Post** - Modal funcional, guarda posts en localStorage  
3. **FE-03: Buscador de Usuarios** - Búsqueda con filtros, datos mock

**Cómo ejecutar:**
```bash
cd frontend
npm install
npm start
# Abre http://localhost:3000
```

**Entrega:**
- Deploy en Vercel/Netlify
- Repositorio con código documentado
- Post en LinkedIn tagueando **ID For IDeas**
- Registro en [idforideas.com/cowork](https://idforideas.com/cowork) con screenshots y link

📖 **Instrucciones completas**: [`frontend/README.md`](./frontend/README.md)

---

### 2️⃣ Backend Developer

**Stack**: Node.js + Python/FastAPI (datos mock, sin DB)

#### ✅ Completa estas tareas del roadmap:

1. **BE-01: API de Usuarios** (Node.js) - CRUD completo, datos en memoria, Swagger docs
2. **BE-02: API de Posts** (Node.js) - CRUD completo, datos en memoria, Swagger docs
3. **BE-03: API de Analytics** (Python) - Métricas fake, FastAPI docs

**Cómo ejecutar:**
```bash
# Node.js (BE-01, BE-02)
cd backend/nodejs
npm install && npm run dev
# API: http://localhost:5000

# Python (BE-03)
cd backend/python
pip install -r requirements.txt
uvicorn main:app --reload
# API: http://localhost:8000
```

**Entrega:**
- Deploy en Render/Railway
- Repositorio con código documentado
- Post en LinkedIn tagueando **ID For IDeas**
- Registro en [idforideas.com/cowork](https://idforideas.com/cowork) con Swagger/Postman collection

📖 **Instrucciones completas**: [`backend/nodejs/README.md`](./backend/nodejs/README.md) y [`backend/python/README.md`](./backend/python/README.md)

---

### 3️⃣ Data Analyst

**Stack**: Python + Pandas + Jupyter + Streamlit

#### ✅ Completa estas tareas del roadmap:

1. **DA-01: Dashboard de Engagement** - Métricas de actividad, Streamlit Cloud
2. **DA-02: Análisis de Contenido** - Qué posts funcionan mejor, notebook + gráficos
3. **DA-03: Reporte de Crecimiento** - Visualización de crecimiento, dashboard interactivo

**Cómo ejecutar:**
```bash
cd data
pip install -r requirements.txt
jupyter notebook
# O para dashboard: streamlit run tu_dashboard.py
```

**Entrega:**
- Notebooks Jupyter con análisis
- Deploy dashboard en Streamlit Cloud
- Repositorio con código documentado
- Post en LinkedIn tagueando **ID For IDeas**
- Registro en [idforideas.com/cowork](https://idforideas.com/cowork) con notebooks y link

📖 **Instrucciones completas**: [`data/README.md`](./data/README.md)

---

### 4️⃣ Project Manager

**Stack**: Markdown + Miro/Notion

#### ✅ Completa estas tareas del roadmap:

1. **PM-01: Roadmap** - Timeline visual, milestones, prioridades (Miro/Notion)
2. **PM-02: User Stories** - 10-15 historias completas con criterios de aceptación
3. **PM-03: Onboarding Guide** - Guía para nuevos contributors

**Entrega:**
- Docs en Markdown en tu repositorio
- Board público (Miro/Notion/Trello)
- Post en LinkedIn tagueando **ID For IDeas**
- Registro en [idforideas.com/cowork](https://idforideas.com/cowork) con archivos + link

📖 **Instrucciones completas**: [`docs/README.md`](./docs/README.md)

---

### 5️⃣ Designer

**Stack**: Figma

#### ✅ Completa estas tareas del roadmap:

1. **DS-01: Design System** - Colores, tipografía, componentes (botones, inputs, cards)
2. **DS-02: Mockups** - 3-5 pantallas principales (Login, Feed, Perfil)
3. **DS-03: Logo & Branding** - Logo de CoWork Social + guía de marca

**Entrega:**
- Diseños en Figma (link público)
- Exporta assets y sube a tu repositorio
- Post en LinkedIn tagueando **ID For IDeas**
- Registro en [idforideas.com/cowork](https://idforideas.com/cowork) con assets + README

📖 **Instrucciones completas**: [`design/README.md`](./design/README.md)

---

### 6️⃣ QA Tester

**Stack**: Cypress/Playwright + Test Documentation

#### ✅ Completa estas tareas del roadmap:

1. **QA-01: Test Plan** - Estrategia, test cases, matriz de compatibilidad
2. **QA-02: Tests E2E** - 5-10 tests automatizados (Cypress/Playwright)
3. **QA-03: Bug Report** - Testing exploratorio, documenta 5-10 bugs

**Entrega:**
- Test plans en tu repositorio
- Tests con instrucciones de ejecución
- Post en LinkedIn tagueando **ID For IDeas**
- Registro en [idforideas.com/cowork](https://idforideas.com/cowork) con documentación

📖 **Instrucciones completas**: [`qa/README.md`](./qa/README.md)

---

### 7️⃣ DevOps Engineer

**Stack**: Docker + GitHub Actions + Monitoring Tools

#### ✅ Completa estas tareas del roadmap:

1. **DO-01: CI/CD Pipeline** - GitHub Actions para testing y deploy automático
2. **DO-02: Docker + Compose** - Dockeriza frontend y backend, docker-compose.yml funcional
3. **DO-03: Monitoring** - Health checks, monitoreo 24/7, status page público

**Cómo ejecutar:**
```bash
# Para Docker:
docker-compose up -d
docker ps

# Para CI/CD:
# Push a tu fork activa los workflows automáticamente

# Para Monitoring:
# Configura UptimeRobot o Better Uptime
```

**Entrega:**
- GitHub Actions workflows funcionando en tu repositorio
- Docker Compose levanta todo el stack
- Status page público con uptime
- Post en LinkedIn tagueando **ID For IDeas**
- Registro en [idforideas.com/cowork](https://idforideas.com/cowork) con documentación y links

📖 **Instrucciones completas**: [`devops/README.md`](./devops/README.md)

---

## 🚀 Cómo Usar Este Repo

### Proceso de Trabajo

1. **Clona o descarga** este repositorio como referencia
2. **Crea tu propio repositorio** para tu proyecto (puede ser privado o público)
3. **Usa la estructura** de este repo como guía
4. **Crea rama**: `git checkout -b tu-nombre-FE-todas` (o BE/DA/PM/DS/QA)
5. **Completa las tareas de tu rol** en tu propio repositorio
6. **Commit**: `git commit -m "Completo tareas FE-01, FE-02, FE-03"`
7. **Publica en LinkedIn** tagueando **ID For IDeas**
8. **Regístrate en el CoWork**: [idforideas.com/cowork](https://idforideas.com/cowork)

> 📌 **Importante**: Este repo es una guía de referencia. Tu trabajo se realiza en tu propio repositorio, y el seguimiento y certificación se hace a través de la plataforma del CoWork.

### 📝 Formato de Documentación

Cuando documentes tu trabajo, usa este formato:

```markdown
## Rol: [Frontend/Backend/Data/PM/Design/QA]

### Tareas Completadas:
- [x] [CÓDIGO-01]: Descripción breve
- [x] [CÓDIGO-02]: Descripción breve
- [x] [CÓDIGO-03]: Descripción breve

### Links:
- Deploy/Demo: [URL]
- Post LinkedIn: [URL]

### Screenshots:
[Agrega imágenes]
```

### 📱 Post en LinkedIn

**Importante**: Debes publicar en LinkedIn y taguear **ID For IDeas**

Puedes usar el siguiente template y pedirle al Coach ID que ayude a elaborar el post [en la plataforma](https://idforideas.com/coach-id).

**Template:**
```
🚀 Completé mi contribución a CoWork Social

Acabo de terminar las tareas del roadmap de [Tu Rol]:
✅ [TAREA-01]: [Descripción]
✅ [TAREA-02]: [Descripción]
✅ [TAREA-03]: [Descripción]

🔧 Stack: [Tus tecnologías]
🎯 Aprendí: [2-3 cosas clave]

🔗 Ver mi trabajo: [LINK]

Gracias @ID For IDeas por crear este proyecto 🙌

#IDForIDeas #CoWorkSocial #OpenSource #Portfolio
```

---

## 🎯 Proceso de Evaluación

### Workshop de Review de la Comunidad

1. **📱 Publicas en LinkedIn** - Etiqueta a **ID For IDeas** con tu entregable (link a tu repo/deploy/Figma/dashboard)

2. **📝 Registras tu proyecto** - En la plataforma del CoWork ([idforideas.com/cowork](https://idforideas.com/cowork)) compartes el link a tu repositorio y deployment

3. **👥 Revisión Grupal** - Participas en workshop de la comunidad (sesión online programada)

4. **🎤 Presentas tu Trabajo** - 5-10 minutos mostrando lo que construiste y lo que aprendiste mientras revisamos tu proyecto en vivo

5. **💬 Recibes Feedback** - Retroalimentación constructiva del equipo y la comunidad

### Qué se evalúa:

- ✅ Tareas del roadmap completadas
- ✅ Funcionalidad correcta
- ✅ Código bien estructurado
- ✅ Deploy funcionando (si aplica)
- ✅ Capacidad de explicar tu trabajo
- ✅ Documentación en tu repositorio

---

## � Recursos y Ejemplos

### Ejemplos Completos por Área:

- 📊 **Data**: [`EXAMPLE_DASHBOARD.md`](./data/EXAMPLE_DASHBOARD.md) - Dashboard Streamlit completo
- 🎨 **Design**: [`EXAMPLE_DESIGN_SYSTEM.md`](./design/EXAMPLE_DESIGN_SYSTEM.md) - Guía Figma paso a paso
- 🗺️ **PM**: [`EXAMPLE_ROADMAP.md`](./docs/EXAMPLE_ROADMAP.md) - Roadmap completo
- ✅ **QA**: [`EXAMPLE_E2E_TEST.js`](./qa/EXAMPLE_E2E_TEST.js) - Tests con Cypress

### Tutoriales:

- **React**: [react.dev](https://react.dev/)
- **FastAPI**: [fastapi.tiangolo.com](https://fastapi.tiangolo.com/)
- **Pandas**: [pandas.pydata.org](https://pandas.pydata.org/)
- **Figma**: [youtube.com/figma](https://www.youtube.com/c/Figma)
- **Cypress**: [docs.cypress.io](https://docs.cypress.io/)

### Deploy Gratuito:

- **Frontend**: [Vercel](https://vercel.com) / [Netlify](https://netlify.com)
- **Backend**: [Render](https://render.com) / [Railway](https://railway.app)
- **Data**: [Streamlit Cloud](https://streamlit.io/cloud)
- **Docs/PM**: [Miro](https://miro.com) / [Notion](https://notion.so)

---

<div align="center">

## 🎓 Proyecto by ID For IDeas

**CoWork Social** es un repositorio base de [**ID For IDeas**](https://idforideas.com/) para que desarrolles skills con proyectos reales.

> 🌐 **Participa en el CoWork**: [idforideas.com/cowork](https://idforideas.com/cowork)

👥 **Colaboradores**: Ver [CONTRIBUTORS.md](./CONTRIBUTORS.md)  
📜 **Licencia**: [MIT License](./LICENSE)

---

### 🚀 ¿Listo para empezar?

**1.** Descarga o clona este repo como guía  
**2.** Crea tu propio repositorio  
**3.** Completa las tareas de tu rol  
**4.** Regístrate en [idforideas.com/cowork](https://idforideas.com/cowork)  
**5.** Publica en LinkedIn tagueando **ID For IDeas**

Hecho con ❤️ por la comunidad **ID For IDeas**

[⬆ Volver arriba](#-cowork-social)

</div>
