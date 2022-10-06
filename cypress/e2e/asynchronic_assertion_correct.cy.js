/// <reference types="cypress" />

describe("Window confirm", () => {
  it("waits for window confirm to happen using spy", () => {
    cy.visit("index.html");
    cy.on("window:confirm", cy.stub().as("confirm"));

    cy.get("#click").click();
    // test automatically waits for the stub
    cy.get("@confirm").should("have.been.calledWith", "Are you sure?");
  });
});
