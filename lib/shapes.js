class shape {
  constructor() {
    this.color = "";
  }
  setColor(colorChoice) {
    this.color = colorChoice;
  }
}

class Square extends shape {
  render() {
    return `<rect x="20" y="20" width="150" height="150" fill="${this.color}" />`;
  }
}

class Triangle extends shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Circle extends shape {
  render() {
    return `<circle cx="150" cy="125" r="50" fill="${this.color}" />`;
  }
}

module.exports = { Square, Triangle, Circle };
