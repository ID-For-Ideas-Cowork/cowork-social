# Ejemplo: Generar Datos Sintéticos

Este script muestra cómo generar datos fake para tus análisis.

## Instalación

```bash
pip install faker pandas
```

## Uso

```bash
python generate_sample_data.py
```

Genera 3 archivos CSV:
- `users.csv` - 100 usuarios fake
- `posts.csv` - 500 publicaciones fake
- `interactions.csv` - 2000 interacciones fake

## Script

```python
from faker import Faker
import pandas as pd
import random
from datetime import datetime, timedelta

fake = Faker('es_ES')  # Español
random.seed(42)

print("🔄 Generando datos...")

# === USUARIOS ===
users = []
for i in range(100):
    joined = fake.date_between(start_date='-1y', end_date='today')
    users.append({
        'user_id': i+1,
        'name': fake.name(),
        'email': fake.email(),
        'bio': fake.text(max_nb_chars=100),
        'skills': random.sample(['Python', 'JavaScript', 'React', 'Node.js', 'Design', 'Data Science', 'PM', 'QA'], k=random.randint(2, 4)),
        'joined_date': joined,
        'is_active': random.choice([True, True, True, False])  # 75% activos
    })

df_users = pd.DataFrame(users)
df_users['skills'] = df_users['skills'].apply(lambda x: ', '.join(x))
df_users.to_csv('users.csv', index=False)
print(f"✅ users.csv - {len(users)} registros")

# === POSTS ===
posts = []
categories = ['Tecnología', 'Diseño', 'Negocios', 'Data', 'Carrera', 'Proyecto']

for i in range(500):
    user_id = random.randint(1, 100)
    created = fake.date_time_between(start_date='-3m', end_date='now')
    posts.append({
        'post_id': i+1,
        'user_id': user_id,
        'content': fake.text(max_nb_chars=200),
        'category': random.choice(categories),
        'likes': random.randint(0, 200),
        'comments': random.randint(0, 50),
        'shares': random.randint(0, 20),
        'created_at': created
    })

df_posts = pd.DataFrame(posts)
df_posts['engagement_score'] = (df_posts['likes'] + df_posts['comments']*2 + df_posts['shares']*3) / 100
df_posts.to_csv('posts.csv', index=False)
print(f"✅ posts.csv - {len(posts)} registros")

# === INTERACTIONS ===
interactions = []
interaction_types = ['like', 'comment', 'share', 'view']

for i in range(2000):
    interactions.append({
        'interaction_id': i+1,
        'user_id': random.randint(1, 100),
        'post_id': random.randint(1, 500),
        'type': random.choice(interaction_types),
        'created_at': fake.date_time_between(start_date='-3m', end_date='now')
    })

df_interactions = pd.DataFrame(interactions)
df_interactions.to_csv('interactions.csv', index=False)
print(f"✅ interactions.csv - {len(interactions)} registros")

print("\n📊 Resumen:")
print(f"  Total usuarios: {len(users)}")
print(f"  Total posts: {len(posts)}")
print(f"  Total interacciones: {len(interactions)}")
print(f"  Engagement promedio: {df_posts['engagement_score'].mean():.2f}")
print("\n💡 Archivos generados listos para analizar!")
```

## Uso en Notebooks

```python
import pandas as pd

# Cargar datos
users = pd.read_csv('users.csv')
posts = pd.read_csv('posts.csv')
interactions = pd.read_csv('interactions.csv')

# Análisis rápido
print(posts.describe())
print(posts.groupby('category')['likes'].mean())
```
