@addToCart
Feature: Fabelio - add to cart

    I want to add product into my cart

    Background: As an user, i can open fabelio home page
        Given I go to the Fabelio home page

    Scenario: As an user, i can search the product by general name of the product
        When I search product using general name on search product field
        Then I see the product search result page
        And I choose the product and i click add to cart
        Then I see my product on cart

    Scenario: As an user, i can search the product by Specific name of the product
        When I search the product with specific name on search product field
        Then I see the product detail page
        And I click add to cart
        Then I see my product on cart


    #scenarios with Gherkin

    @answerNumber7

    Scenario: As an user, i want to login using valid account
        Given I go to Fabelio login page
        When I input valid email and password
        And I click login button
        Then I success login and i go to home page

    Scenario: As an user, i can't login using invalid account
        Given I go to Fabelio login page
        When I input invalid email or password
        And I click login button
        Then I can see warning message
