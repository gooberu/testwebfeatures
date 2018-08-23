
Feature: Performing a github Search

    As a user on the github search page
    I want to search for WebdriverIO
    Because I want to learn more about it

    Background:

        Given I am on the github page

    Scenario: Performing a github search

        Given I see the github search box
        When I enter "webdriverIO" into the github search box
# githubexample.dsl debug tools
#        And I pause for "3" seconds
#        And I goto the debug command
        And  I hit the "Return" key
        Then I should see a list of github search results
