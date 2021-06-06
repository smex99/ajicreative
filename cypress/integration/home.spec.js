describe('renders the home page', () => {
	it('renders correctly', () => {
		cy.visit('/home');
		cy.get('#content').should('exist');
	});
});
