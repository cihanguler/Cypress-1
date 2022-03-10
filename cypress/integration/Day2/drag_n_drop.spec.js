

describe('Drag and drop feature',()=>{

    it('drag-n-drop using data transfer',()=>{

        cy.visit('http://practice.cybertekschool.com/drag_and_drop')
        dragNdrop()
    
    })
})


const dataTransfer = new DataTransfer;


function dragNdrop(){

    cy.get('#column-a').should('be.visible')
    .trigger('dragstart'); //a is target

    cy.get('#column-b').should('be.visible')
    .trigger('drop',{dataTransfer}); //b is drag and dropped


    cy.get('#column-b').should('be.visible')
    .trigger('dragend');


}