class Rectangle {
  constructor (height, width) {
    this.height = height
    this.width = width
  }
  getArea () {
    return this.height * this.width
  }
}
const obj = new Rectangle(20, 30)
console.log('Area of Rectangle is : ', obj.getArea())
