const num1 = 1;
var date =new Date();
var current_date = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
var keyword = current_date+'-cy-testing';
var only_date = date.getDate();
var current_day = date.getDate() + num1;
describe('Peer review', function(){
  it('Peer review Frontend',function(){
      cy.visit("https://hoot-web-staging.herokuapp.com/"); 
      cy.get("#emailAddress").type("sysfort05+peer-review-tester-001@gmail.com");
      cy.wait(2000);
      cy.get("#passwordConfirmation").type("Sysfortpeer_2022");
      cy.wait(2000);
      cy.get(".btn").click();
      cy.wait(23000);
      cy.get('#ccNewPeerReviewButton').click();
      cy.wait(1000);
      cy.contains('Select...').type('Professional{enter}');
      cy.wait(1000);
      cy.get('#peerReviewConfirmTypeButton').click(); // confirm button
      // cy.wait(2000);
      cy.get('#reviewNumber',{timeout:3000}).type(keyword,{delay:0});
      // cy.wait(2000);
      cy.get('#reviewTitle',{timeout:3000}).type(keyword,{delay:0});
      // cy.wait(2000);
      cy.get('#peerReviewDescription',{timeout:3000}).type(keyword,{delay:0});
      // cy.wait(2000);
      cy.clock();
      cy.tick(5000);
      cy.get('.react-datepicker__input-container > .text-lg',{timeout:6000}).click({delay:0}).type('{enter}');
      // cy.wait(1000);
      
      // cy.contains(only_date,{timeout:2000}).click({delay:0});
      // cy.wait(2000);
      cy.tick();
      cy.get('#incidentDescription',{timeout:1000}).type(keyword,{delay:0});
      // cy.wait(2000);
      cy.get('#listedConcerns',{timeout:1000}).type(keyword,{delay:0});
      // cy.wait(2000);
      cy.contains('Select...',{timeout:3000}).type('{enter}',{delay:0});
      // cy.wait(2000);
      cy.clock().invoke('restore');
      cy.get('#requestedExpertDescription',{timeout:7000}).type(keyword,{delay:0});
      // cy.wait(2000);
      
      cy.get('#reviewConflictDescription',{timeout:7000}).type(keyword,{delay:0});
      // cy.wait(2000);
      // cy.get('#hospitalName',{timeout:7000}).type(keyword,{delay:0});
      // cy.wait(2000);
      // cy.get('#hospitalZipCode',{timeout:7000}).type("74859",{delay:0});
      // cy.wait(2000);
      // cy.get('#internalNotes',{timeout:7000}).type(keyword,{delay:0}); 
      // cy.wait(2000);
      // cy.clock();
      
      cy.get('#newPeerReviewSubmitButton').click(); // submit form
      cy.wait(50000);
      cy.get('.checkbox > .svg-inline--fa').click(); // checkbox
      cy.wait(2000);
      cy.get('#peerReviewSubmitRedactedRecordsButton').click();// confirm redacted record
      cy.wait(3000);
      
      
      const p = 'testing.pdf';
      cy.get('#upload-peer-review-file-input').attachFile(p);
      cy.wait(25000);
      cy.get('#peerReviewMatchWithExpertsButton').click();
      cy.wait(5000);
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
      cy.get('[data-model="admin_match"] > .pjax').click(); // admin matches
      cy.wait(3000);
      
   
      cy.get(':nth-child(1) > .last > .inline > .edit_member_link > .pjax')
          .should('have.attr', 'href')
          .then((href) => {
            cy.visit(href)
          });
      cy.wait(3000);
      // cy.get('#peer_review_status').select('pending_expert_match');
      //   // cy.get("#react-select-3-input").should("have.value","apple");
      // cy.get('#peer_review_status_field > .col-sm-10 > .input-group > .form-control').clear().type('pending_expert_match');
      // cy.get('#peer_review_status_field > .col-sm-10 > .input-group > .form-control')
      //       .clear()
      //       .type('pending_expert_match')
      //       .type('{downArrow}');
      //     //   .type('{enter}');
      // cy.wait(2000);

    
      cy.get('.ra-multiselect-left > .wrapper > .form-control').select("154"); //select medical expert
      cy.get('.ra-multiselect-center > .ui-icon-circle-triangle-e').click(); //push it tonext column
          
      cy.wait(8000);
      cy.get('#admin_match_match_ready').click();
      cy.wait(1000);
      // cy.get('#peer_review_expert_recommendation_ids_field > .col-sm-10 > .ra-multiselect > .ra-multiselect-center > .ui-icon-circle-triangle-e').click();
      // cy.wait(7000);
      cy.get('.btn-primary').click();

  })

  it("select expert claim consultant side",()=>{

      cy.visit("https://hoot-web-staging.herokuapp.com/"); 
      cy.wait(5000);
      cy.get("#emailAddress").type("sysfort05+peer-review-tester-001@gmail.com");
      cy.wait(2000);
      cy.get("#passwordConfirmation").type("Sysfortpeer_2022");
      cy.wait(2000);
      cy.get(".btn").click();
      cy.wait(25000);
      cy.get('li:nth-child(1) > .block > .flex').click(); //row 1
      cy.wait(15000);
      cy.get('#selectExpertButton').click(); //select expert button
      cy.wait(2000);
      cy.get('#confirmProfessionalButton').click(); //confirmation modal
      cy.wait(15000);
      cy.get('#headerLogoutLink').click(); // logout
      cy.wait(10000);




    cy.get("#emailAddress").type("sysforthoot14@gmail.com");
    cy.wait(2000);
    cy.get("#passwordConfirmation").type("Sysforth14@2022");
    cy.wait(2000);
    cy.get(".btn").click(); 
    cy.wait(45000);
    cy.get(":nth-child(1) > :nth-child(1) > :nth-child(2) > .mt-20").click(); // view case
    cy.wait(2000);
    cy.get(":nth-child(3) > .mb-20").click(); // accept case review btn
    cy.wait(2000);
    cy.get('#confirmationModalConfirmationButton').click(); // confirmtaion of accept case
    cy.wait(13000);
    cy.get('#headerLogoutLink').click() // logout
    cy.wait(10000);
  
    cy.get("#emailAddress").type("sysfort05+peer-review-tester-001@gmail.com");
    cy.wait(2000);
    cy.get("#passwordConfirmation").type("Sysfortpeer_2022");
    cy.wait(2000);
    cy.get(".btn").click();
    cy.wait(25000);
    cy.get('li:nth-child(1) > .block > .flex').click(); //row 1
    cy.wait(15000);
    cy.get('.order-lg-2 > :nth-child(3) > .btn').click(); // order call
    cy.wait(3000);
    cy.get('#headerLogoutLink').click() // logout
    cy.wait(10000);
    cy.get("#emailAddress").type("sysforthoot14@gmail.com");
    cy.wait(2000);
    cy.get("#passwordConfirmation").type("Sysforth14@2022");
    cy.wait(2000);
    cy.get(".btn").click(); 
    cy.wait(15000);
    cy.get(':nth-child(1) > :nth-child(2) > .mt-8 > .btn').click();
    cy.wait(7000);

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
    cy.get('#reviewAvailabilityButton').click(); //review your avaliablity btn 
    cy.wait(5000);
    cy.get('#submitAvailabilityButton').click(); // submit availabilty
    cy.wait(7000);
    cy.get('#headerLogoutLink').click(); //logout
    cy.wait(10000);


  //llgin to cc for close out case 

    cy.get("#emailAddress").type("sysfort05+peer-review-tester-001@gmail.com");
    cy.wait(2000);
    cy.get("#passwordConfirmation").type("Sysfortpeer_2022");
    cy.wait(2000);
    cy.get(".btn").click();
    cy.wait(15000);
    cy.get('li:nth-child(1) > .block > .flex').click(); // 1st row
    //cy.xpath("(//button[@type='button'])[5]").click();
    cy.wait(15000);
    cy.get('.my-20 > .btn').click(); // schedule a reviee call
    cy.wait(18000);
    cy.get('.flex > .btn').click(); //close tutorial  modal
    cy.wait(2000);
    cy.get('.btn-primary').click(); // next button
    cy.wait(2000);
    cy.get('.btn-primary').click(); // finish
    cy.wait(5000);
    cy.get(".p-15").click(); //date picker
    cy.wait(2000);
    // cy.get(".react-datepicker__navigation").click(); //next month
    // cy.wait(2000);
    cy.get(':nth-child(2) > .react-datepicker__day--00'+current_day).click(); //selct date
    cy.wait(2000);
    cy.get('.rc-time-picker-input').click();//time picker 
    cy.wait(2000);
    cy.get('.rc-time-picker-panel-input').type("11:15am"); // type time
    cy.wait(2000);
    cy.get('.flex-none > .btn').click(); //schedule call via zoom
    cy.wait(2000);
    cy.get('.modal-body > .btn-secondary').click(); //confirmation button
    cy.wait(25000);
    cy.get('#peerReviewCloseOutButton').click(); // closing out the case
    cy.wait(7000);
    cy.get('.mb-3.flex > .flex > .flex-grow').click();
    cy.wait(2000);
    cy.get('#peerReviewCloseButton').click();
    cy.wait(10000);
    cy.get('#customStars > :nth-child(5)').click();
    cy.wait(2000);
    cy.get('#rateUserSubmitButton').click();
    cy.wait(5000);
    cy.get('#headerLogoutLink').click(); // logout
    cy.wait(10000);

})
})