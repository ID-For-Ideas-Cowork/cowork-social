// Ejemplo de Test E2E con Cypress para QA-02
// Ubicación sugerida: qa/cypress/e2e/auth.cy.js

describe('Autenticación de Usuarios', () => {
  beforeEach(() => {
    // Limpiar datos antes de cada test
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('debe mostrar el formulario de registro', () => {
    cy.visit('http://localhost:3000/register')
    cy.get('h2').should('contain', 'Registro')
    cy.get('input[type="text"]').should('exist')
    cy.get('input[type="email"]').should('exist')
    cy.get('input[type="password"]').should('exist')
    cy.get('button[type="submit"]').should('contain', 'Registrar')
  })

  it('debe permitir registrar un nuevo usuario', () => {
    cy.visit('http://localhost:3000/register')
    
    // Llenar formulario
    cy.get('input[type="text"]').type('Usuario Test')
    cy.get('input[type="email"]').type('test@example.com')
    cy.get('input[type="password"]').type('password123')
    
    // Enviar formulario
    cy.get('button[type="submit"]').click()
    
    // Verificar redirección al login
    cy.url().should('include', '/login')
  })

  it('debe permitir login con credenciales correctas', () => {
    // Primero registrar un usuario
    cy.visit('http://localhost:3000/register')
    cy.get('input[type="text"]').type('Usuario Test')
    cy.get('input[type="email"]').type('test@example.com')
    cy.get('input[type="password"]').type('password123')
    cy.get('button[type="submit"]').click()
    
    // Luego hacer login
    cy.visit('http://localhost:3000/login')
    cy.get('input[type="email"]').type('test@example.com')
    cy.get('input[type="password"]').type('password123')
    cy.get('button[type="submit"]').click()
    
    // Verificar redirección al feed
    cy.url().should('include', '/feed')
    cy.get('.navbar').should('contain', 'Usuario Test')
  })

  it('debe mostrar error con credenciales incorrectas', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[type="email"]').type('noexiste@example.com')
    cy.get('input[type="password"]').type('wrongpassword')
    cy.get('button[type="submit"]').click()
    
    // Verificar mensaje de error
    cy.get('.error-message', { timeout: 5000 }).should('be.visible')
    cy.url().should('include', '/login')
  })

  it('debe permitir logout', () => {
    // Login primero
    cy.visit('http://localhost:3000/register')
    cy.get('input[type="text"]').type('Usuario Test')
    cy.get('input[type="email"]').type('test@example.com')
    cy.get('input[type="password"]').type('password123')
    cy.get('button[type="submit"]').click()
    
    cy.visit('http://localhost:3000/login')
    cy.get('input[type="email"]').type('test@example.com')
    cy.get('input[type="password"]').type('password123')
    cy.get('button[type="submit"]').click()
    
    // Hacer logout
    cy.get('.navbar').contains('Salir').click()
    
    // Verificar redirección al home
    cy.url().should('eq', 'http://localhost:3000/')
  })
})

/*
INSTRUCCIONES PARA USAR ESTE TEST:

1. Instalar Cypress:
   npm install --save-dev cypress

2. Agregar script en package.json:
   "scripts": {
     "cy:open": "cypress open",
     "cy:run": "cypress run"
   }

3. Crear estructura de carpetas:
   qa/
   ├── cypress/
   │   ├── e2e/
   │   │   └── auth.cy.js  (este archivo)
   │   ├── fixtures/
   │   └── support/
   └── cypress.config.js

4. Configuración básica (cypress.config.js):
   const { defineConfig } = require('cypress')
   
   module.exports = defineConfig({
     e2e: {
       baseUrl: 'http://localhost:3000',
       setupNodeEvents(on, config) {},
     },
   })

5. Ejecutar tests:
   npm run cy:open   # Modo interactivo
   npm run cy:run    # Modo headless

TIPS:
- Asegúrate de que el frontend esté corriendo en localhost:3000
- Usa cy.intercept() para mockear APIs si es necesario
- Agrega más tests para otras páginas (Feed, Profile, etc.)
- Usa cy.fixture() para cargar datos de prueba
*/
