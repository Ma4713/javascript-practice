

// setTimeout(
//     function() {
//         console.log("it is morning wake up")
//     }, 10000
// )


// setTimeout(() => {
//   console.log("It is morning. Wake up!");
// }, 10000);

// setTimeout(() => console.log("It is morning. Wake up!"), 10000);

// setInterval(() => console.log("It is morning. Wake up!"), 10000);

let timer = setInterval(() => console.log("It is morning. Wake up!"), 5000);

setTimeout(() => clearInterval(timer),20000)
