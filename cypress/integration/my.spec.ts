describe('my-test', () => {
    it('rocks', () => {
        cy.visit('http://localhost:3000')
        cy.get('h1').should('contain', 'Welcome to the ToDo App');
    })
})