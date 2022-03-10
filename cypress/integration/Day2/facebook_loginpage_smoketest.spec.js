

describe('Login Page Smoke Test',()=>{

    it('Positive Testing',()=>{
        cy.login_Positive_Scenarios()
    })

    it('Wrong username right password Negative Testing',()=>{

        cy.Negative_Password_Testing()
    })

    it('Negative Testing Wrong Username',()=>{
        cy.Negative_Username_Testing()
    })

    it('Negative Wrong Username and Password Testing',()=>{
        cy.Negative_Username_Password_Testing()
    })
})

