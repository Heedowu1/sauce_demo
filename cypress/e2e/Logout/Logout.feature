Feature: Logout

    Through this feature, users should be able to logout

    Scenario: Successful logout
    Given a user is logged in
    When when the user clicks on the hamburger
    And user clicks on logout button
    Then user should be redirected to login page