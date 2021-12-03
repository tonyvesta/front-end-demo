// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe('Adding a todo item', function () {

    beforeEach(function () {
     cy.allure().tms('TJ-14', 'TJ-14')
        .severity('critical')
        .epic('A user will be able to add TODOs')
        .feature('Create a TODO Page')
        .story('A users added todos are visible in the page')
        .owner('Tony Jones')
        .description('some description')
        .tag('TODO page')
        .tag('smoke');
      cy.visit('/')
    })
  
    it('displays the item as as a todo', function () {
        cy.get('.new-todo').type('tax car{enter}');
        cy.get('label').should('be.visible').and('contain.text', 'tax car')
        cy.get('.todo-count').should('be.visible').and('contain.text', '1 item left')

    })
  })  
