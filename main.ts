//question # 1 hello world
console.log("hello world");



// question # 2 personal message
let name: string = "Naveed";
console.log(`Hello ${name}, Would you like to have a cup of coffee?`);

// question # 3 name case
let personName: string= "naveed"
console.log(personName.toLocaleLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1));

//question # 4 famous quote
console.log(`Shakespeare once said, " All is well if End is well."`);

//question # 5 famous quote 2
let famous_person:string = "Shakespeare"
let message: string = `${famous_person} once said, "All is well if End is well"`
console.log(message);

//question # 6  stripping name
let name :string = "\t\n Naveed \t\n";
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
console.log( 24 / 3);

// question # 9 favorite number
let favoriteNumber : number = 7
console.log(`${favoriteNumber} is my favroite number.`);

//question # 10 commeent 
//Adding Comments

//Famous Quote
console.log(`Shakespeare once said,"All is well if End is well"`);

// Famous Quote 2
let famous_person:string = "Shakespeare"
let message : string = `${famous_person} once said, " All is well if End is well.:`
console.log(message);

// question # 11 name in an array
let names: string[] = ["Muhammad"," Omer", "Bilal"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//question # 12 greeting
let names: string[] = ["Muammad", "omer", "Bilal"];
for(let  name of names)
{console.log(`Hello ${name}, Would you like to learn some typescript?`);}

//question # 13 mode of transport 
let transport: string [] = ["Suzuki" , "Honda" , "Toyota"];
transport.forEach(transport => {console.log(`I would like to own a ${transport}.`);
})

//qustion # 14 gust list
let guests: string [] = [ "Muhamamd", " Omer" , " Bilal" , "Tarib" ];
guests.forEach(guest => {console.log(`Dear ${guest}, Would you like to join me for the dinner?`);
})

//queestion # 15 chnaging guest list 
let guests:string [] = ["Muhammad", "Omer", "bilal", "Tarib"];
let unableToAttend : string = "Tarib";
console.log(`${unableToAttend} can't make it to dinner.`);

//Replace guest
let newGuest: string = "Kamini";
guests[guests.indexOf(unableToAttend)] = newGuest;

//New Invitation
guests.forEach(guest => {console.log(` Dear ${guest}, Would you like me to join for dinner?`);
})

//question # 13 mode of transport
let transport: string [] = ["Suzuki" , "Honda" , "Toyota"];
transport.forEach(transport => {console.log(`I would like to own a ${transport}.`);
})

//question # 14 guest list 
let guests: string [] = [ "Muhamamd", " Omer" , " Bilal" , "Tarib" ];
guests.forEach(guest => {console.log(`Dear ${guest}, Would you like to join me for the dinner?`);
})

//question # 15 changing guest list 
let guests:string [] = ["Muhammad", "Omer", "bilal", "Tarib"];
let unableToAttend : string = "Tarib";
console.log(`${unableToAttend} can't make it to dinner.`);

//Replace guest
let newGuest: string = "Kamini";
guests[guests.indexOf(unableToAttend)] = newGuest;

//New Invitation
guests.forEach(guest => {console.log(` Dear ${guest}, Would you like me to join for dinner?`);
})

//question # 16 more guests
let guests:string [] = ["Muammad", "omer", "Bilal", "Tarib"];
console.log("Great News! I have found a bigger table.");

//Adding more guests
guests.unshift("Saba");guests.splice(guests.length / 2, 0, "Bariqa");
guests.push("Alishba");

//Invitation
guests.forEach(guest => {console.log(`Dear , ${guest},  Would you like to join me for dinner?`);
})

//question # 17 shrinking guest list 
let guests: string[] = ["Muammad", "omer", "Bilal", "Tarib"];

console.log(
  "Unfortunately I can invite two people for dinner due to unavailabilty of bigger table."
);
while (guests.length > 2) {
  let removeGuest = guests.pop();
  console.log(`Sorry ${removeGuest}, I can't invite you to dinner.`);
}
guests.forEach((guest) => {
  console.log(` Dear ${guest} you are still invited for dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);

//question # 18 favorite places
let places: string[] = ["Karachi", "Lahore", "Quetta", "Pishawer", "Multan"];

console.log("Original order:", places);

console.log("Aplhabatical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse Alphabatical Order:", [...places].sort().reverse());

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
let guests : string [] = ["Naveed", "Noman", "Sajid", "Azhar", "Ghulam MUjtaba"];
console.log(`I am inviting ${guests.length} people to dinner`);
 
//question # 20 creating a list 
let countries = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log(`Countries: I'd like to visit:", ${countries}`);

let languages = ["Japanese", "English", "French", "German", "Urdu"];
console.log(`Languages: I'd like to learn ${languages}`);

//question # 21 typescript object 
let  vehicle = {
  Brand: "Suzuki",
  Model: "Swift",
  yearRegistred: "2019",
};
console.log(
  "vehicle Info: "
    .concat(vehicle.Brand, "...")
    .concat(vehicle.Model, "...")
    .concat(vehicle.yearRegistred)
);

//question # 22 international error
let fruits: string[] = ["Apple", "Banana", "mango", "grapes"];
console.log(fruits[4]); // Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
fruits[3] = "manogo"; // Correcting the error by accessing a valid index.

//question # 23 conditional test 
let car = "subaru";

console.log("Is car == 'subaru'? I predict true");
console.log(car == "subaru");

console.log("Is car == 'toyota'? I predict false");
console.log(car == "toyota");

// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//#1
let language = "English"

console.log("Is language == ' English' ? I predict true");
console.log(language == "English");
//#2
console.log("Is language == ' German' ? I predict false");
console.log(language == "German");
//#3
let city = "Karachi"
console.log("Is city == ' Karachi' ? I predict true");
console.log(city == "Karachi");
//#4
console.log("Is city == ' Lahore' ? I predict false");
console.log(city == "Lahore");

//#5
let book = "The Epic"
console.log("Is book == ' The Epic' ? I predict true");
console.log(book == "The Epic");

//#6
console.log("Is book == ' kite runner' ? I predict false");
console.log(book == "kite runner");

//#7

let vegetable = "tomato"
console.log("Is vegetable == ' tomato' ? I predict true");
console.log(vegetable == "tomato");

//#8
console.log("Is vegetable == ' onion' ? I predict false");
console.log(vegetable == "onion");

//#9
let clothes = "shirt"
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
let cars = ["honda", "suzuki", "corola"];
console.log("Is 'honda' in cars?");
console.log(cars.includes("honda")); // True

// Test whether an item is not in a array
console.log("Is 'tesla' not in cars?");
console.log(cars.includes("tesla")); // True

//question # 25  alien color
// Version that payellows:
let alien_color = "yellowe";
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
let alien_color = "blue";

// Q26 Answer:
// Version that runs the if block:
alien_color = "blue";
if (alien_color == "blue") {
  console.log("You just earned 5 points for shooting the alien");
} else {
  console.log("You just earned 10 points");
}

// Version that runs the else block:
alien_color = "yellow";
if (alien_color == "blue") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}

//question # 27 alien color 3
let alien_color = "pink";

// Green alien version:
alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Red alien version:
alien_color = "red";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

export {} // To prevent errors from redeclaration

//question # 28 stages of life 
let age: number = 34;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

//question # 29 favorite friut 
let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
  console.log("You really like apples!");
}

//question # 30 user name
let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach((username) => {
  if (username == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for loggin in again.`);
  }
});

//question # 31 no user 
let usernames: string [] = [];

if(usernames.length === 0 ){console.log("we need to find some users!");
}  else {

}

//question # 32 checking user name 


let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach((newUser) => {
    if (
        current_users.some((currentUser) => 
        currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ){
            console.log(`${newUser} will need to enter a new username.`);
        } else {
            console.log(`${newUser} is available.`);
        } 
        });

        
//question # 33 ordinal numbers
let numbers: number [] = [1,2,3,4,5,6,7,8,9 ];

numbers.forEach((number) => {let suffix ="th";
if (number === 1 ){ suffix = "st";
} else if (number === 2 ) {
    suffix = "nd"
} else if (number === 3){suffix ="rd";
}
console.log(`${number}${suffix}`);
})

//question #  34 pizza
let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

pizzas.forEach((pizza) => {
  console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");

//similar program
let baverages: string[] = ["Pepsi", "Miranda", "team"];

baverages.forEach((baverage) => {
  console.log(`I like ${baverage} cold drink. `);
});
console.log("I really love Cold Drinks");

//question # 35 animal
let animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach((animal) => {
  console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");

// similar program

let birds: string [] = [ "parrot", " pegion" , "sparrow"];

birds.forEach((bird) => {
     console.log(`A ${bird} would make a great pet!`);
})

//question # 36 t-shirt
function make_shirt(size: string, message: string) {
  console.log(
    `Making a ${size} t-shirt with the message "${message}" printed on it`
  );
}

make_shirt("medium", "Code is Life");


//similar program

function make_jeans(size: string , message :string) {
console.log(
  `making a ${size} jeans with the message " ${message}" printed on it `

);}
make_jeans("medium", "code is life")

//question # 37 large shirt 

function make_shirt(size: string = "large", message: string = "I love TypeScript") {
  console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
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

function describe_manumet (manument:string, country: string = "Pakistan") {
  console.log(`${manument} is in ${country}.`);
}

describe_manumet("Eifel Tower", "Paris,France");
describe_manumet("Badshahi Masjid");
describe_manumet("Taj Mahal","India");


//question # 39 cities names
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
//   }
  
//   console.log(city_country("Lahore", "Pakistan"));
//   console.log(city_country("Tokyo", "Japan"));
//   console.log(city_country("Paris", "France"));


//paractice the above code
function city_country(city:string, country: string ): string { return `${city}, ${country}`;
}

console.log(city_country("Sukkur", "Pakistan"));
console.log(city_country("Multan", "Pakistan"));
console.log(city_country("QUetta", "Pakistan"));

//similar code /program

function car_company(car:string, company:string): string {return `${car},${company}`;}

console.log(car_company("Margala", "Suzuki"));
console.log(car_company("Civic", "Honda"));
console.log(car_company("Yaris","Toyota"));

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

 function make_album(artist: string, title: string , tracks?: number){
  let album ={artist,title};
  if(tracks){
      album["tracks"]= tracks;
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

let magicians : string [] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) { 
    magicians.forEach((magician) => {
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
let actors: string[] =  ["Shaan", "Baber", "Rambo"];

function show_actors(actors: string[]) {
    actors.forEach((actor) => {console.log(actor);
    });
}
function make_great(actors:string[]){
    for(let i = 0 ; i< actors.length; i++){
        actors[i] = actors[i] + " the great";
    }
}
make_great(actors);
show_actors(actors);

//question # 43 unchanged magician
let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
  let greatMagicians = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`${magician} the Great`);
});
return greatMagicians;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
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

  function make_burger(...items:string[]){
    console.log(`Making a burger with:${items.join(",")}`);
    
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
  function make_car(
    manufacture:string, 
    model:string,
    ...options:[string, any][]
  ) {
    let car ={manufacture, model};
    options.forEach(([key,value]) => (car[key]=value));
    return car;
  }
  console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year",2020]));
  console.log(make_car("Ford", "Fiesta", ["color", "Blue"],["sunroof", true]));

  

  
  


















