var num = 30

let age = 25;
if (true){
    let age = 45;
    console.log(age);
}
  
let a = 2;
let b = 3;
let power = a ** b;
console.log(power); // Outputs: 8 (2 to the power of 3)

let number = 8;
if (number % 2 === 0){
    console.log("Even")
}else{
    console.log("Odd")
}

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      console.log(i + " is divisible by 3");
    }
  }
  // Outputs:
  // "3 is divisible by 3"
  // "6 is divisible by 3"
  // "9 is divisible by 3"

let totalMinutes = 130;
let hours = Math.floor(totalMinutes / 60); // 2 hours
let minutes = totalMinutes % 60; // 10 minutes left
console.log(hours + " hours and " + minutes + " minutes");
// Outputs: "2 hours and 10 minutes"

let option = 3;

switch (option) {
    case 1:
      console.log("You have chosen to buy airtime.");
      break;
    case 2:
      console.log("You have chosen to borrow airtime.");
      break;
    case 3:
      console.log("You have chosen to check your balance.");
      break;
    default:
      console.log("Invalid option. Please try again.");
  }
  
  let glassFull = false;

while (!glassFull) {
    console.log("Pouring water into the glass...");
    // Logic to check if the glass is full
    // Let's say after a few pours, it becomes full
    glassFull = true; // Assume this happens after some iterations
}

function makeTea() {
    console.log("Boil water.");
    console.log("Put a tea bag in the cup.");
    console.log("Pour hot water into the cup.");
    console.log("Let it steep.");
    console.log("Add sugar or milk.");
    console.log("Stir and enjoy!");
}
makeTea(); // This will perform all the steps inside the function.


//const age = 25;
//console.log(age); // Outputs: 25
// age = 30; // This would give an error because you can't change the value of `age`.

const colors = ['red', 'blue'];
colors.push('green'); 
console.log(colors); 
