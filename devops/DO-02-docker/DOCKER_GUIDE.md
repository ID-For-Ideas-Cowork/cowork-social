# DO-02: Docker Guide

## Descripción

Este documento explica la configuración de Docker para el proyecto open source CoWork Social.

## 1. Docker Compose

El archivo `docker-compose.yml` define los siguientes servicios:

- **frontend**: Aplica build al directorio `frontend/` y expone el puerto 3000.
- **backend-nodejs**: Aplica build al directorio `backend/nodejs/` y expone el puerto 5000.
- **backend-python**: Aplica build al directorio `backend/python/` y expone el puerto 8000.

### Comandos:

- `docker-compose up --build`: Construye y levanta los servicios.
- `docker-compose down`: Detiene y remueve los servicios.

## 2. Dockerfiles

### Frontend

- Usa imagen `node:18-alpine`.
- Copia el package.json y package-lock.json al directorio de trabajo `/app`.
- Instala dependencias con `npm ci`.
- Copia el resto del código fuente al directorio de trabajo `/app` aprovechando el cache.
- Expone puerto 3000.
- Comando por defecto: `npm start`.

### Backend Node.js

- Usa imagen `node:18-alpine`.
- Copia el package.json y package-lock.json al directorio de trabajo `/app`.
- Instala dependencias con `npm ci`.
- Copia el resto del código fuente al directorio de trabajo `/app` aprovechando el cache.
- Expone puerto 5000.
- Comando por defecto: `npm run dev`.

### Backend Python

- Usa imagen `python:3.10-slim`.
- Copia el requirements.txt al directorio de trabajo `/app`.
- Instala dependencias con `pip install -r requirements.txt`.
- Copia el resto del código fuente al directorio de trabajo `/app` aprovechando el cache.
- Expone puerto 8000.
- Comando por defecto: `uvicorn main:app --host [IP_ADDRESS] --port 8000`.

## 3. .dockerignore

El archivo `.dockerignore` excluye los siguientes archivos y directorios del contexto de build:

- `node_modules`
- `.git`
- `.gitignore`
- `.env`
- `.env.local`
- `.env.development.local`
- `.env.test.local`
- `.env.production.local`
- `.DS_Store`
- `*.log`
