// Function to transform the distance from kilometer to meter
function seerToMon(seers) {
    var mon;
    //Testing if the input is number type
    if (typeof seers != "number") {
    return "quantity should be a number.";
    }
    //Testing if the input is negative
    else if (seers < 0 ) {
    return "quentity can not be negative.";
    }
    else {
    mon = seers * 0.025;
    return mon;
    }
    }
    //Function about calculating budget
    function totalSales(noOfShirt, noOfPant, noOfshoes) {
    var budget;
    var priceOfshirt = 100;
    var priceOfpant = 200;
    var priceOfshoes = 500;
    //Testing if the inputs are not number type
    if ((typeof noOfshirt != "number") || (typeof noOfpant != "number") || (typeof noOfshoes != "number")) {
    return "Quantities should be number.";
    }
    //Testing if the input are negative
    else if ((noOfshirt < 0) || (noOfpant < 0) || (noOfshoes < 0)) {
    return "Quantities can not be negative.";
    }
     //Testing if the inputs are fractional
     else if ((Math.round(noOfShirt) != noOfShirt) || (Math.round(noOfpant) != noOfpant) || (Math.round(noOfshoes) != noOfshoes)) {
     return "Quantities can not be fractional.";
     }
     else {
    budget = (noOfShirt*priceOfshirt) + (noOfPant*priceOfpant) + (noOfshoes*priceOfshoes);
    return budget;
    }
    }
    const totalTaka = totalSales(2, 3, 4);
    console.log(totalTaka);
   //Function about calculating carring cost
   function deliveryCost(noOfTshirts) {
   var totalCost;
   var costOfFirstHundred = 100;
   var costOfSecondHunded = 80;
   var costOfThirdHundredUp = 50;
   //Testing if the input is number type
   if (typeof noOfTshirts != "number") {
   return "No. of shirts should be a number.";
   }
   //Testing if the input is negative
   else if (noOfTshirts < 0 ) {
   return "No. of shirts can not be negative.";
   }
   //Testing if the input is fractional
   else if (Math.round(noOfTshirts) != noOfTshirts ) {
   return "No. of shirts can not be fractional.";
   }
   //Calculation of cost first hundred Tshirts
   else if (noOfTShirts <= 100) {
   totalCost = noOfTshirts*costOfFirstHundred;
   return totalCost;
   }
   //Calculation of cost upto two hundred Tshirts
   else if (noOfTShirts <= 200) {
   totalCost = (costOfFirstHundred*100) + (costOfSecondHunded*(noOfTshirts-10));
   return totalCost;
   }
   //Calculation of cost more than three hundred Tshirts
   else if (noOfTshirts > 200) {
   totalCost = (costOfFirstHundred*100) + (costOfSecondHunded*200) + (costOfThirdHundredUp*(noOfTshirts-200));
   return totalCost;
   }
   }    
   //Function about finding the perfect friend name
   function perfectFriend(namesOfFriends) {
    //Testing if input is not an array
    if (Array.isArray(namesOfFriends) == false) {
    return "Friends names should be an array.";
    }
    //Testing if input is an empty array
    else if (namesOfFriends.length == 0) {
    return "Friends names array should not be empty.";
    }
    else {
    var obtainedName = namesOfFriends[0];
    
    for (var i=0; i < namesOfFriends.length; i++) {
    //Testing if every element of array is string
    if (typeof namesOfFriends[i] != "string") {
    return "Every Friends name should be a string";
    }
    else {
    if (namesOfFriends[i].length = 5) {
    obtainedName = namesOfFriends[i];
    }
    }
    }
    return obtainedName;
    }
    }
    