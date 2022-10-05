/// <reference types="cypress" />

describe("Window confirm", () => {
  it("calls window confirm", () => {
    cy.visit("index.html");
    cy.on("window:confirm", (message) => {
      expect(message).to.equal("Should falil");
    });

    cy.get("#click").click();
  });
});

it("waits for window confirm to happen using spy", () => {
  cy.visit("index.html");
  cy.on("window:confirm", cy.stub().as("confirm"));

  cy.get("#click").click();
  // test automatically waits for the stub
  cy.get("@confirm").should("have.been.calledWith", "Should fail");
});
