@WIP
Feature: Perform a GooberU Subject Search

    As an unauthenticated user on GooberU 
    I want to search for Subjects
    Because I want to find availible GooberU tutor

    Background:

        Given I am on the GooberU site "/subjects" page

    Scenario Outline: Performing a GooberU subject search

        Given I see the GooberU Subject search box
        When I enter "<search-text>" into the GooberU search box
# githubexample.dsl debug tools
#        And I pause for "3" seconds
#        And I goto the debug command
        Then I should see a list of GooberU search results

    Examples:
    | search-text | search-result-contains |
    | Under       | Underwater Basket Weaving- How to breathe underwater |