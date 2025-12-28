Feature: login with valid credentials

  @smoke @greenkart
  Scenario: login using environment credentials
    Given providing valid url for login
    When providing valid username and password
    Then clicking login button
