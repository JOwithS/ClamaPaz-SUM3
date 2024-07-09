describe('Prueba de API REST', () => {
    beforeEach(() => {
    
        cy.visit('http://localhost:8100');

     
        cy.get('#username').type('ashu');
        cy.get('#password').type('Am0$');
        cy.get('ion-button').contains('Regístrate').click({ force: true });

    
        cy.url().should('include', '/home');
    });

    it('Debería redirigir a la página de API REST al hacer clic en "Ir a API REST"', () => {
       
        cy.contains('Ir a API REST').click();
        cy.url().should('include', '/apirest');
        cy.get('ion-card').should('be.visible');
    });

    it('Debería redirigir a la página de inicio al hacer clic en "¡Vamos al Home!" desde la página de API REST', () => {
      
        cy.contains('¡Vamos al Home!').should('be.visible').click();

      
        cy.url().should('include', '/home');
    });
});

//tengo problemas con este código:     cy.contains('¡Vamos al Home!').should('be.visible').click();
