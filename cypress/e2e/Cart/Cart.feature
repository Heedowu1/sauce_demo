Feature: Cart

    Through this feature, users that are loggin in should be able to add or remove items from Cart

    Scenario: Add to Cart
    Given A user is logged in
    When The user adds first item to cart "Sauce Labs Backpack"
    When The user adds "Sauce Labs Bolt T-Shirt" to the Cart
    Then The cart badge should show "2"

    Scenario: Remove item from cart
    Given A user has added items to cart
    When A user removes first item from cart "Sauce Labs Backpack"
    When A user removes second item from cart "Sauce Labs Bolt T-Shirt"
    Then Cart badge should not be visible