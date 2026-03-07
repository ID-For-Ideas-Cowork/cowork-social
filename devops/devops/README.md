# DevOps - CoWork Social

**Proyecto by [ID For IDeas](https://idforideas.com/)**

Automatización, despliegue y monitoreo del proyecto.

## 🎯 3 Tareas a Completar (DO-01, DO-02, DO-03)

🔥 **IMPORTANTE**: Debes completar las **3 tareas**, no solo 1.

### DO-01: CI/CD Pipeline con GitHub Actions 🚀

**Qué hacer:**
1. Crea GitHub Actions workflow para testing y deploy automático
2. Configura pipelines para Frontend y Backend
3. Tests automáticos en cada PR
4. Deploy automático a producción en merge a main

**Workflows a crear:**

**1. Frontend CI/CD** (`.github/workflows/frontend-ci.yml`)
```yaml
name: Frontend CI/CD

on:
  pull_request:
    paths:
      - 'frontend/**'
  push:
    branches:
      - main
    paths:
      - 'frontend/**'

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: cd frontend && npm install
      - name: Run tests
        run: cd frontend && npm test
      - name: Build
        run: cd frontend && npm run build

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        # Agrega tu deploy step
        run: echo "Deploy to Vercel"
```

**2. Backend CI/CD** (`.github/workflows/backend-ci.yml`)
- Similar estructura para Node.js y Python
- Tests unitarios
- Deploy a Render/Railway

**3. Linter Check** (`.github/workflows/lint.yml`)
- ESLint para JS
- Black/Flake8 para Python
- Falla el PR si hay errores de formato

**Deliverables:**
- Archivos `.github/workflows/*.yml` en el repo
- Al menos 3 workflows funcionando
- Badge de GitHub Actions en README
- Screenshots de runs exitosos
- `devops/DO-01-ci-cd/SETUP.md` explicando configuración

---

### DO-02: Docker + Docker Compose 🐳

**Qué hacer:**
1. Dockeriza Frontend, Backend Node.js y Backend Python
2. Crea `docker-compose.yml` para levantar todo el stack
3. Documenta cómo correr el proyecto completo con Docker
4. Publica imágenes en Docker Hub (opcional)

**Archivos a crear:**

**1. `frontend/Dockerfile`**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

**2. `backend/nodejs/Dockerfile`**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
```

**3. `backend/python/Dockerfile`**
```dockerfile
FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

**4. `docker-compose.yml` (root)**
```yaml
version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://localhost:5000

  backend-nodejs:
    build: ./backend/nodejs
    ports:
      - "5000:5000"
    environment:
      - PORT=5000

  backend-python:
    build: ./backend/python
    ports:
      - "8000:8000"
```

**Comandos a documentar:**
```bash
# Levantar todo el stack
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

**Deliverables:**
- `Dockerfile` en cada carpeta (frontend, backend/nodejs, backend/python)
- `docker-compose.yml` en root
- `.dockerignore` files
- `devops/DO-02-docker/DOCKER_GUIDE.md` con instrucciones completas
- Screenshots de `docker ps` y aplicación corriendo
- (Opcional) Links a Docker Hub con imágenes públicas

---

### DO-03: Monitoring y Health Checks 📊

**Qué hacer:**
1. Implementa health check endpoints en las APIs
2. Configura monitoreo con herramienta gratuita (UptimeRobot, Datadog free tier, o similar)
3. Dashboard de status público
4. Alertas básicas (email/Slack cuando servicio cae)

**1. Health Check Endpoints**

**Backend Node.js** (`routes/health.js`):
```javascript
const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: 'backend-nodejs'
  });
});

router.get('/health/detailed', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    service: 'backend-nodejs',
    version: '1.0.0'
  });
});

module.exports = router;
```

**Backend Python** (`main.py`):
```python
from fastapi import FastAPI
import time

start_time = time.time()

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "timestamp": time.time(),
        "uptime": time.time() - start_time,
        "service": "backend-python"
    }

@app.get("/health/detailed")
def detailed_health():
    import psutil
    return {
        "status": "healthy",
        "uptime": time.time() - start_time,
        "cpu_percent": psutil.cpu_percent(),
        "memory_percent": psutil.virtual_memory().percent,
        "service": "backend-python"
    }
```

**2. Monitoreo Options (elige 1)**

**Opción A: UptimeRobot (Gratis)**
- Crea cuenta en [uptimerobot.com](https://uptimerobot.com)
- Agrega monitors para:
  - Frontend: `https://tu-app.vercel.app`
  - Backend Node: `https://tu-api.onrender.com/health`
  - Backend Python: `https://tu-api-py.onrender.com/health`
- Configura notificaciones por email
- Crea status page público

**Opción B: Better Uptime (Gratis)**
- [betteruptime.com](https://betteruptime.com)
- Status page más bonito
- Alertas a Slack/Discord
- Checks cada 30 segundos

**Opción C: Datadog Free Tier**
- Logs y métricas básicas
- Dashboards personalizados
- Solo si quieres algo más avanzado

**3. Logging Setup**

Agrega logs estructurados con Winston (Node) o logging (Python):

```javascript
// Node.js - logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

module.exports = logger;
```

**Deliverables:**
- Health check endpoints implementados y funcionando
- Cuenta en servicio de monitoring (UptimeRobot/Better Uptime)
- Status page público (link compartible)
- Screenshots de dashboard mostrando uptime
- `devops/DO-03-monitoring/MONITORING_GUIDE.md` con:
  - Links a status page
  - Cómo configurar alertas
  - Ejemplos de logs
  - Métricas que se monitorean

---

## 📦 Estructura de Archivos

```
devops/
├── DO-01-ci-cd/
│   ├── SETUP.md                 # Guía de CI/CD
│   └── screenshots/             # Evidencias de workflows
│
├── DO-02-docker/
│   ├── DOCKER_GUIDE.md          # Guía completa de Docker
│   └── docker-compose.prod.yml  # Versión para producción
│
└── DO-03-monitoring/
    ├── MONITORING_GUIDE.md      # Guía de monitoreo
    ├── health-check-examples/   # Código de ejemplo
    └── screenshots/             # Dashboard screenshots
```

---

## 🚀 Cómo Ejecutar tu Trabajo

### Para DO-01 (CI/CD):
1. Crea tu fork y agrega workflows en `.github/workflows/`
2. Haz un PR para activar los workflows
3. Verifica que pasen los checks
4. Merge a main para ver deploy automático

### Para DO-02 (Docker):
```bash
# Construir imágenes
docker-compose build

# Levantar servicios
docker-compose up -d

# Verificar
docker ps
curl http://localhost:3000
curl http://localhost:5000/health
curl http://localhost:8000/health
```

### Para DO-03 (Monitoring):
1. Deploy tu aplicación (Vercel, Render, etc.)
2. Configura monitors en UptimeRobot/Better Uptime
3. Espera 24-48 horas para datos de uptime
4. Comparte link público del status page

---

## 📝 Cómo hacer tu PR

1. Fork del repo
2. Trabaja en rama: `git checkout -b tu-nombre-devops`
3. Completa las 3 tareas
4. Commitea con mensajes claros:
   ```bash
   git commit -m "feat(devops): agrega CI/CD workflows"
   git commit -m "feat(devops): dockeriza todos los servicios"
   git commit -m "feat(devops): configura monitoring con UptimeRobot"
   ```
5. Push y abre PR
6. En el PR incluye:
   - ✅ Links a GitHub Actions runs
   - ✅ Screenshots de Docker funcionando
   - ✅ Link a status page público
   - ✅ Evidencias de todo funcionando

**Ejemplo de descripción de PR:**

```markdown
## DevOps - Completé las 3 tareas

### DO-01: CI/CD Pipeline ✅
- Workflows: frontend-ci.yml, backend-ci.yml, lint.yml
- Link a Actions: https://github.com/TU-USUARIO/cowork-social/actions
- [Screenshot de run exitoso]

### DO-02: Docker + Compose ✅
- Dockerfiles creados para Frontend, Backend Node, Backend Python
- docker-compose.yml funcional
- Imágenes: [links a Docker Hub si aplica]
- [Screenshot de docker ps]

### DO-03: Monitoring ✅
- Health checks implementados
- Service: UptimeRobot
- Status Page: https://stats.uptimerobot.com/tu-page
- Uptime: 99.9% (últimas 24h)
- [Screenshot del dashboard]
```

---

## 🎓 Recursos

### Docker:
- [Docs oficiales](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Best practices](https://docs.docker.com/develop/dev-best-practices/)

### CI/CD:
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Ejemplos de workflows](https://github.com/actions/starter-workflows)
- [Vercel Deploy Action](https://github.com/marketplace/actions/vercel-action)

### Monitoring:
- [UptimeRobot](https://uptimerobot.com/)
- [Better Uptime](https://betteruptime.com/)
- [Health Check Best Practices](https://microservices.io/patterns/observability/health-check-api.html)

### Logging:
- [Winston (Node.js)](https://github.com/winstonjs/winston)
- [Python Logging](https://docs.python.org/3/library/logging.html)

---

## 📐 Estándares de Calidad

**Workflows (CI/CD):**
- ✅ Todos los jobs deben pasar
- ✅ Tests automáticos incluidos
- ✅ Build exitoso antes de deploy
- ✅ Solo deploy desde rama main

**Docker:**
- ✅ Imágenes optimizadas (usa alpine cuando sea posible)
- ✅ `.dockerignore` para excluir node_modules, .git, etc.
- ✅ Multi-stage builds si es necesario
- ✅ Variables de entorno documentadas

**Monitoring:**
- ✅ Health checks responden en < 200ms
- ✅ Monitoring activo 24/7
- ✅ Status page público accesible
- ✅ Al menos 1 alerting channel configurado

---

## 💬 ¿Necesitas Ayuda?

Únete al canal **#cowork** en Discord: [https://discord.gg/Vg5uACSs](https://discord.gg/Vg5uACSs)

¡La comunidad de ID For IDeas está lista para ayudarte! 🚀

---

## ✅ Checklist Final

Antes de hacer tu PR:

- [ ] **DO-01**: 3+ workflows de GitHub Actions funcionando
- [ ] **DO-02**: `docker-compose up` levanta todo el stack correctamente
- [ ] **DO-03**: Status page público con uptime visible
- [ ] Documentación completa en cada carpeta
- [ ] Screenshots de todo funcionando
- [ ] Links públicos compartibles
- [ ] Post en LinkedIn tagueando **ID For IDeas**

---

**¡Éxito con tu contribución DevOps!** 🎉

Este rol es clave para que todo el equipo pueda desplegar y monitorear el proyecto fácilmente.
