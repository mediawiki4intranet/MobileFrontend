@en.m.wikipedia.beta.wmflabs.org @en.m.wikipedia.org @test2.m.wikipedia.org
Feature: Login required for Uploads

  Scenario: Login for uploads
    Given I am not logged in
      And I am on the "Main Page" page
    When I click on "Uploads" in the main navigation menu
    Then I receive upload message "Media on Wikipedia is donated by people like you"
      And I receive upload message "Log in to share your media"

