/// 

// import { times } from "cypress/types/lodash";

// const { times } = require("cypress/types/lodash");

describe('cc-app-test 1', () => {
      
    it("open the hoot medplus login page 1",()=>{
      
      cy.visit("https://hoot-web-staging.herokuapp.com/");  
         cy.get("#emailAddress").type("sysfort05+byod-tester-001@gmail.com");
         cy.wait(2000);
         cy.get("#passwordConfirmation").type("Sysfortbyod@2022");
         cy.wait(2000);
         cy.get(".btn").click();
         cy.wait(13000);
         cy.visit("https://hoot-web-staging.herokuapp.com/new/setup");
         cy.wait(10000);
         cy.get("#claimNumber").type("1-06-cy-testing");
         cy.wait(2000); 
         cy.get("#claimantLastName").type("1-06-cy-testing");
         cy.wait(2000);
         cy.get("#insured").type("1-06-cy-testing");
         cy.wait(2000);
         cy.get('#externalExpert').click();
         cy.wait(1000);
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
         cy.get(":nth-child(11) > .btn").click(); // continue to step 2
         cy.wait(7000);
         cy.contains('Select...').type('expertOpport {enter}');
         cy.wait(2000);
         cy.get("#caseType").type("1-06-cy-testing");
         cy.wait(2000);
         cy.get("#injuryType").type("1-06-cy-testing");
         cy.wait(2000);
         cy.get("#zipCode").type("45678");
         cy.wait(2000);
  
         cy.get("#shortDescription").type(" 1-06-cy-testing description");
         cy.wait(2000);
         cy.get("#questionsForExpert").type("1-06-cy-testing questions foe exper");
         cy.wait(2000);
         cy.get(".row-start-1").click(); //contiue to step 3
         cy.wait(15000);
  
        //  cy.get(":nth-child(2) > .bg-smurf-butt").click(); //yes for medical record
        //  cy.wait(30000);
        //  cy.get(".w-full > span").click(); //Click here to select Organized Medical Records for Upload
        //  cy.wait(30000);
         cy.get("#organizationRequested").click();
         cy.wait(2000);
         cy.get(".row-start-1").click(); // continue to step 4
         cy.wait(2000);
         cy.get(".btn-primary").click(); // submit order
         cy.wait(10000);
         const p = 'testing.pdf';
         cy.get('#file-input').attachFile(p);
         cy.wait(25000);
         cy.get('.order-lg-2 > .mt-20').click(); //invite your own ME
         cy.wait(2000);
         cy.get(':nth-child(2) > .btn').click();
         cy.wait(2000);
         cy.contains('Select...').type('byod-me-4 {enter}');
         cy.wait(2000);
         cy.get('#existingExpertInviteMessage').type('This is invitation message').click();
         cy.wait(2000);
         cy.get('.modal-body > form > .btn').click();
         cy.wait(5000);
        cy.get('.hidden > :nth-child(4) > .cursor-pointer').click(); // logout
        cy.wait(10000);
    
  
    })
  

  
  it("medical expert side",()=>{
      
      cy.visit("https://hoot-web-staging.herokuapp.com/"); 
      cy.get("#emailAddress").type("sysforthoot12@gmail.com");
      cy.wait(2000);
      cy.get("#passwordConfirmation").type("Sysfort@2022");
      cy.wait(2000);
      cy.get(".btn").click(); 
      cy.wait(50000);
      cy.get(".mt-20").click(); // view case
      cy.wait(3000);
      cy.get(':nth-child(3) > .mb-20').click();
      cy.wait(3000);
      cy.get(':nth-child(7) > .mb-20').click();
      cy.wait(20000);
      cy.contains('Set Your Preferred Call Times').click(); // set preferred call times
     
      
      cy.wait(13000);
      cy.get('.flex > .btn').click();
      cy.wait(3000);
      cy.get('.flex > .btn-primary').click();
      cy.wait(3000);
      cy.get('.flex > .btn-primary').click();
      cy.wait(3000);
    //   cy.get(".my-20 > .btn").click(); // schedule time check id
    //   cy.wait(15000);
    //   cy.get(".close > img").click(); // tutorial modal
    //   cy.wait(2000);
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
      cy.get(".bg-white > .justify-content > .flex-none > .btn").click(); //submit your avaliablity btn 
      cy.wait(10000);
      cy.get(":nth-child(4) > .cursor-pointer").click(); //logout
      cy.wait(10000);
      
  
  
      //llgin to cc for close out case 
  
      cy.get("#emailAddress").type("sysfort05+byod-tester-001@gmail.com");
      cy.wait(2000);
      cy.get("#passwordConfirmation").type("Sysfortbyod@2022");
      cy.wait(2000);
      cy.get(".btn").click();
      cy.wait(15000);
      cy.get('li:nth-child(1) > .block > .flex').click(); // 1st row
      //cy.xpath("(//button[@type='button'])[5]").click();
      cy.wait(15000);
      cy.contains('Schedule Review Call').click(); // schedule a reviee call
      cy.wait(18000);
      cy.get('.close > img').click(); //close tutorial  modal
      cy.wait(5000);
      cy.get(".p-15").click(); //date picker
      cy.wait(3000);
      cy.get(".react-datepicker__navigation").click(); //next month
      cy.wait(3000);
      cy.get(":nth-child(1) > .react-datepicker__day--001").click(); //selct date
      cy.wait(3000);
      cy.get('.rc-time-picker-input').click();//time picker 
      cy.wait(3000);
      cy.get('.rc-time-picker-panel-input').type("11:15am"); // type time
      cy.wait(3000);
      cy.get('.bg-zoom').click(); //schedule call via zoom
      cy.wait(3000);
      cy.get('.modal-body > .btn-secondary').click(); //confirmation button
      cy.wait(29000);
      cy.contains('Close Out Case Review').click(); //close out case
      cy.wait(3000);
      cy.get('#isTermsAgreed').click(); //confirmation checkbox on modal
      cy.get('.uaTrack-btn-confirm').click(); //confirmation button on modal of close case   
      cy.wait(10000);
      cy.get('[data-index="4"]').click();
      cy.wait(3000);
      // cy.get('#\31 val-comment').type('This is comment');
    
      cy.get('.btn').click();
      cy.wait(5000);
      cy.get('.hidden > :nth-child(4) > .cursor-pointer').click(); // logout
  
  
     
     
     
    
  
  })
  });
  
