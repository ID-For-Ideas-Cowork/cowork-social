# Ejemplo: Dashboard de Engagement con Streamlit

Este es un ejemplo completo de cómo implementar la tarea **DA-01: Dashboard de Engagement**.

---

## 📊 Instrucciones

### 1. Instalar dependencias

```bash
cd data
pip install -r requirements.txt
```

### 2. Ejecutar dashboard

```bash
streamlit run engagement_dashboard.py
```

Se abrirá en `http://localhost:8501`

---

## 📁 Código: `engagement_dashboard.py`

```python
import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime, timedelta
import random

# Configuración de la página
st.set_page_config(
    page_title="CoWork Social - Dashboard",
    page_icon="📊",
    layout="wide"
)

# Título principal
st.title("📊 Dashboard de Engagement - CoWork Social")
st.markdown("---")

# === GENERAR DATOS SINTÉTICOS ===
@st.cache_data
def generate_fake_data():
    """Genera datos fake para el dashboard"""
    dates = pd.date_range(end=datetime.now(), periods=30, freq='D')
    
    data = {
        'date': dates,
        'posts': [random.randint(20, 80) for _ in range(30)],
        'likes': [random.randint(100, 500) for _ in range(30)],
        'comments': [random.randint(30, 150) for _ in range(30)],
        'shares': [random.randint(10, 80) for _ in range(30)],
        'new_users': [random.randint(5, 30) for _ in range(30)],
        'active_users': [random.randint(100, 300) for _ in range(30)]
    }
    
    df = pd.DataFrame(data)
    df['engagement_rate'] = ((df['likes'] + df['comments']*2 + df['shares']*3) / df['active_users'] * 100).round(2)
    
    return df

df = generate_fake_data()

# === MÉTRICAS PRINCIPALES ===
col1, col2, col3, col4 = st.columns(4)

with col1:
    total_posts = df['posts'].sum()
    delta_posts = df['posts'].iloc[-1] - df['posts'].iloc[-7]
    st.metric("Total Posts (30d)", f"{total_posts:,}", delta=f"{delta_posts:+d} vs 7d atrás")

with col2:
    total_likes = df['likes'].sum()
    delta_likes = df['likes'].iloc[-1] - df['likes'].iloc[-7]
    st.metric("Total Likes (30d)", f"{total_likes:,}", delta=f"{delta_likes:+d}")

with col3:
    avg_engagement = df['engagement_rate'].mean()
    delta_engagement = df['engagement_rate'].iloc[-1] - df['engagement_rate'].iloc[-7]
    st.metric("Engagement Rate", f"{avg_engagement:.1f}%", delta=f"{delta_engagement:+.1f}%")

with col4:
    total_users = df['new_users'].sum()
    delta_users = df['new_users'].iloc[-1] - df['new_users'].iloc[-7]
    st.metric("Nuevos Usuarios (30d)", f"{total_users:,}", delta=f"{delta_users:+d}")

st.markdown("---")

# === GRÁFICO 1: TIMELINE DE INTERACCIONES ===
st.subheader("📈 Interacciones en el Tiempo")

fig_interactions = go.Figure()

fig_interactions.add_trace(go.Scatter(
    x=df['date'], y=df['likes'],
    mode='lines+markers',
    name='Likes',
    line=dict(color='#3b82f6', width=2),
    marker=dict(size=6)
))

fig_interactions.add_trace(go.Scatter(
    x=df['date'], y=df['comments'],
    mode='lines+markers',
    name='Comments',
    line=dict(color='#10b981', width=2),
    marker=dict(size=6)
))

fig_interactions.add_trace(go.Scatter(
    x=df['date'], y=df['shares'],
    mode='lines+markers',
    name='Shares',
    line=dict(color='#f59e0b', width=2),
    marker=dict(size=6)
))

fig_interactions.update_layout(
    hovermode='x unified',
    xaxis_title="Fecha",
    yaxis_title="Cantidad",
    height=400,
    showlegend=True
)

st.plotly_chart(fig_interactions, use_container_width=True)

# === GRÁFICO 2: ENGAGEMENT RATE ===
col1, col2 = st.columns(2)

with col1:
    st.subheader("💯 Engagement Rate Diario")
    
    fig_engagement = px.line(
        df, x='date', y='engagement_rate',
        markers=True,
        line_shape='spline'
    )
    
    fig_engagement.update_traces(line_color='#8b5cf6', line_width=3)
    fig_engagement.update_layout(
        xaxis_title="Fecha",
        yaxis_title="Engagement Rate (%)",
        height=300
    )
    
    st.plotly_chart(fig_engagement, use_container_width=True)

with col2:
    st.subheader("👥 Usuarios Activos vs Nuevos")
    
    fig_users = go.Figure()
    
    fig_users.add_trace(go.Bar(
        x=df['date'],
        y=df['active_users'],
        name='Usuarios Activos',
        marker_color='#3b82f6'
    ))
    
    fig_users.add_trace(go.Bar(
        x=df['date'],
        y=df['new_users'],
        name='Nuevos Usuarios',
        marker_color='#10b981'
    ))
    
    fig_users.update_layout(
        barmode='group',
        xaxis_title="Fecha",
        yaxis_title="Usuarios",
        height=300
    )
    
    st.plotly_chart(fig_users, use_container_width=True)

st.markdown("---")

# === TABLA DE DATOS ===
st.subheader("📋 Datos Detallados")

# Filtro de fechas
col1, col2 = st.columns([1, 3])
with col1:
    days_to_show = st.selectbox("Mostrar últimos:", [7, 14, 30], index=2)

df_filtered = df.tail(days_to_show).copy()
df_filtered['date'] = df_filtered['date'].dt.strftime('%Y-%m-%d')

st.dataframe(
    df_filtered.style.background_gradient(subset=['engagement_rate'], cmap='Greens'),
    use_container_width=True,
    hide_index=True
)

# === INSIGHTS AUTOMÁTICOS ===
st.markdown("---")
st.subheader("💡 Insights Automáticos")

col1, col2, col3 = st.columns(3)

with col1:
    best_day = df.loc[df['engagement_rate'].idxmax()]
    st.success(f"**🏆 Mejor día**: {best_day['date'].strftime('%d/%m/%Y')} con {best_day['engagement_rate']:.1f}% engagement")

with col2:
    avg_posts_per_day = df['posts'].mean()
    st.info(f"**📝 Promedio**: {avg_posts_per_day:.1f} posts por día")

with col3:
    growth_rate = ((df['new_users'].iloc[-7:].sum() / df['new_users'].iloc[-14:-7].sum()) - 1) * 100
    st.warning(f"**📊 Crecimiento**: {growth_rate:+.1f}% vs semana anterior")

# === FOOTER ===
st.markdown("---")
st.caption("🔄 Dashboard actualizado en tiempo real | 📅 Datos de los últimos 30 días | 🚀 CoWork Social")
```

---

## 🎯 Características Implementadas

✅ **Métricas principales con deltas**  
✅ **Gráficos interactivos con Plotly**  
✅ **Timeline de interacciones (Likes, Comments, Shares)**  
✅ **Engagement Rate diario**  
✅ **Comparación Usuarios Activos vs Nuevos**  
✅ **Tabla de datos con gradient**  
✅ **Insights automáticos (mejor día, promedios, crecimiento)**  
✅ **Filtro de fechas**  
✅ **Diseño responsive con columns**

---

## 🚀 Deploy a Streamlit Cloud

### 1. Crear cuenta en [streamlit.io/cloud](https://streamlit.io/cloud)

### 2. Conectar tu repositorio de GitHub

### 3. Configurar deployment:
- **Main file path**: `data/engagement_dashboard.py`
- **Python version**: 3.9+
- **Requirements**: Se detecta automáticamente

### 4. Deploy en 1 click 🎉

---

## 📚 Mejoras Opcionales

- **Datos Reales**: Conectar a la API del backend con `requests`
- **Filtros Avanzados**: Por categoría de post, por usuario, por rango de fechas
- **Más Gráficos**: Heatmap de actividad por día/hora, wordcloud de posts
- **Exportar Datos**: Descargar CSV con `st.download_button()`
- **Autenticación**: Proteger con password usando `st.secrets`
- **Refrescar Automático**: `st_autorefresh()` component

---

## 📖 Referencias

- [Streamlit Docs](https://docs.streamlit.io)
- [Plotly Python](https://plotly.com/python/)
- [Pandas Styling](https://pandas.pydata.org/docs/user_guide/style.html)

---

**¡Dashboard listo para compartir en tu PR!** 🎊
