/// 

// import { times } from "cypress/types/lodash";

// const { times } = require("cypress/types/lodash");

describe('cc-app-test', () => {
      
  it("open the hoot medplus login page 1",()=>{
    
    cy.visit("https://hoot-web-staging.herokuapp.com/");  
       cy.get("#emailAddress").type("sysfort05+cc-test-01@gmail.com");
       cy.wait(2000);
       cy.get("#passwordConfirmation").type("Sysfortcc@2021");
       cy.wait(2000);
       cy.get(".btn").click();
       cy.wait(13000);
       cy.get('#newCaseLink').click();
       cy.wait(10000);
       cy.get("#claimNumber",{delay:0}).type("1-06-cy-testing",{delay:0});
      //  cy.wait(2000); 
       cy.get("#claimantLastName",{delay:0}).type("1-06-cy-testing",{delay:0});
      //  cy.wait(2000);
       cy.get("#insured",{delay:0}).type("1-06-cy-testing",{delay:0});
      //  cy.wait(2000);
      //  cy.get("#externalExpert").click();
       
      // cy.get(".hoot__value-container").type("apple");
        // cy.get("#react-select-3-input").should("have.value","apple");
        //-----
      //  cy.get('#react-select-3-input',{ timeout: 10000 }).type('apple');
      //  cy.get("#react-select-3-option-0").click();
       //----
       cy.contains('Select...').type('{enter}');
       cy.wait(1000);
       cy.get('#stepOneContinueButton').click(); // continue to step 2
       cy.wait(15000);
       cy.get("#caseType").type("1-06-cy-testing",{delay:0});
       cy.wait(2000);
       cy.get("#injuryType").type("1-06-cy-testing",{delay:0});
       cy.wait(2000);
       cy.get("#zipCode").type("45678",{delay:0});
       cy.wait(2000);

       cy.get("#shortDescription").type(" 1-06-cy-testing description");
       cy.wait(2000);
       cy.get("#questionsForExpert").type("1-06-cy-testing questions for expert");
       cy.wait(2000);
       cy.get('#stepTwoSubmitButton').click(); //contiue to step 3
       cy.wait(15000);

      //  cy.get(":nth-child(2) > .bg-smurf-butt").click(); //yes for medical record
      //  cy.wait(30000);
      //  cy.get(".w-full > span").click(); //Click here to select Organized Medical Records for Upload
      //  cy.wait(30000);
      //  cy.get("#organizationRequested").click();
       
       cy.get(".row-start-1").click(); // continue to step 4
       cy.wait(2000);
       cy.get(".btn-primary").click(); // submit order
       cy.wait(10000);
       const p = 'testing.pdf';
       cy.get('#uploadCaseFileInput').attachFile(p);
       cy.wait(25000);
      cy.get('.order-lg-2 > .btn').click(); //match with me button
      cy.wait(5000);
      // cy.get('[data-index="4"]').click();
      //  cy.wait(2000);
      //  cy.get('.btn').click();
      //  cy.wait(5000);
      cy.get('#headerLogoutLink').click(); // logout
      cy.wait(10000);
  

  })




  it("medplace admin assign medical expert",()=>{
    
      cy.visit("https://hoot-backend-staging.herokuapp.com/"); 
      cy.wait(5000);
      cy.get('#user_email').type("sysfort05@gmail.com");
      cy.wait(2000);
      cy.get('#user_password').type("Sysfort@2021");
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(10000);
      cy.get('.dropdown-header').click();
      cy.wait(2000);
      cy.get('[data-model="admin_match"] > .pjax').click();
      cy.wait(2000);
      cy.get(':nth-child(1) > .last > .inline > .edit_member_link > .pjax')
      .should('have.attr', 'href')
      .then((href) => {
        cy.visit(href)
      })
      cy.wait(2000);
      cy.get('.ra-multiselect-left > .wrapper > .form-control').select("154"); //select medical expert
      cy.get('.ra-multiselect-center > .ui-icon-circle-triangle-e').click(); //push it tonext column
      cy.wait(1000);
      cy.get('#admin_match_organization_complete').click(); //org complete checkbox
      cy.wait(1000);
      cy.get('#admin_match_match_ready').click();  //mtches ready checkbox
      cy.wait(1000);
      cy.get('.btn-primary').click(); //save
      cy.wait(5000);
      cy.get('a > .label').click(); // logout
      cy.wait(5000);

  })



//select expert claim consultant side
 it("select expert claim consultant side",()=>{

     cy.visit("https://hoot-web-staging.herokuapp.com/"); 
     cy.wait(5000);
     cy.get("#emailAddress").type("sysfort05+cc-test-01@gmail.com");
     cy.wait(2000);
     cy.get("#passwordConfirmation").type("Sysfortcc@2021");
     cy.wait(2000);
     cy.get(".btn").click();
     cy.wait(13000);
     cy.get('li:nth-child(1) > .block > .flex').click(); //row 1
     cy.wait(15000);
     cy.get('#tooltipTrigger').click(); //select expert button
     cy.wait(2000);
     cy.get('#confirmProfessionalButton').click(); //confirmation modal
     cy.wait(20000);
     cy.get('#headerLogoutLink').click(); // logout
     cy.wait(10000);

    })





it("medical expert side",()=>{
    
    cy.visit("https://hoot-web-staging.herokuapp.com/"); 
    cy.get("#emailAddress").type("sysforthoot14@gmail.com");
    cy.wait(3000);
    cy.get("#passwordConfirmation").type("Sysforth14@2022");
    cy.wait(3000);
    cy.get(".btn").click(); 
    cy.wait(60000);
    cy.get(".mt-20").click(); // view case
    cy.wait(3000);
    cy.get(":nth-child(5) > .mb-20").click(); // accept case review btn
    cy.wait(3000);
    cy.get('#confirmationModalConfirmationButton').click(); // confirmtaion of accept case
    cy.wait(40000);
    cy.get(".my-20 > .btn").click(); // schedule time check id
    cy.wait(15000);
    cy.get(".close > img").click(); // tutorial modal
    cy.wait(3000);
    //availability      .close > img
    cy.get(".fc-next-button > .fc-icon").click(); // calendars next btn
    cy.wait(3000);
    cy.get(".fc-next-button > .fc-icon").click(); //calendars next btn
    cy.wait(3000);
    cy.get(".fc-day-wed > .fc-daygrid-day-frame > .fc-daygrid-day-events").click(); //wed
    cy.wait(3000);
    cy.get(".fc-day-thu > .fc-daygrid-day-frame > .fc-daygrid-day-events").click(); //thu
    cy.wait(3000);
    cy.get(".fc-day-fri > .fc-daygrid-day-frame > .fc-daygrid-day-events").click(); //fri
    cy.wait(4000);
    cy.xpath("(//button[@type='button'])[6]").click(); 
    cy.wait(5000);
    cy.get('#reviewAvailabilityButton').click(); //submit your avaliablity btn 
    cy.wait(10000);
    cy.get('#submitAvailabilityButton').click();
    cy.wait(20000);
    cy.get('#headerLogoutLink').click(); //logout
    cy.wait(10000);
    


    //llgin to cc for close out case 

    cy.get("#emailAddress").type("sysfort05+cc-test-01@gmail.com");
    cy.wait(3000);
    cy.get("#passwordConfirmation").type("Sysfortcc@2021");
    cy.wait(3000);
    cy.get(".btn").click();
    cy.wait(16000);
    cy.get('li:nth-child(1) > .block > .flex').click(); // 1st row
    //cy.xpath("(//button[@type='button'])[5]").click();
    cy.wait(16000);
    cy.get('.my-20 > .btn').click(); // schedule a reviee call
    cy.wait(2000);
    cy.get('.close > img').click(); //close tutorial  modal
    cy.wait(5500);
    cy.get(".p-15").click(); //date picker
    cy.wait(3000);
    // cy.get(".react-datepicker__navigation").click(); //next month
    // cy.wait(3000);
    cy.get(':nth-child(5) > .react-datepicker__day--030').click(); //selct date
    cy.wait(3000);
    cy.get('.rc-time-picker-input').click();//time picker 
    cy.wait(3000);
    cy.get('.rc-time-picker-panel-input').type("11:15am"); // type time
    cy.wait(3000);
    cy.get('.flex > .btn-tertiary').click(); //schedule call via zoom
    cy.wait(3000);
    cy.get('.modal-body > .btn-secondary').click(); //confirmation button
    cy.wait(45000);
    cy.get(':nth-child(4) > .btn').click(); //close out case
    cy.wait(3000);
    cy.get('.checkbox > .svg-inline--fa').click(); //confirmation checkbox on modal
    cy.get('#closeReviewConfirmationButton').click(); //confirmation button on modal of close case
    cy.wait(9500);
    cy.get('#headerLogoutLink').click(); // logout
   



   
   
   
  

})
});
