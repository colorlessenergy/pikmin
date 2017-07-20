const buttonContainer = document.querySelector("#buttons-container");

class Pikmin {
  constructor () {
    this.title = document.querySelector("#title");
    this.text = document.querySelector("#text");
    this.link = document.querySelector("#link");
    this.image = document.querySelector("#image");

    this.pikmin = [
      new Buttons("red"),
      new Buttons("blue"),
      new Buttons("yellow"),
      new Buttons("purple"),
      new Buttons("white")
    ];

    this._render = this._render.bind(this)

    document.addEventListener("button-click", this._render)
  }

  _render(event) {
    this.title.textContent = Pikmins[event.detail.pikmin].title;
    this.text.textContent = Pikmins[event.detail.pikmin].text;
    this.image.src = Pikmins[event.detail.pikmin].img;
    this.link.href = Pikmins[event.detail.pikmin].link;
  }
}

class Buttons {
  constructor (color) {
    this.color = color
    this.createButton = document.createElement("button");

    this._buttonValue = this._buttonValue.bind(this);

    this.createButton.textContent = this.color
    this.createButton.addEventListener("click", this._buttonValue);
    buttonContainer.appendChild(this.createButton);
  }

  _buttonValue() {
    const eventColor = {
      pikmin: this.color
    };

    document.dispatchEvent(
      new CustomEvent('button-click', {
        detail: eventColor
      })
    )
  }
}

new Pikmin();
