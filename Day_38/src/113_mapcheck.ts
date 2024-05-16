//.................................................Day38, Q#113........................//
//                                                           ///Kishor Kumar//
const countMap = new Map<string, string>();

countMap.set("Pakistan", "Islamabad"); // adding in map
countMap.set("Canada", "Ottawa"); // adding in map
countMap.set("China", "Beijing");  // adding in map
countMap.set("France", "Paris");   // adding in map


console.log(countMap);

function checkMap (countMap: Map<string, string>):void{

    if(countMap.has("China")){
        console.log(`The capital of China is ${countMap.get("China")}`);
        
    }else{
        console.log("China is not in the map.");
        
    }
}

checkMap(countMap);

