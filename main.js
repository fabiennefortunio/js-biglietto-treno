// ask user KM
var distance = prompt('How many km will you travel?');
console.log(distance);


// ask user age
var age = prompt('How old are you?');
console.log(age);

var price = distance * 0.21; //normal price
var kids = price - (price * (20 / 100)); // kid price
var old = price - (price * (40 / 100)); // old people price




if (age >= 18 && age <= 65) { //everyone
    console.log (price);

} else if (age <18){          //kids discount
    console.log (kids);

} else {
    console.log(old);         //old p. discount
}
