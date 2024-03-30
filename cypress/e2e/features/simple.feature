Feature: looking for a site

    Scenario: looking for a site
        When I look for the site "https://perdu.com"
        Then I should see a page containing "Pas de panique, on va vous aider"
