
// var player = new Object();
// var player = {
//     age: 33
// };

// let player1 = new Object()
// player1.firstName= "Messi"
// player1.lastName = "John"
// player1.age = 33;
// player1.children = ["Antonio", "Juliet"]
// console.log(player1)

// let player1 = {
//     firstName : "Cristiano",
//     lastName: "Ronaldo",
//     age : 38,
//     hasKids : true,

//     shoot : function () {
//         console.log( this.lastName + " shot the ball")
//     }
// }

// console.log(player1.shoot())


// write a simple JavaScript Object for a staduim


// let player2 = {
//     firstName : "Renaldo",
//     lastName : "Ferari",
//     age:99,
//     children: ["Lewis", "Carlos"]
// }

// player2.yearOfBirth = function() {
//     let now = new Date()
//     now.setFullYear(now.getFullYear() - player2.age)
//     console.log(now.getFullYear())
// }

// player2.yearOfBirth()


// function Player(firstName, lastName, age, team, shirtNumber) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.team = team;
//     this.shirtNumber = shirtNumber;


//     this.shoot = function () {
//         console.log(this.firstName + " has shot the ball");
//     }
// }
//  let player1 = new Player("Christiano", "Ronaldo",  "25", "Al-Nasir", "7")
//  let player2 = new Player("Lionel", "Messi",  "25", "Miami", "10")

// console.log(player1)
// console.log(player2)

// function Fan(firstName, lastName, age, seatNumber) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.seatNumber = seatNumber;

//     this.waveFlag = function () {
//     console.log(this.firstName + " is waving the flag");
//     }
// }

class Fan{
    constructor(firstName, lastName, age, seatNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.seatNumber = seatNumber;
    }

    WaveFlag() {
        let firstName = "waryaa"
        console.log(firstName +" is waving the flag")
    }
    
}



let fan1 = new Fan("Jo","Lo",53,65)
let fan2 = new Fan("Ali","Hello",36,55)
let fan3 = new Fan("ben","Lo",32,51)
// console.log(fan1.waveFlag)
//console.log(fan1, fan2, fan3)
// console.log(fan1['firstName'])
// console.log(fan1.firstName)
let {firstName} = fan1;
console.log(firstName)

// let fan2 = {
//     firstName : "Alan",
//     lastName : "Bile",
//     age : 33,
//     seatNumber : 55
// }
// console.log(fan2)

// }

// class Fan {
//     constructor(firstName, lastName, age, seatNumber) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.seatNumber = seatNumber;
//     }


//     waveFlag() {
//         console.log(this.firstName + " is waving the flag");
//     }

//     celebrate() {
//         console.log(this.firstName + " is celebrating");
//     }
// }


//var fan1 = new Fan("Jo","Lo",33,55)

// console.log(fan1.firstName)

//console.log(fan1["firstName"])

// let {lastName,seatNumber} = fan1;
// console.log(seatNumber)

//     fan1.waveFlag()

// var fan2 = new Fan("Ali","Ahmed",31,45)
//     fan2.waveFlag()
// var fan3 = new Fan("Nor","Sayid",23,29)
//     fan3.waveFlag()

// console.log(fan1)
// console.log(fan2)
// console.log(fan3)



//console.log(player2)

// let biggerNumber = Math.max(2,5,37,89, 99)
// console.log(biggerNumber)





