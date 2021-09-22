

  // type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe('todo creation field', function () {

    beforeEach(function () {
      cy.epic('A user will be able to add TODOs')
        .feature('create a TODO Page')
        .story('Add a TODO text field');
      cy.visit('/')
    })

    it('should have the placeholder text "What needs to be done?"', () => {
        cy.get('.new-todo').should('have.attr', 'placeholder', 'What needs to be done?');
    });
  })  
