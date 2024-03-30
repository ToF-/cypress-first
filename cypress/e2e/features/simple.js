
const assert = require('assert')
const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps')


When("I look for the site {string}", (site) => {
        cy.visit(site);
});

Then('I should see a page containing {string}', (text) => {
    cy.contains(text);
});
