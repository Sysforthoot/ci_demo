describe('cc-app-test 1', () => {
      
    it("open the hoot medplus login page 1",()=>{
      
      cy.visit("https://hoot-web-staging.herokuapp.com/register");  
      cy.get("#firstName").type("Test_ME");
        cy.wait(2000);
        cy.get("#lastName").type("Test_ME");
        cy.wait(2000);
        cy.get("#emailAddress").type("sysforthoot15@gmail.com");
        cy.wait(2000);
        cy.get("#password").type("Sysforth15@2022");
        cy.wait(2000);
        cy.get("#passwordConfirmation").type("Sysforth15@2022");
        cy.wait(2000);
        cy.get('#hospital').type('This is hospital name');
        cy.wait(2000);
        cy.get('#medmalInsurer').type('This is medical professional library');
        cy.wait(2000);
        cy.get("#zipCode").type("12345");
        cy.wait(2000);
        
        
        cy.xpath('/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/form[1]/div[2]/div[2]/div[2]/label[1]/input[1]').type('153153153153');
        cy.wait(2000);
     
        
        cy.get('.m-0 > .bg-white');
        cy.contains('Select...').type("{enter}");
        cy.wait(2000);
        const p = 'testing.pdf';
        cy.get('.flex-grow > .w-full').attachFile(p);
         cy.wait(2500);
         cy.get('.mr-3').click();
        cy.wait(2000);
        cy.get('.btn').click();
    })
})

