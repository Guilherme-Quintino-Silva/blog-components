class CardComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.elements());
    shadow.appendChild(this.style());
  }

  elements() {
    const elementsRoot = document.createElement("div");
    elementsRoot.setAttribute("class", "card");

    //Card Esquerdo.
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");
    const title = document.createElement("h2");
    title.textContent = this.getAttribute("title");

    const paragraphy = document.createElement("p");
    paragraphy.textContent = this.getAttribute("content");

    cardLeft.appendChild(title);
    cardLeft.appendChild(paragraphy);
    elementsRoot.appendChild(cardLeft);

    //Card Direito.
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");
    const image = document.createElement("img");
    image.src = this.getAttribute("image");
    cardRight.appendChild(image);

    elementsRoot.appendChild(cardRight);

    return elementsRoot;
  }
  style() {
    const styleRoot = document.createElement("style");
    styleRoot.textContent = `
    .card {
        width: 100%;
        margin: 20px 0;
        display: flex;
        justify-content: space-evenly;
        box-shadow: 13px 0px 58px -7px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
        background: white;
      }
    .card__left {
        width: 75%;
        padding: 20px;
    }
    .card__right {
        width: 25%;
    }
    .card__right > img {
        width: 100%;
        object-fit: cover;
        height: 236px;
    }
    `;
    return styleRoot;
  }
}
customElements.define("card-component", CardComponent);
