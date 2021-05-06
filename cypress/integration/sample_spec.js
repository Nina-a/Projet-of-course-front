describe('Content of Navbarre and navigation to a new url', () => {
  it("Visits Of'Couse site ", () => {
    cy.visit('http://localhost:8081/');
  });
  it('finds the content of navBarre', () => {
    cy.visit('http://localhost:8081/');
    cy.contains('Recettes');
    cy.contains('Accueil');
    cy.contains('Planning');
    cy.contains('Courses');
  });
  it('clicking "Recettes" navigates to a new url', () => {
    cy.visit('http://localhost:8081/');
    cy.contains('Recettes').click();
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/recipes');
  })
  it('clicking "Planning" navigates to a new url', () => {
    cy.visit('http://localhost:8081/');
    cy.contains('Planning').click();
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/planning');
  })
  it('clicking "Courses" navigates to a new url', () => {
    cy.visit('http://localhost:8081/');
    cy.contains('Courses').click();
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/shoppingList');
  })
  it('clicking "Connexion" navigates to a new url', () => {
    cy.visit('http://localhost:8081/');
    // rajout de {force: true} car le lien connexion n'est pas visible sur la page
    cy.contains('Connexion').click({force: true});
    cy.url().should('include', '/login');
  })
});
/*describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})*/
