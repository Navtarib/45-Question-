"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//question # 1 hello world
console.log("hello world");
// question # 2 personal message
var name = "Naveed";
console.log("Hello ".concat(name, ", Would you like to have a cup of coffee?"));
// question # 3 name case
var personName = "naveed";
console.log(personName.toLocaleLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1));
//question # 4 famous quote
console.log("Shakespeare once said, \" All is well if End is well.\"");
//question # 5 famous quote 2
var famous_person = "Shakespeare";
var message = "".concat(famous_person, " once said, \"All is well if End is well\"");
console.log(message);
//question # 6  stripping name
var name = "\t\n Naveed \t\n";
console.log(name);
console.log(name.trim());
//question # 7 & 8 number 8
//Addition
console.log(5 + 3);
//Subtraction
console.log(10 - 2);
//Multiplication
console.log(4 * 2);
//Division
console.log(24 / 3);
// question # 9 favorite number
var favoriteNumber = 7;
console.log("".concat(favoriteNumber, " is my favroite number."));
//question # 10 commeent 
//Adding Comments
//Famous Quote
console.log("Shakespeare once said,\"All is well if End is well\"");
// Famous Quote 2
var famous_person = "Shakespeare";
var message = "".concat(famous_person, " once said, \" All is well if End is well.:");
console.log(message);
// question # 11 name in an array
var names = ["Muhammad", " Omer", "Bilal"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//question # 12 greeting
var names = ["Muammad", "omer", "Bilal"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ", Would you like to learn some typescript?"));
}
//question # 13 mode of transport 
var transport = ["Suzuki", "Honda", "Toyota"];
transport.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
//qustion # 14 gust list
var guests = ["Muhamamd", " Omer", " Bilal", "Tarib"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", Would you like to join me for the dinner?"));
});
//queestion # 15 chnaging guest list 
var guests = ["Muhammad", "Omer", "bilal", "Tarib"];
var unableToAttend = "Tarib";
console.log("".concat(unableToAttend, " can't make it to dinner."));
//Replace guest
var newGuest = "Kamini";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New Invitation
guests.forEach(function (guest) {
    console.log(" Dear ".concat(guest, ", Would you like me to join for dinner?"));
});
//question # 13 mode of transport
var transport = ["Suzuki", "Honda", "Toyota"];
transport.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
//question # 14 guest list 
var guests = ["Muhamamd", " Omer", " Bilal", "Tarib"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", Would you like to join me for the dinner?"));
});
//question # 15 changing guest list 
var guests = ["Muhammad", "Omer", "bilal", "Tarib"];
var unableToAttend = "Tarib";
console.log("".concat(unableToAttend, " can't make it to dinner."));
//Replace guest
var newGuest = "Kamini";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New Invitation
guests.forEach(function (guest) {
    console.log(" Dear ".concat(guest, ", Would you like me to join for dinner?"));
});
//question # 16 more guests
var guests = ["Muammad", "omer", "Bilal", "Tarib"];
console.log("Great News! I have found a bigger table.");
//Adding more guests
guests.unshift("Saba");
guests.splice(guests.length / 2, 0, "Bariqa");
guests.push("Alishba");
//Invitation
guests.forEach(function (guest) {
    console.log("Dear , ".concat(guest, ",  Would you like to join me for dinner?"));
});
//question # 17 shrinking guest list 
var guests = ["Muammad", "omer", "Bilal", "Tarib"];
console.log("Unfortunately I can invite two people for dinner due to unavailabilty of bigger table.");
while (guests.length > 2) {
    var removeGuest = guests.pop();
    console.log("Sorry ".concat(removeGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log(" Dear ".concat(guest, " you are still invited for dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
//question # 18 favorite places
var places = ["Karachi", "Lahore", "Quetta", "Pishawer", "Multan"];
console.log("Original order:", places);
console.log("Aplhabatical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse Alphabatical Order:", __spreadArray([], places, true).sort().reverse());
console.log("Original Order:", places);
places.reverse();
console.log("Reversed Order:", places);
places.reverse();
console.log("Original Order:", places);
places.sort();
console.log("Alphabatical Order:", places);
places.reverse();
console.log("Reverse Aplhabatical Order:", places);
//question # 19 dinner guest 
var guests = ["Naveed", "Noman", "Sajid", "Azhar", "Ghulam MUjtaba"];
console.log("I am inviting ".concat(guests.length, " people to dinner"));
//question # 20 creating a list 
var countries = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries: I'd like to visit:\", ".concat(countries));
var languages = ["Japanese", "English", "French", "German", "Urdu"];
console.log("Languages: I'd like to learn ".concat(languages));
//question # 21 typescript object 
var vehicle = {
    Brand: "Suzuki",
    Model: "Swift",
    yearRegistred: "2019",
};
console.log("vehicle Info: "
    .concat(vehicle.Brand, "...")
    .concat(vehicle.Model, "...")
    .concat(vehicle.yearRegistred));
//question # 22 international error
var fruits = ["Apple", "Banana", "mango", "grapes"];
console.log(fruits[4]); // Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
fruits[3] = "manogo"; // Correcting the error by accessing a valid index.
//question # 23 conditional test 
var car = "subaru";
console.log("Is car == 'subaru'? I predict true");
console.log(car == "subaru");
console.log("Is car == 'toyota'? I predict false");
console.log(car == "toyota");
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//#1
var language = "English";
console.log("Is language == ' English' ? I predict true");
console.log(language == "English");
//#2
console.log("Is language == ' German' ? I predict false");
console.log(language == "German");
//#3
var city = "Karachi";
console.log("Is city == ' Karachi' ? I predict true");
console.log(city == "Karachi");
//#4
console.log("Is city == ' Lahore' ? I predict false");
console.log(city == "Lahore");
//#5
var book = "The Epic";
console.log("Is book == ' The Epic' ? I predict true");
console.log(book == "The Epic");
//#6
console.log("Is book == ' kite runner' ? I predict false");
console.log(book == "kite runner");
//#7
var vegetable = "tomato";
console.log("Is vegetable == ' tomato' ? I predict true");
console.log(vegetable == "tomato");
//#8
console.log("Is vegetable == ' onion' ? I predict false");
console.log(vegetable == "onion");
//#9
var clothes = "shirt";
console.log("Is clothes == ' shirt' ? I predict true");
console.log(clothes == "shirt");
//#10
console.log("Is clothes == ' jeans' ? I predict false");
console.log(clothes == "jeans");
//question # 24 more conditionals
// Equality with strings
console.log("Testing equality with strings:");
console.log("car" == "car"); // True
console.log("car" == "Car"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Car".toLowerCase() == "car"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(12 > 9); // True
console.log(5 < 3); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
var cars = ["honda", "suzuki", "corola"];
console.log("Is 'honda' in cars?");
console.log(cars.includes("honda")); // True
// Test whether an item is not in a array
console.log("Is 'tesla' not in cars?");
console.log(cars.includes("tesla")); // True
//question # 25  alien color
// Version that payellows:
var alien_color = "yellowe";
if (alien_color == "blue") {
    console.log("You just earned 5 points!");
}
// Version that fails (no output):
alien_color = "yellow";
if (alien_color == "blue") {
    // No output because the condition is false
}
//question # 26 alien color2
// Version that passes:
var alien_color = "blue";
// Q26 Answer:
// Version that runs the if block:
alien_color = "blue";
if (alien_color == "blue") {
    console.log("You just earned 5 points for shooting the alien");
}
else {
    console.log("You just earned 10 points");
}
// Version that runs the else block:
alien_color = "yellow";
if (alien_color == "blue") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points!");
}
//question # 27 alien color 3
var alien_color = "pink";
// Green alien version:
alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
// Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
// Red alien version:
alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
//question # 28 stages of life 
var age = 34;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//question # 29 favorite friut 
var favorite_fruits = ["apples", "bananas", "cherries"];
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
//question # 30 user name
var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for loggin in again."));
    }
});
//question # 31 no user 
var usernames = [];
if (usernames.length === 0) {
    console.log("we need to find some users!");
}
else {
}
//question # 32 checking user name 
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) {
        return currentUser.toLowerCase() === newUser.toLowerCase();
    })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
//question # 33 ordinal numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
//question #  34 pizza
var pizzas = ["pepperoni", "margherita", "hawaiian"];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
console.log("I really love pizza!");
//similar program
var baverages = ["Pepsi", "Miranda", "team"];
baverages.forEach(function (baverage) {
    console.log("I like ".concat(baverage, " cold drink. "));
});
console.log("I really love Cold Drinks");
//question # 35 animal
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
// similar program
var birds = ["parrot", " pegion", "sparrow"];
birds.forEach(function (bird) {
    console.log("A ".concat(bird, " would make a great pet!"));
});
//question # 36 t-shirt
function make_shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it"));
}
make_shirt("medium", "Code is Life");
//similar program
function make_jeans(size, message) {
    console.log("making a ".concat(size, " jeans with the message \" ").concat(message, "\" printed on it "));
}
make_jeans("medium", "code is life");
//question # 37 large shirt 
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
//question # 38 cities
// function describe_city(city: string, country: string = "Pakistan") {
//     console.log(`${city} is in ${country}.`);
// }
// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("Tokyo", "Japan");
// similar program (Manument)
function describe_manumet(manument, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(manument, " is in ").concat(country, "."));
}
describe_manumet("Eifel Tower", "Paris,France");
describe_manumet("Badshahi Masjid");
describe_manumet("Taj Mahal", "India");
//question # 39 cities names
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
//   }
//   console.log(city_country("Lahore", "Pakistan"));
//   console.log(city_country("Tokyo", "Japan"));
//   console.log(city_country("Paris", "France"));
//paractice the above code
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Sukkur", "Pakistan"));
console.log(city_country("Multan", "Pakistan"));
console.log(city_country("QUetta", "Pakistan"));
//similar code /program
function car_company(car, company) { return "".concat(car, ",").concat(company); }
console.log(car_company("Margala", "Suzuki"));
console.log(car_company("Civic", "Honda"));
console.log(car_company("Yaris", "Toyota"));
//question # 40 album
// function make_album(artist: string, title: string, tracks?: number) {
//     let album = { artist, title };
//     if (tracks) {
//       album["tracks"] = tracks;
//     }
//     return album;
//   }
//   console.log(make_album("Artist One", "The First Album"));
//   console.log(make_album("Artist Two", "The Second Album"));
//   console.log(make_album("Artist Three", "The Third Album", 12));
// practice
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Sonu Nigam", "Jaan"));
console.log(make_album("Ahmed Janhzeb", "Parastish"));
console.log(make_album("Shahzad Roy", "Darshan"));
//question # 41  magician
// let magicians: string[] = ["Alice", "David", "Chris"];
// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }
// show_magicians(magicians);
// // //practice
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
//question # 42 great magician
// let magicians: string[] = ["Alice", "David", "Chris"];
// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }
// function make_great(magicians: string[]) {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + " the Great";
//   }
// }
// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names`
//practice
var actors = ["Shaan", "Baber", "Rambo"];
function show_actors(actors) {
    actors.forEach(function (actor) {
        console.log(actor);
    });
}
function make_great(actors) {
    for (var i = 0; i < actors.length; i++) {
        actors[i] = actors[i] + " the great";
    }
}
make_great(actors);
show_actors(actors);
//question # 43 unchanged magician
var magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
//question # 44 sandwiches
// function make_sandwich(...items: string[]) {
//     console.log(`Making a sandwich with: ${items.join(", ")}.`);
//   }
//   make_sandwich("ham", "cheese");
//   make_sandwich("turkey", "lettuce", "tomato");
//   make_sandwich("avocado", "sprouts", "mustard", "mayo");
// // practice 
// function make_sandwich(...items:string[]) {
//   console.log(`Making a sandwich with:${items.join(",")}`);
// }
// make_sandwich("ham", "cheese");
// make_sandwich("turkey" , "lettuce", "tomato");
// make_sandwich("avocado", "spourts", "mustard" ,"mayo");
//similar program
function make_burger() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a burger with:".concat(items.join(",")));
}
make_burger("kabab", "egg");
make_burger("cheese ", "double kabab");
make_burger("catchup", "chattni", "mayo", "masala");
//question # 45 car
// function make_car(
//     manufacturer: string,
//     model: string,
//     ...options: [string, any][]
//   ) {
//     let car = { manufacturer, model };
//     options.forEach(([key, value]) => (car[key] = value));
//     return car;
//   }
//   console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
//   console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true])); 
// practice
function make_car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacture: manufacture, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "Blue"], ["sunroof", true]));
