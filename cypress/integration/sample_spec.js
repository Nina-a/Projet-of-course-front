describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false);
  });
});
describe('My First Test', () => {
  it("Visits Of'Couse site ", () => {
    cy.visit('http://localhost:8081/');
  });
  it('finds the content "Accueil"', () => {
    cy.visit('http://localhost:8081/');

    cy.contains('Accueil');
  });
});
