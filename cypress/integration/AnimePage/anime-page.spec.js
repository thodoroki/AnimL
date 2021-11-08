describe("Verify if anime page are loading", ()=>{

    it("Load at least 1 trend anime",()=>{ 
        cy.visit("http://localhost:3000/anime/1555");
        cy.get("h1").first().should("be.visible")
    });

    it("Verifys if anime poster are loaded",()=>{ 
        cy.get("img").first().should("be.visible")
    });

    it("Verifys if anime title are loaded", ()=>{ 
        cy.get(".info").should("be.visible")
    });

});