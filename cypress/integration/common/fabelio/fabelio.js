import {
    Then,
    Given,
    When,
    given
} from 'cypress-cucumber-preprocessor/steps'

const data = require('../../../fixtures/data_search_product.json')
const data1 = require('../../../fixtures/data_product.json')

const quantityOnCart = 'span[class="counter-number"]'

Given(`I go to the Fabelio home page`, () => {
    cy.visit(Cypress.env('URL_QA'))
})

data.forEach(function (dataRow) {
    const dataTable = {
        searchProduct: dataRow.productSearch,
        productName: dataRow.productName
    };

    const searchField = 'input[class="input-text"]'
    const searchResult = 'span[data-ui-id="page-title-wrapper"]'
    const productName = 'ol[data-list="Category - Fabelio Category Tree"]'
    const chooseProduct = 'div[title="Cessi Dining Chair"]'
    const productInfo = 'div[class="product-info-main"]'
    const productPriceInfo = 'div[class="price-box price-final_price"]'
    const buttonBuyNow = 'button[id="product-addtocart-button"]'

    When(`I search product using general name on search product field`, () => {
        cy.get(searchField)
            .type(dataTable.searchProduct)
            .type('{enter}')
    })

    Then(`I see the product search result page`, () => {
        cy.get(searchResult)
        cy.get(productName).should(element => {
            expect(element.text()).to.contain(dataTable.productName)
        })
        cy.get(chooseProduct)
            .click()
    })

    And(`I choose the product and i click add to cart`, () => {
        cy.get(productInfo)
        cy.get(productPriceInfo)
        cy.get(buttonBuyNow)
            .click()
    })

})

Then(`I see my product on cart`, () => {
    cy.get(quantityOnCart)
})

data1.forEach(function (data1Row) {
    const dataTable1 = {
        productName: data1Row.productName
    };

    const searchField = 'input[class="input-text"]'
    const productInfo = 'div[class="product-info-main"]'
    const productPriceInfo = 'div[class="price-box price-final_price"]'
    const buttonBuyNow = 'button[id="product-addtocart-button"]'

    When(`I search the product with specific name on search product field`, () => {
        cy.get(searchField)
            .type(dataTable1.productName)
            .type('{enter}')
    })

    Then(`I see the product detail page`, () => {
        cy.get(productInfo)
        cy.get(productPriceInfo)
    })

    And(`I click add to cart`, () => {
        cy.get(buttonBuyNow)
            .click()
    })

})