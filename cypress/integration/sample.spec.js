describe('Content of Navbarre and navigation to a new url', () => {
  it("Visits Of'Couse site ", () => {
    cy.visit('http://localhost:8081/');
  });
  it('finds the content of navBarre', () => {
    cy.visit('http://localhost:8081/');
    cy.get('nav').contains('Recettes');
    cy.get('nav').contains('Accueil');
    cy.get('nav').contains('Planning');
    cy.get('nav').contains('Courses');
  });
  it('clicking "Recettes" navigates to a new url', () => {
    cy.visit('http://localhost:8081/');
    cy.contains('Recettes').click();
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/recipes');
  });
  it('clicking "Planning" navigates to a new url', () => {
    cy.visit('http://localhost:8081/');
    cy.contains('Planning').click();
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/planning');
  });
  it('clicking "Courses" navigates to a new url', () => {
    cy.visit('http://localhost:8081/');
    cy.contains('Courses').click();
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/shoppingList');
  });
  it('clicking "Connexion" navigates to a new url', () => {
    cy.visit('http://localhost:8081/');
    // rajout de {force: true} car le lien connexion n'est pas visible sur la page
    cy.contains('Connexion').click();
    cy.url().should('include', '/login');
  });
});

describe('Visual tests on recipes page', () => {
  it('I see card recipes on recipes page', () => {
    cy.visit('http://localhost:8081/recipes');
    cy.get('.card');
  });
  it('I see tabs with "Entrée"', () => {
    cy.visit('http://localhost:8081/recipes');
    cy.get('.tabs').contains('Entrées');
  });
  it('I see tabs with "Plats"', () => {
    cy.visit('http://localhost:8081/recipes');
    cy.get('.tabs').contains('Plats');
  });
  it('I see tabs with "Desserts"', () => {
    cy.visit('http://localhost:8081/recipes');
    cy.get('.tabs').contains('Desserts');
  });
});

describe('Visuel tests on planning page', () => {
  it('I see card with day', () => {
    let day = [
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
      'Dimanche',
    ];
    for (var i = 0; i < day.length; i++) {
      cy.visit('http://localhost:8081/planning');
      cy.get(`[data-test-id~=${day[i]}]`).contains(day[i]);
      cy.get(`[data-test-id~=${day[i]}]`).contains("Midi");
      cy.get(`[data-test-id~=${day[i]}]`).contains("Soir");
    }
  });
});

describe('Select a day to add recipes', () => {
  it('Select to choose a day exists', () => {
    cy.visit('http://localhost:8081/recipes');
    cy.get('.btn');
  });
  //it('When i choose a day, the recipes is added to the schedule on the chose day', ()=>{
  //})
});
