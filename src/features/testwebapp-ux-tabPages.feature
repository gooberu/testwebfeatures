Feature: GooberU UX Portal taskPage Check Test
    As a GooberU Community User
    I want various GooberU-Portal UX pages for tasks
    So I learn and reuse a consistant UX for various GooberU-Portal tasks

    Scenario: GooberU-PortalCheck Hardcode
        Given I open the url "http://localhost:3000"
        Then  I expect that the url is "http://localhost:3000/"
        And   I expect that the title is "GooberU App"

   Scenario Outline: GooberU-PortalCheck tab Pages
       Given I open the url "<url>"
       Then  I expect that the url is "<url>"
       And   I expect that the title is "<title>"
       Then  I expect that button "<button>" contains the text "<buttonText>"

    Examples:
        | url | title | button | buttonText |
        | https://github.com/gooberu/testwebfeatures | GitHub - gooberu/testwebfeatures: Test Cucumber DSL for testwebapp | summary[class='btn btn-sm btn-primary'] | Clone or download |
        | http://localhost:3000/  | GooberU App | div[class='ui huge white inverted button'] | Goober yoUr Subject |
        | http://localhost:3000/subjects  | GooberU App | a[href='/subjects'] | Subjects |
        | http://localhost:3000/test  | GooberU App | button[class='ui teal button'] | Open Modal |
