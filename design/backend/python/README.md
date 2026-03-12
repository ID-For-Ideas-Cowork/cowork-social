# Backend Python - CoWork Social

**Proyecto by [ID For IDeas](https://idforideas.com/)**

API de Analytics con FastAPI usando datos sintéticos.

## 🚀 Inicio Rápido

```bash
# Crear entorno virtual
python -m venv venv

# Activar (Windows)
venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar
uvicorn main:app --reload
```

## 🎯 Tarea a Completar (BE-03)

🔥 **IMPORTANTE**: Completa esta tarea (BE-03: API de Analytics).

API disponible en: `http://localhost:8000`
Docs automáticas en: `http://localhost:8000/docs`

## 🎯 Tarea BE-03: Dashboard Analytics API

**Qué hacer:**
- API con FastAPI que retorna métricas fake
- Endpoints para diferentes estadísticas
- Datos generados con Faker o numpy/random
- Swagger docs automáticas (FastAPI las genera)

**Endpoints a crear:**

### 1. Métricas Generales
```
GET /api/analytics/overview
```
**Response:**
```json
{
  "total_users": 1250,
  "total_posts": 3420,
  "total_comments": 8945,
  "avg_engagement_rate": 4.2
}
```

### 2. Usuarios Activos
```
GET /api/analytics/active-users?days=7
```
**Response:**
```json
{
  "period": "last_7_days",
  "active_users": 450,
  "data": [
    {"date": "2026-02-21", "users": 120},
    {"date": "2026-02-22", "users": 135},
    ...
  ]
}
```

### 3. Engagement por Día
```
GET /api/analytics/engagement?period=month
```
**Response:**
```json
{
  "period": "month",
  "data": [
    {"date": "2026-02-01", "posts": 45, "likes": 320, "comments": 89},
    {"date": "2026-02-02", "posts": 52, "likes": 380, "comments": 103},
    ...
  ]
}
```

### 4. Top Posts
```
GET /api/analytics/top-posts?limit=10
```
**Response:**
```json
{
  "top_posts": [
    {
      "id": "1",
      "content": "Mi primer post sobre Python...",
      "author": "Ana García",
      "likes": 245,
      "comments": 34,
      "engagement_score": 8.5
    },
    ...
  ]
}
```

---

## 📦 Estructura del Proyecto

```
python/
├── main.py                    # FastAPI app
├── data/
│   └── generate_fake_data.py  # Genera datos sintéticos
├── models/
│   └── schemas.py             # Pydantic models
├── requirements.txt
└── README.md
```

## 🧪 Ejemplo de Código

```python
# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta
import random

app = FastAPI(
    title="CoWork Analytics API",
    description="API de analytics con datos mock",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

## 💬 ¿Necesitas Ayuda?

Únete al canal **#cowork** en Discord: [https://discord.gg/Vg5uACSs](https://discord.gg/Vg5uACSs)

¡La comunidad de ID For IDeas está lista para ayudarte! 🚀

@app.get("/")
def read_root():
    return {
        "message": "CoWork Analytics API",
        "docs": "/docs",
        "endpoints": "/api/analytics"
    }

@app.get("/api/analytics/overview")
def get_overview():
    return {
        "total_users": random.randint(1000, 2000),
        "total_posts": random.randint(3000, 5000),
        "total_comments": random.randint(8000, 12000),
        "avg_engagement_rate": round(random.uniform(3.0, 6.0), 2)
    }

@app.get("/api/analytics/active-users")
def get_active_users(days: int = 7):
    data = []
    for i in range(days):
        date = (datetime.now() - timedelta(days=days-i-1)).strftime("%Y-%m-%d")
        data.append({
            "date": date,
            "users": random.randint(100, 200)
        })
    
    return {
        "period": f"last_{days}_days",
        "active_users": sum(d["users"] for d in data),
        "data": data
    }
```

---

## 📦 Deploy en Render

1. Crea account en [render.com](https://render.com)
2. New → Web Service
3. Conecta tu repo
4. Configura:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Deploy!

Ejemplo URL: `https://cowork-analytics.onrender.com`

---

## 📝 Cómo hacer tu PR

1. Desarrolla la API en esta carpeta
2. Genera datos sintéticos realistas
3. Deploy en Render
4. PR con:
   - Link al API: `https://tu-api.onrender.com`
   - Link a Swagger: `https://tu-api.onrender.com/docs`
   - Screenshots de los endpoints
   - Ejemplos de responses

## 🎓 Recursos

- [FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/)
- [Faker Library](https://faker.readthedocs.io/)
- [Render Python Deploy](https://render.com/docs/deploy-fastapi)
