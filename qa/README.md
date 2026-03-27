# QA Testing - CoWork Social

**Proyecto by [ID For IDeas](https://idforideas.com/)**

Testing y Quality Assurance del proyecto.

## 🎯 6 Tareas a Completar (QA-01 a QA-06)

🔥 **IMPORTANTE**: Debes completar las **6 tareas**, no solo 1.

> Nota de continuidad: en el roadmap actual, QA-03 corresponde a pruebas de API (Postman/Newman). El reporte de bugs puede mantenerse como entregable complementario.

### QA-01: Plan de Testing + Test Cases 📋

**Qué hacer:**
1. Crea documento de estrategia de testing
2. Define tipos de testing a realizar
3. Escribe test cases detallados (mínimo 15)
4. Matriz de compatibilidad (navegadores/dispositivos)
5. Checklist de testing manual

**Plan de Testing debe incluir:**
- **Scope:** Qué se va a probar
- **Out of Scope:** Qué NO se prueba (por ahora)
- **Tipos de Testing:**
  - Funcional
  - UI/UX
  - Compatibilidad
  - Performance básico
  - Accesibilidad
- **Herramientas:** Qué usar
- **Schedule:** Cuándo se prueba
- **Entry/Exit Criteria**

**Test Cases (formato):**
```markdown
### TC-01: Login con credenciales válidas

**Precondición:** Usuario registrado existe en el sistema

**Pasos:**
1. Navegar a /login
2. Ingresar email: "test@example.com"
3. Ingresar password: "Password123"
4. Click en botón "Iniciar Sesión"

**Resultado Esperado:**
- Usuario redirigido a /feed
- Navbar muestra nombre de usuario
- Token guardado en localStorage

**Prioridad:** Alta  
**Tipo:** Funcional  
**Status:** ⬜ Not Run | ✅ Pass | ❌ Fail
```

**Áreas a cubrir:**
- Autenticación (login, registro, logout)
- Navigation (routes, links)
- Posts (crear, ver, like)
- Perfil de usuario
- Búsqueda
- Responsive design

**Deliverables:**
- `qa/QA-01-test-plan/TEST_STRATEGY.md`
- `qa/QA-01-test-plan/TEST_CASES.md`
- `qa/QA-01-test-plan/COMPATIBILITY_MATRIX.md`
- Evidencias de ejecución (opcional)

---

### QA-02: Tests Automatizados E2E 🤖

**Qué hacer:**
1. Implementa 5-10 tests E2E con Cypress o Playwright
2. Cubre flujos críticos (happy paths)
3. Incluye assertions claras
4. README con instrucciones de ejecución

**Flows a testear:**
1. **User Registration Flow**
   - Navegar a /register
   - Completar formulario
   - Submit
   - Verificar redirect a /login

2. **Login Flow**
   - Navegar a /login
   - Login con credenciales válidas
   - Verificar redirect a /feed
   - Verificar navbar muestra usuario

3. **Create Post Flow**
   - Login
   - Click "Nueva Publicación"
   - Escribir contenido
   - Submit
   - Verificar post aparece en feed

4. **View Profile Flow**
   - Login
   - Click en perfil
   - Verificar datos de usuario renders
   - Verificar stats visibles

5. **Search Users Flow**
   - Navegar a /search
   - Ingresar término de búsqueda
   - Verificar resultados

**Tech Stack:**
- **Cypress** (recomendado para beginners) o
- **Playwright** (más potente)

## 💬 ¿Necesitas Ayuda?

Únete al canal **#cowork** en Discord: [https://discord.gg/Vg5uACSs](https://discord.gg/Vg5uACSs)

¡La comunidad de ID For IDeas está lista para ayudarte! 🚀

**Ejemplo Cypress:**
```javascript
// cypress/e2e/login.cy.js
describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should login with valid credentials', () => {
    cy.get('#email').type('test@example.com')
    cy.get('#password').type('Password123')
    cy.get('button[type="submit"]').click()

    // Assertions
    cy.url().should('include', '/feed')
    cy.get('.navbar').should('contain', 'Test User')
  })

  it('should show error with invalid credentials', () => {
    cy.get('#email').type('wrong@example.com')
    cy.get('#password').type('wrongpass')
    cy.get('button[type="submit"]').click()

    cy.get('.error-message').should('be.visible')
    cy.url().should('include', '/login')
  })
})
```

**Deliverables:**
- `qa/QA-02-automated-tests/` con tests
- `qa/QA-02-automated-tests/README.md` con instrucciones  
- `qa/QA-02-automated-tests/package.json`
- Screenshots/videos de test runs

---

### QA-03: Tests de API + Reporte de Bugs 🐛

**Qué hacer:**
- Crear y ejecutar colección de API tests (Postman/Newman)
- Validar status code, schema y errores esperados en endpoints críticos
- Ejecutar exploratory testing en la app
- Documentar 5-10 bugs encontrados
- Incluir pasos de reproducción
- Adjuntar screenshots/videos como evidencia
- Clasificar por severidad y prioridad

**Bug Report Format:**
```markdown
## BUG-001: El botón de login no funciona en mobile

**Severidad:** Alta  
**Prioridad:** Alta  
**Estado:** Open  
**Encontrado en:** v0.1.0  
**Navegador:** Chrome Mobile 120  
**Device:** iPhone 12  

**Descripción:**
Al hacer tap en el botón "Iniciar Sesión" en la página de login desde un dispositivo móvil, el botón no responde. No hay feedback visual ni se envía el formulario.

**Steps to Reproduce:**
1. Abrir la app en iPhone 12 (Chrome)
2. Navegar a /login
3. Ingresar credenciales válidas
4. Hacer tap en botón "Iniciar Sesión"
5. Observar que nada ocurre

**Expected Behavior:**
- El botón debería responder al tap
- Mostrar feedback visual (loading, etc)
- Enviar formulario si datos válidos

**Actual Behavior:**
- Botón no responde
- Sin feedback visual
- Formulario no se envía

**Evidence:**
![Screenshot](./screenshots/bug-001-login-button.png)

**Workarounds:**
- Usar versión desktop
- Presionar Enter después de ingresar password

**Additional Notes:**
Funciona correctamente en desktop. Posible issue con touch events o z-index.
```

**Categorías de Bugs:**
- **Funcionales:** Features no funcionan como esperado
- **UI:** Problemas visuales, layout quebrado
- **Performance:** Lentitud, memory leaks
- **Accesibilidad:** No cumple WCAG
- **Usabilidad:** Confuso, mala UX
- **Compatibilidad:** Funciona en unos browsers pero no en otros

**Severidad:**
- **Critical:** App crashes, data loss
- **High:** Feature principal no funciona
- **Medium:** Feature secundaria con issues
- **Low:** Issues cosméticos, edge cases

**Deliverables:**
- `qa/QA-03-bug-reports/BUGS.md`
- `qa/QA-03-bug-reports/screenshots/` con capturas
- `qa/QA-03-bug-reports/SUMMARY.md` con resumen y recomendaciones

---

### QA-04: Tests de Performance Básicos ⚡

**Qué hacer:**
1. Ejecuta auditoría Lighthouse en frontend
2. Mide tiempo de respuesta de endpoints críticos
3. Prueba carga concurrente ligera
4. Documenta oportunidades de mejora

**Deliverables:**
- `qa/QA-04-performance/PERFORMANCE_REPORT.md`
- Resultados y gráficas

---

### QA-05: Testing de Accesibilidad (a11y) ♿

**Qué hacer:**
1. Auditar navegación por teclado
2. Verificar contraste y labels
3. Revisar roles ARIA y compatibilidad con lector de pantalla

**Deliverables:**
- `qa/QA-05-accessibility/A11Y_REPORT.md`
- Lista de issues con severidad y recomendaciones

---

### QA-06: Regression Testing Suite 🔁

**Qué hacer:**
1. Crear checklist de regresión para release
2. Definir smoke tests críticos
3. Estandarizar template de sign-off

**Deliverables:**
- `qa/QA-06-regression/REGRESSION_CHECKLIST.md`
- Matriz de regresión por feature

---

## 📦 Estructura de QA

```
qa/
├── QA-01-test-plan/
│   ├── TEST_STRATEGY.md
│   ├── TEST_CASES.md
│   ├── COMPATIBILITY_MATRIX.md
│   └── evidence/
│
├── QA-02-automated-tests/
│   ├── cypress/
│   │   └── e2e/
│   ├── package.json
│   ├── cypress.config.js
│   └── README.md
│
└── QA-03-bug-reports/
    ├── BUGS.md
    ├── SUMMARY.md
    └── screenshots/
```

---

## 🛠 Setup - Cypress

```bash
cd qa/QA-02-automated-tests
npm init -y
npm install --save-dev cypress

# Open Cypress
npx cypress open
```

**cypress.config.js:**
```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {},
  },
})
```

---

## 🛠 Setup - Playwright

```bash
cd qa/QA-02-automated-tests
npm init -y
npm install --save-dev @playwright/test

# Run tests
npx playwright test

# UI mode
npx playwright test --ui
```

---

## 📝 Cómo hacer tu PR

**Para QA-01 (Test Plan):**
1. Ejecuta testing manual
2. Documenta test cases
3. Incluye evidencias (screenshots opcionales)
4. PR con summary de lo que probaste

**Para QA-02 (Automated Tests):**
1. Implementa tests E2E
2. Incluye README con setup instructions
3. Video/screenshots de tests corriendo
4. PR con coverage report

**Para QA-03 (Bug Reports):**
1. Realiza exploratory testing
2. Documenta bugs encontrados
3. Incluye capturas/videos
4. PR con resumen de findings y recomendaciones

---

## 🎓 Recursos

**Testing Best Practices:**
- [Test Case Writing](https://www.guru99.com/test-case.html)
- [Bug Report Template](https://www.softwaretestinghelp.com/how-to-write-good-bug-report/)

**Cypress:**
- [Cypress Docs](https://docs.cypress.io/)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Example Tests](https://github.com/cypress-io/cypress-example-recipes)

**Playwright:**
- [Playwright Docs](https://playwright.dev/)
- [Best Practices](https://playwright.dev/docs/best-practices)

**Accessibility:**
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAVE Tool](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
