describe("Verify if trending animes are loading", () => {

    it("Load at least 1 trend anime", () => {
        cy.visit("http://localhost:3000/");
        cy.get(".card-serie").first().should("be.visible")
    });

    it("Verifys if anime poster are loaded", () => {
        cy.get(".poster-image").first().should("be.visible")
    });

    it("Verifys if anime title are loaded", () => {
        cy.get(".card-datail").first().should("be.visible")
    });

});
describe("Verifys if seach anime feature is working", () => {
    it("Verifys if anime title are loaded", () => {
        cy.get('h2').within(() => {
            cy.get('input').type('One Piece')
        })
        cy.get('.animes-list').should("be.visible")
    });
});