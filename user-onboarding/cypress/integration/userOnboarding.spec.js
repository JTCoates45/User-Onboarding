describe("Quotes App", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
    it("visiting webiste works", () => {
        cy.contains('Form')
    })

    const textInput = () => cy.get("input[type=text]");
   const passwordInput = () => cy.get("input[type=password]");
   const checkBox = () => cy.get("input[type=checkbox]");


    it("sanity check to make sure tests work", () => {
        
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); 
        expect({}).to.eql({}); 
      })  

      it("the proper elements are showing", () => {
        textInput().should("exist");
        passwordInput().should("exist");
        checkBox().should("exist");
        
      })

      describe("Filling out the inputs and cancelling", () => {
        it("can navigate to the site", () => {
          cy.url().should("include", "localhost");
        })

        
    })
    describe("Adding a new person", () => {
        it("can submit and delete a new quote"), () => {
              textInput().type("Web54 ROCKS!");
              passwordInput().type("realygoodpassowrd");
              checkBox().click();
        }
    
    })
    














})