Feature: Product detail

    Through this page, users can see a product detail and sort products

    Scenario: View product detail
    Given A user is logged in
    When the user clicks on a item "Sauce Labs Backpack"
    Then the user should be redirected to the product detail page

    Scenario: Filter result
    Given User is logged in
    When the user clicks on filter button and select "Price (low to high)"
    Then filter result should have the product list form the lowest Price