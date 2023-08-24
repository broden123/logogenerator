class shape {
  constructor() {
    setColor(colorChoice) {
      this.color = colorChoice;
    }
  }
}

class square extends shape {
  render() {
    return `<rect x="20" y="20" width="150" height="150" fill="${this.color}" />`;
  }
}

class triangle extends shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class circle extends shape {
  render() {
    return `<circle cx="150" cy="125" r="50" fill="${this.color}" />`;
  }
}

module.exports = { square, triangle, circle };