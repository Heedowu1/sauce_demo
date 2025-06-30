Feature: CheckOut

    Items added to cart can be checked out 

    Scenario: Successful checkout
    Given A user is logged in
    And the user adds item to cart
    And the user clicks on Cart button
    When the user proceeds to check out
    And enters firstname "Lorem", lastname "Ipsum", and postalcode "101233"
    And clicks continue
    And checkout description page should be visible
    And user clicks finish
    Then a success page should be displayed

    Scenario: Cancel checkout
    Given A user has items in cart
    When clicks on cart
    Then the user clicks on cancel button to continue shopping

    Scenario: Missing Field Error Message
    Given A user has clicked checkout button
    When user enters firstname "mary" and lastname "j" and postalcode ""
    And user clicks continue
    Then an error message should be displayed