// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

// check this file using TypeScript if available
// @ts-check

// ***********************************************
// All of these tests are written to implement
// the official TodoMVC tests written for Selenium.
//
// The Cypress tests cover the exact same functionality,
// and match the same test names as TodoMVC.
// Please read our getting started guide
// https://on.cypress.io/introduction-to-cypress
//
// You can find the original TodoMVC tests here:
// https://github.com/tastejs/todomvc/blob/master/tests/test.js
// ***********************************************

describe('TodoMVC - React', function () {
  // setup these constants to match what TodoMVC does
  let TODO_ITEM_ONE = 'buy some cheese'
  let TODO_ITEM_TWO = 'feed the cat'
  let TODO_ITEM_THREE = 'book a doctors appointment'

  beforeEach(function () {
    // By default Cypress will automatically
    // clear the Local Storage prior to each
    // test which ensures no todos carry over
    // between tests.
    //
    // Go out and visit our local web server
    // before each test, which serves us the
    // TodoMVC App we want to test against
    //
    // We've set our baseUrl to be http://localhost:8888
    // which is automatically prepended to cy.visit
    //
    // https://on.cypress.io/api/visit
    cy.allure().tms('TJ-14', 'TJ-14')
      .severity('critical')
      .epic('A user will be able to edit their TODOs')
      .feature('Editing Todos')
      .owner('Tony Jones')
      .description('some description')
      .tag('TODO page')
      .tag('smoke');
    cy.visit('/')
  })

  afterEach(() => {
    // In firefox, blur handlers will fire upon navigation if there is an activeElement.
    // Since todos are updated on blur after editing,
    // this is needed to blur activeElement after each test to prevent state leakage between tests.
    cy.window().then((win) => {
      // @ts-ignore
      win.document.activeElement.blur()
    })
  })

 

  context('Mark all as completed', function () {

    // New commands used here:
    // - cy.check    https://on.cypress.io/api/check
    // - cy.uncheck  https://on.cypress.io/api/uncheck

    beforeEach(function () {
      // This is an example of aliasing
      // within a hook (beforeEach).
      // Aliases will automatically persist
      // between hooks and are available
      // in your tests below
      cy.story('A user can mark TODOs as complete');
      cy.createDefaultTodos().as('todos')
    })

    it('should allow me to mark all items as completed', function () {
      // complete all todos
      // we use 'check' instead of 'click'
      // because that indicates our intention much clearer
      cy.get('.toggle-all').check()

      // get each todo li and ensure its class is 'completed'
      cy.get('@todos')
      .eq(0)
      .should('have.class', 'completed')

      cy.get('@todos')
      .eq(1)
      .should('have.class', 'completed')

      cy.get('@todos')
      .eq(2)
      .should('have.class', 'completed')
    })

    it('should allow me to clear the complete state of all items', function () {
      // check and then immediately uncheck
      cy.get('.toggle-all')
      .check()
      .uncheck()

      cy.get('@todos')
      .eq(0)
      .should('not.have.class', 'completed')

      cy.get('@todos')
      .eq(1)
      .should('not.have.class', 'completed')

      cy.get('@todos')
      .eq(2)
      .should('not.have.class', 'completed')
    })

    it('complete all checkbox should update state when items are completed / cleared', function () {
      // alias the .toggle-all for reuse later
      cy.get('.toggle-all')
      .as('toggleAll')
      .check()
      // this assertion is silly here IMO but
      // it is what TodoMVC does
      .should('be.checked')

      // alias the first todo and then click it
      cy.get('.todo-list li')
      .eq(0)
      .as('firstTodo')
      .find('.toggle')
      .uncheck()

      // reference the .toggle-all element again
      // and make sure its not checked
      cy.get('@toggleAll').should('not.be.checked')

      // reference the first todo again and now toggle it
      cy.get('@firstTodo')
      .find('.toggle')
      .check()

      // assert the toggle all is checked again
      cy.get('@toggleAll').should('be.checked')
    })
  })

  context('Item', function () {
    // New commands used here:
    // - cy.clear    https://on.cypress.io/api/clear

    it('should allow me to mark items as complete', function () {
      // we are aliasing the return value of
      // our custom command 'createTodo'
      //
      // the return value is the <li> in the <ul.todos-list>
      cy.createTodo(TODO_ITEM_ONE).as('firstTodo')
      cy.createTodo(TODO_ITEM_TWO).as('secondTodo')

      cy.get('@firstTodo')
      .find('.toggle')
      .check()

      cy.get('@firstTodo').should('have.class', 'completed')

      cy.get('@secondTodo').should('not.have.class', 'completed')
      cy.get('@secondTodo')
      .find('.toggle')
      .check()

      cy.get('@firstTodo').should('have.class', 'completed')
      cy.get('@secondTodo').should('have.class', 'completed')
    })

    it('should allow me to un-mark items as complete', function () {
      cy.createTodo(TODO_ITEM_ONE).as('firstTodo')
      cy.createTodo(TODO_ITEM_TWO).as('secondTodo')

      cy.get('@firstTodo')
      .find('.toggle')
      .check()

      cy.get('@firstTodo').should('have.class', 'completed')
      cy.get('@secondTodo').should('not.have.class', 'completed')

      cy.get('@firstTodo')
      .find('.toggle')
      .uncheck()

      cy.get('@firstTodo').should('not.have.class', 'completed')
      cy.get('@secondTodo').should('not.have.class', 'completed')
    })

    it('should allow me to edit an item', function () {
      cy.createDefaultTodos().as('todos')

      cy.get('@todos')
      .eq(1)
      .as('secondTodo')
      // TODO: fix this, dblclick should
      // have been issued to label
      .find('label')
      .dblclick()

      // clear out the inputs current value
      // and type a new value
      cy.get('@secondTodo')
      .find('.edit')
      .clear()
      .type('buy some sausages')
      .type('{enter}')

      // explicitly assert about the text value
      cy.get('@todos')
      .eq(0)
      .should('contain', TODO_ITEM_ONE)

      cy.get('@secondTodo').should('contain', 'buy some sausages')
      cy.get('@todos')
      .eq(2)
      .should('contain', TODO_ITEM_THREE)
    })
  })

  context('Editing', function () {
    // New commands used here:
    // - cy.blur    https://on.cypress.io/api/blur

    beforeEach(function () {
      cy.story('A user can Edit TODOs');
      cy.createDefaultTodos().as('todos')
    })

    it('should hide other controls when editing', function () {
      cy.get('@todos')
      .eq(1)
      .as('secondTodo')
      .find('label')
      .dblclick()

      cy.get('@secondTodo')
      .find('.toggle')
      .should('not.be.visible')

      cy.get('@secondTodo')
      .find('label')
      .should('not.be.visible')
    })

    it('should save edits on blur', function () {
      cy.get('@todos')
      .eq(1)
      .as('secondTodo')
      .find('label')
      .dblclick()

      cy.get('@secondTodo')
      .find('.edit')
      .clear()
      .type('buy some sausages')
      // we can just send the blur event directly
      // to the input instead of having to click
      // on another button on the page. though you
      // could do that its just more mental work
      .blur()

      cy.get('@todos')
      .eq(0)
      .should('contain', TODO_ITEM_ONE)

      cy.get('@secondTodo').should('contain', 'buy some sausages')
      cy.get('@todos')
      .eq(2)
      .should('contain', TODO_ITEM_THREE)
    })

    it('should trim entered text', function () {
      cy.get('@todos')
      .eq(1)
      .as('secondTodo')
      .find('label')
      .dblclick()

      cy.get('@secondTodo')
      .find('.edit')
      .clear()
      .type('    buy some sausages    ')
      .type('{enter}')

      cy.get('@todos')
      .eq(0)
      .should('contain', TODO_ITEM_ONE)

      cy.get('@secondTodo').should('contain', 'buy some sausages')
      cy.get('@todos')
      .eq(2)
      .should('contain', TODO_ITEM_THREE)
    })

    it('should remove the item if an empty text string was entered', function () {
      cy.get('@todos')
      .eq(1)
      .as('secondTodo')
      .find('label')
      .dblclick()

      cy.get('@secondTodo')
      .find('.edit')
      .clear()
      .type('{enter}')

      cy.get('@todos').should('have.length', 2)
    })

    it('should cancel edits on escape', function () {
      cy.get('@todos')
      .eq(1)
      .as('secondTodo')
      .find('label')
      .dblclick()

      cy.get('@secondTodo')
      .find('.edit')
      .clear()
      .type('foo{esc}')

      cy.get('@todos')
      .eq(0)
      .should('contain', TODO_ITEM_ONE)

      cy.get('@todos')
      .eq(1)
      .should('contain', TODO_ITEM_TWO)

      cy.get('@todos')
      .eq(2)
      .should('contain', TODO_ITEM_THREE)
    })
  })

  context('Counter', function () {
    it('should display the current number of todo items', function () {
      cy.createTodo(TODO_ITEM_ONE)
      cy.get('.todo-count').contains('1 item left')
      cy.createTodo(TODO_ITEM_TWO)
      cy.get('.todo-count').contains('2 items left')
    })
  })

  context('Clear completed button', function () {
    beforeEach(function () {
      cy.story('A user can clear all completed TODOs');
      cy.createDefaultTodos().as('todos')
    })

    it('should display the correct text', function () {
      cy.get('@todos')
      .eq(0)
      .find('.toggle')
      .check()

      cy.get('.clear-completed').contains('Clear completed')
    })

    it('should remove completed items when clicked', function () {
      cy.get('@todos')
      .eq(1)
      .find('.toggle')
      .check()

      cy.get('.clear-completed').click()
      cy.get('@todos').should('have.length', 2)
      cy.get('@todos')
      .eq(0)
      .should('contain', TODO_ITEM_ONE)

      cy.get('@todos')
      .eq(1)
      .should('contain', TODO_ITEM_THREE)
    })

    it('should be hidden when there are no items that are completed', function () {
      cy.get('@todos')
      .eq(1)
      .find('.toggle')
      .check()

      cy.get('.clear-completed')
      .should('be.visible')
      .click()

      cy.get('.clear-completed').should('not.exist')
    })
  })

  context('Persistence', function () {
    cy.story('A users TODOs are not lost if the page is refreshed');
    it('should persist its data', function () {
      // mimicking TodoMVC tests
      // by writing out this function
      function testState () {
        cy.get('@firstTodo')
        .should('contain', TODO_ITEM_ONE)
        .and('have.class', 'completed')

        cy.get('@secondTodo')
        .should('contain', TODO_ITEM_TWO)
        .and('not.have.class', 'completed')
      }

      cy.createTodo(TODO_ITEM_ONE).as('firstTodo')
      cy.createTodo(TODO_ITEM_TWO).as('secondTodo')
      cy.get('@firstTodo')
      .find('.toggle')
      .check()
      .then(testState)

      .reload()
      .then(testState)
    })
  })

  context('Routing', function () {
    // New commands used here:
    // https://on.cypress.io/window
    // https://on.cypress.io/its
    // https://on.cypress.io/invoke
    // https://on.cypress.io/within

    beforeEach(function () {
      cy.story('A user can filter to see complete or active items only');
      cy.createDefaultTodos().as('todos')
    })

    it('should allow me to display active items', function () {
      cy.get('@todos')
      .eq(1)
      .find('.toggle')
      .check()

      cy.get('.filters')
      .contains('Active')
      .click()

      cy.get('@todos')
      .eq(0)
      .should('contain', TODO_ITEM_ONE)

      cy.get('@todos')
      .eq(1)
      .should('contain', TODO_ITEM_THREE)
    })

    it('should respect the back button', function () {
      cy.get('@todos')
      .eq(1)
      .find('.toggle')
      .check()

      cy.get('.filters')
      .contains('Active')
      .click()

      cy.get('.filters')
      .contains('Completed')
      .click()

      cy.get('@todos').should('have.length', 1)
      cy.go('back')
      cy.get('@todos').should('have.length', 2)
      cy.go('back')
      cy.get('@todos').should('have.length', 3)
    })

    it('should allow me to display completed items', function () {
      cy.get('@todos')
      .eq(1)
      .find('.toggle')
      .check()

      cy.get('.filters')
      .contains('Completed')
      .click()

      cy.get('@todos').should('have.length', 1)
    })

    it('should allow me to display all items', function () {
      cy.get('@todos')
      .eq(1)
      .find('.toggle')
      .check()

      cy.get('.filters')
      .contains('Active')
      .click()

      cy.get('.filters')
      .contains('Completed')
      .click()

      cy.get('.filters')
      .contains('All')
      .click()

      cy.get('@todos').should('have.length', 3)
    })

    it('should highlight the currently applied filter', function () {
      // using a within here which will automatically scope
      // nested 'cy' queries to our parent element <ul.filters>
      cy.get('.filters').within(function () {
        cy.contains('All').should('have.class', 'selected')
        cy.contains('Active')
        .click()
        .should('have.class', 'selected')

        cy.contains('Completed')
        .click()
        .should('have.class', 'selected')
      })
    })
  })

  context('Contrast', () => {
    cy.epic('should have good accessability');
    it('has good contrast when empty', () => {
      cy.addAxeCode()
      cy.checkA11y(null, {
        runOnly: ['cat.color'],
      })
    })

    it('has good contrast with several todos', () => {
      cy.addAxeCode()
      cy.get('.new-todo')
      .type('learn testing{enter}')
      .type('be cool{enter}')

      cy.get('.todo-list li').should('have.length', 2)
      cy.checkA11y(null, {
        runOnly: ['cat.color'],
      })

      // and after marking an item completed
      cy.get('.todo-list li')
      .first()
      .find('.toggle')
      .check()

      cy.get('.todo-list li')
      .first()
      .should('have.class', 'completed')

      cy.checkA11y(null, {
        runOnly: ['cat.color'],
      })
    })
  })
})
