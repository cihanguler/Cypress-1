

describe('Drag and drop feature',()=>{

    it('drag-n-drop using data transfer',()=>{

        cy.visit('http://practice.cybertekschool.com/drag_and_drop')
        dragNdrop()
        dragNdrop2()
    
    })
})


const dataTransfer = new DataTransfer;


function dragNdrop(){

    cy.get('#column-a').should('be.visible')
    .trigger('dragstart'); //a is dragged

    cy.get('#column-b').should('be.visible')
    .trigger('drop',{dataTransfer}); //b is target


    cy.get('#column-b').should('be.visible')
    .trigger('dragend'); //a is dropped into b


}

function dragNdrop2(){

    cy.get('#column-b').should('be.visible')
    .trigger('dragstart'); 

    cy.get('#column-a').should('be.visible')
    .trigger('drop',{dataTransfer}); 


    cy.get('#column-a').should('be.visible')
    .trigger('dragend');


}