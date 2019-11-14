// ask user KM
var distance = prompt('How many KM will you travel?');
console.log(distance);


// ask user age
var age = prompt('How old are you?');
console.log(age);

//minorenni

if(age > 18){
    console.log('distance * 0,21 -20%');

} else {
    console.log('distance * 0,21');
}

//over 65 

if(age < 65){
    console.log('distance * 0,21 - 40%');


}

// kids
