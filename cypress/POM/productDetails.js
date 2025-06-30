class productDetails {
    elements = {
        firstItem: () => cy.get('a[id="item_4_title_link"] div[class="inventory_item_name "]'),
        confirmDetailPage: () => cy.get('.inventory_details_name.large_size'),
        filterBtn: () => cy.get('.product_sort_container'),
        lowestPrice: () => cy.get('div[class="inventory_list"] div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1)')
    }

    clickProduct() {
        this.elements.firstItem().click();
    }

    confirmDetail() {
        return this.elements.confirmDetailPage();
    }

    clickFilter() {
        return this.elements.filterBtn();
    }

    filterResult() {
        return this.elements.lowestPrice();
    }
}

module.exports = new productDetails();

