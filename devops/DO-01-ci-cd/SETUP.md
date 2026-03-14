# DO-01: CI/CD Pipeline Setup

## Descripción

Este documento explica la configuración de los 3 workflows de GitHub Actions implementados para el proyecto open source CoWork Social.

## 1. Frontend CI/CD

- Solo se dispara si se hace push o pull request a `main`.
- Si hay cambios en el directorio `frontend/` se ejecuta el job `test`.
- Si hay cambios en el directorio `frontend/` y es un push a `main` se ejecuta el job `deploy`.

### Jobs:

**test**

- Instala Node.js 18
- Instala dependencias con `npm ci`
- Corre tests con `npm test -- --watchAll=false`
- Hace build de producción con `npm run build`

**deploy**

- Despliega a Vercel usando `npx vercel --prod`
- Requiere los secrets:
  - **VERCEL_TOKEN**
  - **VERCEL_ORG_ID**
  - **VERCEL_PROJECT_ID**

## 2. Backend CI/CD

- Solo se dispara si se hace push o pull request a `main`.
- Si hay cambios en el directorio `backend/nodejs/` se ejecuta el job `node-ci`.
- Si hay cambios en el directorio `backend/nodejs/` y es un push a `main` se ejecuta el job `node-deploy`.
- Si hay cambios en el directorio `backend/python/` se ejecuta el job `python-ci`.
- Si hay cambios en el directorio `backend/python/` y es un push a `main` se ejecuta el job `python-deploy`.

### Jobs:

**detect**

- Detecta si el backend es Node.js o Python

**node-ci**

- Instala Node.js 18
- Instala dependencias con `npm ci`

**node-deploy**

- Despliega a Render usando `curl -X POST ${{ secrets.RENDER_NODE_DEPLOY_HOOK }}`
- Requiere el secret:
  - `RENDER_NODE_DEPLOY_HOOK`

**python-ci**

- Instala Python 3.10
- Instala dependencias con `pip install -r requirements.txt`

**python-deploy**

- Despliega a Render usando `curl -X POST ${{ secrets.RENDER_PYTHON_DEPLOY_HOOK }}`
- Requiere el secret:
  - `RENDER_PYTHON_DEPLOY_HOOK`

## 3. Lint Check Quality

- Solo en Pull Requests con cambios en `frontend/**`, `backend/nodejs/**` o `backend/python/**`

### Jobs:

**lint-frontend**

- Instala Node.js 18
- Instala dependencias con `npm ci`
- Corre ESLint con `npx eslint src/`

**lint-node-backend**

- Instala Node.js 18
- Instala dependencias con `npm ci`
- Instala ESLint con `npm install eslint --save-dev`
- Corre ESLint con `npx eslint src/`

**lint-python-backend**

- Instala Python 3.10
- Instala Flake8 con `pip install flake8`
- Corre Flake8 con `flake8 .`

## Secrets requeridos

Agregar en GitHub → Settings → Secrets and variables → Actions:

| Secret                      | Descripción                                      | Dónde obtenerlo                                        |
| --------------------------- | ------------------------------------------------ | ------------------------------------------------------ |
| `VERCEL_TOKEN`              | Token de autenticación de Vercel                 | Vercel → Find "Tokens" -> Crea un Token "VERCEL_TOKEN" |
| `VERCEL_ORG_ID`             | ID de tu cuenta/organización en Vercel           | Vercel → Settings → Team ID                            |
| `VERCEL_PROJECT_ID`         | ID del proyecto en Vercel                        | Vercel → proyecto → Settings → General                 |
| `RENDER_NODE_DEPLOY_HOOK`   | URL de deploy hook del servicio Node en Render   | Render → servicio Node → Settings → Deploy Hook        |
| `RENDER_PYTHON_DEPLOY_HOOK` | URL de deploy hook del servicio Python en Render | Render → servicio Python → Settings → Deploy Hook      |
