let usersData = {
"users": [
   {
    "id": 1,
    "name": "Alejandro García",
    "email": "alejandro.garcia@example.com",
    "bio": "Desarrollador Full Stack apasionado por las arquitecturas escalables.",
    "skills": ["JavaScript", "Node.js", "Docker"]
  },
  {
    "id": 2,
    "name": "María López",
    "email": "maria.lopez@example.com",
    "bio": "Diseñadora UX/UI enfocada en accesibilidad y diseño centrado en el usuario.",
    "skills": ["Figma", "Adobe XD", "CSS"]
  },
  {
    "id": 3,
    "name": "Carlos Ruiz",
    "email": "carlos.ruiz@example.com",
    "bio": "Especialista en Marketing Digital con enfoque en análisis de datos.",
    "skills": ["SEO", "Google Analytics", "Python"]
  },
  {
    "id": 4,
    "name": "Ana Martínez",
    "email": "ana.martinez@example.com",
    "bio": "Ingeniera de Software enfocada en desarrollo móvil y performance.",
    "skills": ["React Native", "Swift", "Kotlin"]
  },
  {
    "id": 5,
    "name": "Luis Hernández",
    "email": "luis.hernandez@example.com",
    "bio": "Analista de Ciberseguridad con experiencia en pruebas de penetración.",
    "skills": ["Kali Linux", "Wireshark", "Bash"]
  },
  {
    "id": 6,
    "name": "Lucía Torres",
    "email": "lucia.torres@example.com",
    "bio": "Project Manager orientada a metodologías ágiles y gestión de equipos.",
    "skills": ["Scrum", "Jira", "Trello"]
  },
  {
    "id": 7,
    "name": "Diego Castro",
    "email": "diego.castro@example.com",
    "bio": "Arquitecto de soluciones Cloud especializado en infraestructura como código.",
    "skills": ["AWS", "Terraform", "Kubernetes"]
  },
  {
    "id": 8,
    "name": "Sofía Morales",
    "email": "sofia.morales@example.com",
    "bio": "Científica de Datos interesada en Procesamiento de Lenguaje Natural.",
    "skills": ["PyTorch", "NLP", "SQL"]
  },
  {
    "id": 9,
    "name": "Javier Ortiz",
    "email": "javier.ortiz@example.com",
    "bio": "Desarrollador Frontend con ojo crítico para el detalle visual.",
    "skills": ["React", "Vue", "Tailwind CSS"]
  },
  {
    "id": 10,
    "name": "Elena Vega",
    "email": "elena.vega@example.com",
    "bio": "QA Automation Engineer dedicada a garantizar la calidad del código.",
    "skills": ["Selenium", "Jest", "Cypress"]
  }
]
};

let postsData ={
  "posts": [
    {
    "id": 101,
    "userId": 1,
    "content": "Just finished a new microservices architecture. Feeling productive! 🚀",
    "likes": 42,
    "createdAt": "2024-03-01T10:30:00Z"
  },
  {
    "id": 102,
    "userId": 2,
    "content": "Accessibility is not a feature, it's a right. Designing for everyone today.",
    "likes": 128,
    "createdAt": "2024-03-02T14:15:00Z"
  },
  {
    "id": 103,
    "userId": 3,
    "content": "Data doesn't lie, but it does tell secrets if you listen closely enough. 📊",
    "likes": 56,
    "createdAt": "2024-03-03T09:00:00Z"
  },
  {
    "id": 104,
    "userId": 4,
    "content": "Swift vs Kotlin: Why choose when you can love both? #MobileDev",
    "likes": 89,
    "createdAt": "2024-03-04T18:45:00Z"
  },
  {
    "id": 105,
    "userId": 5,
    "content": "Always check your logs. You never know who's knocking at the door. 🛡️",
    "likes": 210,
    "createdAt": "2024-03-05T22:10:00Z"
  },
  {
    "id": 106,
    "userId": 6,
    "content": "Sprint planning done! Team is ready for the next big challenge.",
    "likes": 34,
    "createdAt": "2024-03-06T11:20:00Z"
  },
  {
    "id": 107,
    "userId": 7,
    "content": "Terraform apply... and the cloud is ready. Magic? No, DevOps.",
    "likes": 77,
    "createdAt": "2024-03-07T08:05:00Z"
  },
  {
    "id": 108,
    "userId": 8,
    "content": "Training a new NLP model. The results are looking very promising.",
    "likes": 95,
    "createdAt": "2024-03-08T16:50:00Z"
  },
  {
    "id": 109,
    "userId": 9,
    "content": "Tailwind CSS makes my life so much easier. Clean UI in minutes!",
    "likes": 112,
    "createdAt": "2024-03-09T13:30:00Z"
  },
  {
    "id": 110,
    "userId": 10,
    "content": "Green tests = Happy developer. Automation is key. ✅",
    "likes": 68,
    "createdAt": "2024-03-10T17:20:00Z"
  }
  ]
};

let healthData = {
  "health": [
    {
      "status": "healthy",
      "timestamp": "2026-04-03T03:34:20.372Z",
      "uptime": 100.5,
      "memory": { "rss": 45000000, "heapTotal": 30000000, "heapUsed": 15000000, "external": 1000000, "arrayBuffers": 50000 },
      "service": "backend-nodejs",
      "version": "1.0.0"
    },
    {
      "status": "healthy",
      "timestamp": "2026-04-03T03:34:21.372Z",
      "uptime": 101.5,
      "memory": { "rss": 45001000, "heapTotal": 30000000, "heapUsed": 15000500, "external": 1000000, "arrayBuffers": 50000 },
      "service": "backend-nodejs",
      "version": "1.0.0"
    },
    {
      "status": "healthy",
      "timestamp": "2026-04-03T03:34:22.372Z",
      "uptime": 102.5,
      "memory": { "rss": 45002000, "heapTotal": 30000000, "heapUsed": 15001000, "external": 1000000, "arrayBuffers": 50000 },
      "service": "backend-nodejs",
      "version": "1.0.0"
    },
    {
      "status": "healthy",
      "timestamp": "2026-04-03T03:34:23.372Z",
      "uptime": 103.5,
      "memory": { "rss": 45003000, "heapTotal": 30000000, "heapUsed": 15001500, "external": 1000000, "arrayBuffers": 50000 },
      "service": "backend-nodejs",
      "version": "1.0.0"
    },
    {
      "status": "healthy",
      "timestamp": "2026-04-03T03:34:24.372Z",
      "uptime": 104.5,
      "memory": { "rss": 45004000, "heapTotal": 30000000, "heapUsed": 15002000, "external": 1000000, "arrayBuffers": 50000 },
      "service": "backend-nodejs",
      "version": "1.0.0"
    },
    {
      "status": "healthy",
      "timestamp": "2026-04-03T03:34:25.372Z",
      "uptime": 105.5,
      "memory": { "rss": 45005000, "heapTotal": 30000000, "heapUsed": 15002500, "external": 1000000, "arrayBuffers": 50000 },
      "service": "backend-nodejs",
      "version": "1.0.0"
    },
    {
      "status": "healthy",
      "timestamp": "2026-04-03T03:34:26.372Z",
      "uptime": 106.5,
      "memory": { "rss": 45006000, "heapTotal": 30000000, "heapUsed": 15003000, "external": 1000000, "arrayBuffers": 50000 },
      "service": "backend-nodejs",
      "version": "1.0.0"
    },
    {
      "status": "healthy",
      "timestamp": "2026-04-03T03:34:27.372Z",
      "uptime": 107.5,
      "memory": { "rss": 45007000, "heapTotal": 30000000, "heapUsed": 15003500, "external": 1000000, "arrayBuffers": 50000 },
      "service": "backend-nodejs",
      "version": "1.0.0"
    },
    {
      "status": "healthy",
      "timestamp": "2026-04-03T03:34:28.372Z",
      "uptime": 108.5,
      "memory": { "rss": 45008000, "heapTotal": 30000000, "heapUsed": 15004000, "external": 1000000, "arrayBuffers": 50000 },
      "service": "backend-nodejs",
      "version": "1.0.0"
    },
    {
      "status": "healthy",
      "timestamp": "2026-04-03T03:34:29.372Z",
      "uptime": 109.5,
      "memory": { "rss": 45009000, "heapTotal": 30000000, "heapUsed": 15004500, "external": 1000000, "arrayBuffers": 50000 },
      "service": "backend-nodejs",
      "version": "1.0.0"
    }
  ]
};

let commentsData = {
  "comments": [
  { id: 1, postId: 1, userId: 1, text: "Excelente artículo, muy útil.", date: "2024-03-01T10:00:00Z" },
  { id: 2, postId: 1, userId: 2, text: "Me encantó la explicación de Node.js.", date: "2024-03-01T11:30:00Z" },
  { id: 3, postId: 2, userId: 3, text: "Tengo una duda con la configuración de Express.", date: "2024-03-02T09:15:00Z" },
  { id: 4, postId: 2, userId: 1, text: "¡Ánimo! Es más fácil de lo que parece.", date: "2024-03-02T10:05:00Z" },
  { id: 5, postId: 3, userId: 4, text: "¿Cuándo publicas la segunda parte?", date: "2024-03-03T15:20:00Z" },
  { id: 6, postId: 3, userId: 5, text: "Muy buen contenido, compartido.", date: "2024-03-03T16:45:00Z" },
  { id: 7, postId: 4, userId: 2, text: "No conocía esa librería, gracias por el tip.", date: "2024-03-04T08:00:00Z" },
  { id: 8, postId: 5, userId: 3, text: "El diseño de la API quedó muy limpio.", date: "2024-03-05T12:00:00Z" },
  { id: 9, postId: 1, userId: 4, text: "Tercer comentario en el post 1.", date: "2024-03-05T14:10:00Z" },
  { id: 10, postId: 1, userId: 5, text: "Suscribiéndose para más actualizaciones.", date: "2024-03-05T14:50:00Z" }
]
};

let followsData = {
  "follows": [
    { followerId: 1, followingId: 2 },
    { followerId: 1, followingId: 3 },
    { followerId: 1, followingId: 7 },
    { followerId: 2, followingId: 1 },
    { followerId: 3, followingId: 4 },
    { followerId: 4, followingId: 5 },
    { followerId: 5, followingId: 5 },
    { followerId: 6, followingId: 6 },
    { followerId: 7, followingId: 7 },
    { followerId: 8, followingId: 8 },
    { followerId: 9, followingId: 9 },
    { followerId: 10, followingId: 10 }
  ]
};

module.exports = {
  usersData,
  postsData,
  healthData,
  commentsData,
  followsData
};