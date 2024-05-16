//............................................Day27, Q#81...............................................//
//                                                           ///Kishor Kumar///

// This function shows every detail about an object

function logObject (obj : object){
    for (let property in obj) {
        console.log(`${property} : ${obj [property]}`);
    }
}

logObject({make:"Toyota", model:"corolla",year:2021,color:"blue"});

