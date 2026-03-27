# Data Analytics - CoWork Social

**Proyecto by [ID For IDeas](https://idforideas.com/)**

Análisis de datos y visualizaciones con datos sintéticos.

## 🚀 Inicio Rápido

```bash
# Crear entorno virtual
python -m venv venv

# Activar (Windows)
venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Iniciar Jupyter
jupyter notebook
```

## 🎯 6 Tareas a Completar (DA-01 a DA-06)

🔥 **IMPORTANTE**: Debes completar las **6 tareas**, no solo 1.

### DA-01: Dashboard de Engagement 📊

**Qué hacer:**
1. Genera datos sintéticos de usuarios y posts (Faker)
2. Crea métricas: usuarios activos, posts por día, engagement rate
3. Visualiza con matplotlib/plotly
4. Deploy dashboard en **Streamlit Cloud**

**Métricas a incluir:**
- Usuarios activos por día (últimos 30 días)
- Posts publicados por día
- Engagement rate (likes + comments / posts)
- Top 10 usuarios más activos

**Stack:**
- Pandas para manipulación
- Matplotlib/Plotly para gráficos
- Streamlit para dashboard

**Archivos a crear:**
```
data/DA-01-engagement/
├── generate_data.py        # Genera CSVs con datos fake
├── analysis.ipynb          # Notebook con análisis
├── dashboard.py            # Streamlit app
└── requirements.txt
```

---

### DA-02: Análisis de Contenido 📝

**Qué hacer:**
1. Genera datos de posts con categorías (tech, design, business)
2. Analiza qué tipo de contenido genera más engagement
3. Crea visualizaciones comparativas
4. Notebook Jupyter con findings
5. Opcional: Deploy dashboard en Streamlit

**Análisis a realizar:**
- Distribución de posts por categoría
- Engagement promedio por categoría
- Mejores horarios para publicar
- Longitud de posts vs engagement

**Archivos a crear:**
```
data/DA-02-content-analysis/
├── generate_posts_data.py
├── content_analysis.ipynb
├── visualizations.py
└── requirements.txt
```

---

### DA-03: Reporte de Crecimiento 📈

**Qué hacer:**
1. Genera datos de usuarios registrados por mes (12 meses)
2. Calcula growth rate mes a mes
3. Proyecta crecimiento próximos 3 meses
4. Dashboard interactivo con Streamlit

**Métricas a incluir:**
- Nuevos usuarios por mes
- Growth rate mensual
- Tasa de retención
- Usuarios activos vs totales
- Proyección de crecimiento

**Archivos a crear:**
```
data/DA-03-growth-report/
├── generate_user_data.py
├── growth_analysis.ipynb
├── dashboard.py
└── requirements.txt
```

---

### DA-04: Análisis de Red Social (Network Analysis) 🕸️

**Qué hacer:**
1. Genera un grafo de conexiones entre usuarios
2. Calcula centralidad, comunidades y usuarios puente
3. Visualiza la red con `networkx` y `plotly`

**Entregables clave:**
- Notebook con análisis de red
- Visualizaciones de grafo
- Top influencers identificados

---

### DA-05: Predicción de Engagement 🤖

**Qué hacer:**
1. Construye dataset de entrenamiento con features de posts
2. Entrena modelo de regresión para predecir engagement
3. Evalúa con métricas (RMSE y R²)

**Entregables clave:**
- Notebook de entrenamiento
- Modelo serializado
- Feature importance

---

### DA-06: Métricas Comparativas por Segmento 📉

**Qué hacer:**
1. Segmenta usuarios por comportamiento/skills
2. Compara engagement, frecuencia y retención por segmento
3. Crea dashboard con filtros

**Entregables clave:**
- Dashboard comparativo
- Insights por segmento
- Reporte final con recomendaciones

---

## 📦 Deploy Dashboard en Streamlit

### Paso 1: Crear app Streamlit

```python
# dashboard.py
import streamlit as st
import pandas as pd
import plotly.express as px

st.title("📊 CoWork Social Analytics")
st.sidebar.header("Filtros")

# Tu código aquí...
```

### Paso 2: Deploy

1. Sube tu código a GitHub
2. Ve a [streamlit.io/cloud](https://streamlit.io/cloud)
3. Conecta tu repo
4. Selecciona el archivo `dashboard.py`
5. Deploy!

Ejemplo URL: `https://tu-app.streamlit.app`

---

## 📝 Cómo hacer tu PR

1. Crea carpeta con tu tarea: `data/DA-XX-nombre/`
2. Incluye:
   - Script de generación de datos
   - Notebook con análisis
   - Dashboard (si aplica)
   - requirements.txt
   - README.md con tus findings
3. Deploy dashboard en Streamlit
4. PR con:
   - Link al dashboard
   - Screenshots de visualizaciones
   - 3-5 insights clave que encontraste
   - Explicación de metodología

---

## 🧪 Ejemplo: Generar Datos Fake

```python
# generate_data.py
from faker import Faker
import pandas as pd
import random
from datetime import datetime, timedelta

fake = Faker()

# Generar usuarios
users = []
for i in range(100):
    users.append({
        'id': i+1,
        'name': fake.name(),
        'email': fake.email(),
        'joined_date': fake.date_between(start_date='-1y', end_date='today')
    })

df_users = pd.DataFrame(users)
df_users.to_csv('users.csv', index=False)

# Generar posts
posts = []
for i in range(500):
    posts.append({
        'id': i+1,
        'user_id': random.randint(1, 100),
        'content': fake.text(max_nb_chars=200),
        'likes': random.randint(0, 150),
        'comments': random.randint(0, 50),
        'created_at': fake.date_time_between(start_date='-3m', end_date='now')
    })

df_posts = pd.DataFrame(posts)
df_posts.to_csv('posts.csv', index=False)

print("✅ Datos generados: users.csv, posts.csv")
```

---

## 🎓 Recursos

- [Pandas Docs](https://pandas.pydata.org/docs/)
- [Plotly Express](https://plotly.com/python/plotly-express/)
- [Streamlit Tutorial](https://docs.streamlit.io/library/get-started)
- [Faker Documentation](https://faker.readthedocs.io/)
