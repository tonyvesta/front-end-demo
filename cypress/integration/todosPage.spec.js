// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe('<a href="https://to-jo.atlassian.net/browse/TJ-14">TJ-14-update readme</a> todo page:', function () {

    beforeEach(function () {
      cy.visit('/')
    })
  
    context('When page is initially opened', function () {

      it('the cursor should have focus on the todo input field', function () {
        cy.focused().should('have.class', 'new-todo');
      });

      it('should have the heading "todos"', () => {
        cy.get('h1').contains('todos');
      });

      it('should contain the todos creation field', () => {
        cy.get('.new-todo').should('be.visible');
      });

      it('should display the help text "Double-click to edit a todo", "Created by petehunt", "Part of TodoMVC"', () => {
        cy.get('.info').should('be.visible');
        cy.get('.info').should('have.text', '\n\t\t\tDouble-click to edit a todo\n\t\t\tCreated by petehunt\n\t\t\tPart of TodoMVC\n\t\t')
      });

    })
  })  
