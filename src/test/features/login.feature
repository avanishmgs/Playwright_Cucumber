Feature: login page validation

  @regression @greenkart
  Scenario: login page with valid credentials
    Given providing valid url for login
    When providing valid username and password
    Then clicking login button

  @smoke 
  Scenario: login page with valid credentials
    Given providing valid url for login
    When providing valid username and password
    Then clicking login button
