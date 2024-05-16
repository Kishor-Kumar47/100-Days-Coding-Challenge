/// Day 21, Q#63///
//                                   ///Kishor Kumar///
type shape = {
    kind: "circle" | "Rectangle",
    Radius?: number,  // for circle
    width?: number,  //for rectangle
    height?: number   //for rectangle
}

// describe the circle//
let circle : shape = {
    kind : "circle",
    Radius: 8,
}

// describe the Rectangle//
let rectangle : shape = {
    kind : "Rectangle",
    width: 10,
    height:25,
}
// show the shapes//
console.log(circle)
console.log(rectangle)


