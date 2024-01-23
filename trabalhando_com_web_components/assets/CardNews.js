class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode:"open"});
        
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const rootNode = document.createElement("div");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo-url") || "assets/default-photo.jpg";
        newsImage.alt = "Photo";

        cardRight.appendChild(newsImage);
    
        rootNode.appendChild(cardLeft);
        rootNode.appendChild(cardRight);

        return rootNode;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);