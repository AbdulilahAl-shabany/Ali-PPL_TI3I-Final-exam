describe('Admin Lohin & Add New penerbit', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/login')
    cy.get('#email').type("admin@gmail.com")
    cy.get('#password').type("123123123")
    cy.get('form').submit()
    cy.get(':nth-child(3) > [href="#"]').click()
    cy.get(':nth-child(3) > [href="#"]').click()
    cy.get('.menu-is-opening > .nav > :nth-child(3) > .nav-link').click()
    cy.get('#penerbit').click()
    cy.get("#nama").type("Ali");
    cy.get('#add').click()
    // cy.get('form').submit()
    
  })
})
describe('Admin Edit penerbit', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/login')
    cy.get('#email').type("admin@gmail.com")
    cy.get('#password').type("123123123")
    cy.get('form').submit()
    cy.get(':nth-child(3) > [href="#"]').click()
    cy.get(':nth-child(3) > [href="#"]').click()
    cy.get('.menu-is-opening > .nav > :nth-child(3) > .nav-link').click()
    cy.get("#edit").click()   
    cy.get("#editnama").clear()
    cy.get("#editnama").type("Hafiz")
    cy.get('#Updatename').click()
  })
})
describe('Admin delete penerbit', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/login')
    cy.get('#email').type("admin@gmail.com")
    cy.get('#password').type("123123123")
    cy.get('form').submit()
    cy.get(':nth-child(3) > [href="#"]').click()
    cy.get(':nth-child(3) > [href="#"]').click()
    cy.get('.menu-is-opening > .nav > :nth-child(3) > .nav-link').click()
    cy.get("#delete").click()   
    cy.get("#confirm").click()
    })
})
    describe('Officer Login & Add New penerbit', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/login')
    cy.get('#email').type("petugas@gmail.com")
    cy.get('#password').type("123123123")
    cy.get('form').submit()
    cy.get(':nth-child(3) > [href="#"]').click()
    cy.get(':nth-child(3) > [href="#"]').click()
    cy.get('.menu-is-opening > .nav > :nth-child(3) > .nav-link').click()
    cy.get('#penerbit').click()
    cy.get("#nama").type("Ahamed");
    cy.get('#add').click()
    // cy.get('form').submit()
    
  })
})
describe('Officer Edit penerbit', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/login')
    cy.get('#email').type("petugas@gmail.com")
    cy.get('#password').type("123123123")
    cy.get('form').submit()
    cy.get(':nth-child(3) > [href="#"]').click()
    cy.get(':nth-child(3) > [href="#"]').click()
    cy.get('.menu-is-opening > .nav > :nth-child(3) > .nav-link').click()
    cy.get("#edit").click()   
    cy.get("#editnama").clear()
    cy.get("#editnama").type("Mansor")
    cy.get('#Updatename').click()
  })
})
describe('Officer delete penerbit', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/login')
    cy.get('#email').type("petugas@gmail.com")
    cy.get('#password').type("123123123")
    cy.get('form').submit()
    cy.get(':nth-child(3) > [href="#"]').click()
    cy.get(':nth-child(3) > [href="#"]').click()
    cy.get('.menu-is-opening > .nav > :nth-child(3) > .nav-link').click()
    cy.get("#delete").click()   
    cy.get("#confirm").click()
   
  })
})
