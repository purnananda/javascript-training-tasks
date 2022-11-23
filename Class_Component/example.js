class Rectangle {
    getArea(height, width) {
        return height * width;
    }
}
const obj = new Rectangle();
console.log("Area is : ", obj.getArea(20, 30));
