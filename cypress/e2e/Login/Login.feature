Feature: Login feature

    This is a feature to login into the app

    Scenario: Success login
    Given A user open the login page
    When A user input the username "standard_user"
    And A user enter the password "secret_sauce"
    And A user clicks on the login button
    Then A user will be logged in

    Scenario: Locked out user
    Given A user open the login page
    When A user input the username "locked_out_user"
    And A user enter the password "secret_sauce"
    And A user clicks on the login button
    Then User will get an error message