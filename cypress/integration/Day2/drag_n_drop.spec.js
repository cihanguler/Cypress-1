


describe('Drag and drop feature',()=>{

    it('Drag n drop using data transfer',()=>{

        cy.visit('http://practice.cybertekschool.com/drag_and_drop')
        drag_and_drop()
        drag_and_drop2()

})


const datatransfer = new DataTransfer;


function drag_and_drop(){

    cy.get('#column-a').should('be.visible').trigger('dragstart')
    cy.wait(500)

    cy.get('#column-b').should('be.visible').trigger('drop',{datatransfer})
    cy.wait(500)

    cy.get('#column-b').should('be.visible')
    .trigger('dragend'); //a is dropped into b


}

function drag_and_drop2(){
    cy.get('#column-b').should('be.visible')
    .trigger('dragstart')

    cy.get('#column-a').should('be.visible')
    .trigger('drop',{dataTransfer})

    cy.get('#column-a').should('be.visible')
    .trigger('dragend')
}

