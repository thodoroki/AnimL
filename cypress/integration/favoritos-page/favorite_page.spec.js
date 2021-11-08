describe("Verify if favorites animes are loading", ()=>{

    it("Load at least 1 trend anime",()=>{ 
        cy.visit("http://localhost:3000/favorites");
        cy.get(".card-serie").first().should("be.visible")
    });

    it("Verifys if anime poster are loaded",()=>{ 
        cy.get(".poster-image").first().should("be.visible")
    });

    it("Verifys if anime title are loaded", ()=>{ 
        cy.get(".card-datail").first().should("be.visible")
    });

});