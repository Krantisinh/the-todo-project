describe('my-test', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Title and header check', () => {
        cy.get('h1').should('contain', 'Welcome to the ToDo App');
        cy.title().should('equal', 'ToDo App!');
    })

    it('App exists', () => {
        cy.get('#todo-app').should('exist');
        cy.get('#todo-app .todo__input').should('exist');
        cy.get('.todo__savebtn').should('exist');
    })

    it('Adds a task in the list', () => {
        // Arrange
        const TASK1 = 'Homework';
        const TASK2 = 'Work';

        // Act
        addTasks(TASK1, TASK2);

        // Assert

        getTasks().should('have.length', 2);

        const firstTask = getTask(1).should('exist');

        firstTask.children().eq(0)
            .get('.todo__task-check').should('exist')
            .get('.todo__task-label').should('exist').should('contain', TASK1)
            .get('.todo__task-delete').should('exist');
    })

    it('Deletes the selected task', () => {

        // Arrange
        const TASK1 = 'Homework';
        const TASK2 = 'Work';

        addTasks(TASK1, TASK2);

        getTasks().should('have.length', 2);


        getTask(1).invoke('attr', 'data-key').then((x) => {
            console.log('First', x);

            // Act
            cy.get('.todo__task-delete').eq(0).click();

            // Assert
            getTasks().invoke('attr', x).should('not.exist');

        });

        // Assert
        getTasks().should('have.length', 1);

    })
})

function addTasks(task1, task2) {
    cy.get('.todo__text').type(task1);
    cy.get('.todo__savebtn').click();
    cy.get('.todo__text').type(task2);
    cy.get('.todo__savebtn').click();
}

function getTask(n) {
    return cy.get('.todo__tasks')
        .should('exist')
        .children()
        .eq(n - 1);
}

function getTasks() {
    return cy.get('.todo__tasks')
        .should('exist')
        .children();
}