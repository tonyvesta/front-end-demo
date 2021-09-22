// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe('todo page', function () {
    
      let TODO_ITEM_ONE = 'buy some cheese'
      let TODO_ITEM_TWO = 'feed the cat'
      let TODO_ITEM_THREE = 'book a doctors appointment'

    beforeEach(function () {
      cy.allure().tms('TJ-14', 'TJ-14')
        .severity('critical')
        .epic('A user will be able to add TODOs')
        .feature('TODO Page')
        .story('A user can add new TODOs via a TODO page')
        .owner('Tony Jones')
        .description('some description')
        .tag('TODO page')
        .tag('smoke');
        
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
    
     context('No Todos', function () {
    it('should hide #main and #footer', function () {
      // Unlike the TodoMVC tests, we don't need to create
      // a gazillion helper functions which are difficult to
      // parse through. Instead we'll opt to use real selectors
      // so as to make our testing intentions as clear as possible.
      //
      // http://on.cypress.io/get
      cy.get('.todo-list li').should('not.exist')
      cy.get('.main').should('not.exist')
      cy.get('.footer').should('not.exist')
    })
  })

  context('New Todo', function () {
    // New commands used here:
    // https://on.cypress.io/type
    // https://on.cypress.io/eq
    // https://on.cypress.io/find
    // https://on.cypress.io/contains
    // https://on.cypress.io/should
    // https://on.cypress.io/as

    it('should allow me to add todo items', function () {
      // create 1st todo
      cy.get('.new-todo')
      .type(TODO_ITEM_ONE)
      .type('{enter}')

      // make sure the 1st label contains the 1st todo text
      cy.get('.todo-list li')
      .eq(0)
      .find('label')
      .should('contain', TODO_ITEM_ONE)

      // create 2nd todo
      cy.get('.new-todo')
      .type(TODO_ITEM_TWO)
      .type('{enter}')

      // make sure the 2nd label contains the 2nd todo text
      cy.get('.todo-list li')
      .eq(1)
      .find('label')
      .should('contain', TODO_ITEM_TWO)
    })

    it('adds items', function () {
      // create several todos then check the number of items in the list
      cy.get('.new-todo')
      .type('todo A{enter}')
      .type('todo B{enter}') // we can continue working with same element
      .type('todo C{enter}') // and keep adding new items
      .type('todo D{enter}')

      cy.get('.todo-list li').should('have.length', 4)
    })

    it('should clear text input field when an item is added', function () {
      cy.get('.new-todo')
      .type(TODO_ITEM_ONE)
      .type('{enter}')

      cy.get('.new-todo').should('have.text', '')
    })

    it('should append new items to the bottom of the list', function () {
      // this is an example of a custom command
      // defined in cypress/support/commands.js
      cy.createDefaultTodos().as('todos')

      // even though the text content is split across
      // multiple <span> and <strong> elements
      // `cy.contains` can verify this correctly
      cy.get('.todo-count').contains('3 items left')

      cy.get('@todos')
      .eq(0)
      .find('label')
      .should('contain', TODO_ITEM_ONE)

      cy.get('@todos')
      .eq(1)
      .find('label')
      .should('contain', TODO_ITEM_TWO)

      cy.get('@todos')
      .eq(2)
      .find('label')
      .should('contain', TODO_ITEM_THREE)
    })

    it('should trim text input', function () {
      // this is an example of another custom command
      // since we repeat the todo creation over and over
      // again. It's up to you to decide when to abstract
      // repetitive behavior and roll that up into a custom
      // command vs explicitly writing the code.
      cy.createTodo(`    ${TODO_ITEM_ONE}    `)

      // we use as explicit assertion here about the text instead of
      // using 'contain' so we can specify the exact text of the element
      // does not have any whitespace around it
      cy.get('.todo-list li')
      .eq(0)
      .should('have.text', TODO_ITEM_ONE)
    })

    it('should show #main and #footer when items added', function () {
      cy.createTodo(TODO_ITEM_ONE)
      cy.get('.main').should('be.visible')
      cy.get('.footer').should('be.visible')
    })
  })
  })  
