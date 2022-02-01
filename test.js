class Bar {
  // eslint-disable-next-line class-methods-use-this
  static doStuff() {
    console.log('stuff')
  }
}

const b = new Bar()
b.doStuff() // "stuff"
