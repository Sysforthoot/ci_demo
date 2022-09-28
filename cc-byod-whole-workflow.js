/// 

// import { times } from "cypress/types/lodash";

// const { times } = require("cypress/types/lodash");
var date =new Date();
var current_date = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
var keyword = current_date+'-cy-testing';

describe('cc-app-test 1', () => {
      
    it("open the hoot medplus login page 1",()=>{
      
      cy.visit("https://hoot-web-staging.herokuapp.com/");  
         cy.get("#emailAddress").type("sysfort05+byod-tester-001@gmail.com");
         cy.wait(2000);
         cy.get("#passwordConfirmation").type("Sysfortbyod@2022");
         cy.wait(2000);
         cy.get(".btn").click();
         cy.wait(13000);
         cy.get('#newCaseLink').click();
        //  cy.wait(10000);
         cy.get("#claimNumber",{timeout:12000}).type(keyword,{delay:0});
        //  cy.wait(2000); 
         cy.get("#claimantLastName",{timeout:6000}).type(keyword,{delay:0});
        //  cy.wait(2000);
         cy.get("#insured",{timeout:3000}).type(keyword,{delay:0});
        //  cy.wait(2000);
         cy.get('.checkbox > .svg-inline--fa',{timeout:3000}).click({delay:0});
        //  cy.wait(1000);
        //  cy.wait(2000);
        //  cy.get("#externalExpert").click();
         
        // cy.get(".hoot__value-container").type("apple");
          // cy.get("#react-select-3-input").should("have.value","apple");
          //-----
        //  cy.get('#react-select-3-input',{ timeout: 10000 }).type('apple');
        //  cy.get("#react-select-3-option-0").click();
         //----
         cy.contains('Select...',{timeout:3000}).type('{enter}',{delay:0});
        //  cy.wait(1000);
       cy.get('#stepOneContinueButton',{timeout:3000}).click({delay:0}); // continue to step 2
         cy.wait(7000);
         cy.contains('Select...',{timeout:3000}).type('External Expert Test {enter}',{delay:0}); // external expert organisation 
        //  cy.wait(2000);
         cy.get("#caseType",{timeout:3000}).type(keyword,{delay:0});
        //  cy.wait(2000);
         cy.get("#injuryType",{timeout:3000}).type(keyword,{delay:0});
        //  cy.wait(2000);
         cy.get("#zipCode",{timeout:3000}).type("45678",{delay:0});
         cy.wait(2000);
  
         cy.get("#shortDescription").type(keyword);
         cy.wait(2000);
         cy.get("#questionsForExpert").type(keyword);
         cy.wait(2000);
       cy.get('#stepTwoSubmitButton').click(); //contiue to step 3
         cy.wait(15000);
  
        //  cy.get(":nth-child(2) > .bg-smurf-butt").click(); //yes for medical record
        //  cy.wait(30000);
        //  cy.get(".w-full > span").click(); //Click here to select Organized Medical Records for Upload
        //  cy.wait(30000);
        
         cy.get(".row-start-1").click(); // continue to step 4
         cy.wait(2000);
         cy.get(".btn-primary").click(); // submit order
         cy.wait(10000);
         const p = 'testing.pdf';
       cy.get('#uploadCaseFileInput').attachFile(p);
         cy.wait(35000);
         cy.get('.order-lg-2 > .mt-20').click(); //invite your own ME
         cy.wait(2000);
         cy.get(':nth-child(2) > .btn').click();
         cy.wait(2000);
         cy.contains('Select...').type('byod-me-3 {enter}');
         cy.wait(2000);
         cy.get('#existingExpertInviteMessage').type('This is invitation message').click();
         cy.wait(2000);
         cy.get('#externalExpertSelectCreateInviteButton').click();
         cy.wait(5000);
        
         cy.get('#headerLogoutLink').click(); // logout
        cy.wait(10000);
    
  
    })
  

  
  it("medical expert side",()=>{
      
      cy.visit("https://hoot-web-staging.herokuapp.com/"); 
      cy.get("#emailAddress").type("sysforthoot11@gmail.com");
      cy.wait(2000);
      cy.get("#passwordConfirmation").type("Sysfort@2022");
      cy.wait(2000);
      cy.get(".btn").click(); 
      cy.wait(50000);
      cy.get(".mt-20").click(); // view case
      cy.wait(10000);
      
      cy.contains('Set Your Preferred Call Times').click(); // set preferred call times
     
      
      cy.wait(13000);
      cy.get('#availabilityModalNextTwoButton').click();
      cy.wait(3000);
      cy.get('#availabilityModalNextThreeButton').click();
      cy.wait(3000);
      cy.get('#availabilityModalFinishButton').click();
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
      cy.get('#reviewAvailabilityButton').click(); //submit your avaliablity btn 
      cy.wait(10000);
      cy.get('#submitAvailabilityButton').click();
      cy.wait(20000);
      cy.get('#headerLogoutLink').click(); //logout
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
      cy.contains("Schedule Review Call").click(); // schedule a reviee call
      cy.wait(18000);
      cy.get('.flex > .btn').click(); // next button
      cy.wait(3000);  
      cy.get('.flex > .btn-primary').click(); // next
      cy.wait(3000);
      cy.get('.flex > .btn-primary').click(); // finish
      cy.wait(3000); 
      
      
      cy.wait(5000);
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
      cy.get('.border-t > .flex-none > .btn').click(); //schedule call via zoom
      cy.wait(3000);
      cy.get('.modal-body > .btn-secondary').click(); //confirmation button
      cy.wait(29000);
      cy.contains('Close Out Case Review').click(); //close out case
      cy.wait(3000);
      cy.get('.checkbox > .svg-inline--fa').click(); //confirmation checkbox on modal
      cy.get('.uaTrack-btn-confirm').click(); //confirmation button on modal of close case   
      cy.wait(10000);
      cy.get('#customStars > :nth-child(5)').click();
      cy.wait(3000);
      // cy.get('#\31 val-comment').type('This is comment');
    
      cy.get('#rateUserSubmitButton').click();
      cy.wait(5000);
      cy.get('#headerLogoutLink').click(); // logout
  
  
     
     
     
    
  
  })
  });
  
