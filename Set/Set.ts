// //Set Interval

// const renderMyName = setInterval(() => {
//   console.log("Wisdom");

//   clearInterval(renderMyName);
// }, 1000);

// //Set Timeout
// const welcomeUser = setTimeout(() => {
//   console.log("welcome user");
//   clearTimeout(welcomeUser);
// }, 1000);

// //Set Immediate
// const display = setImmediate(() => {
//   console.log("render immediate");
//   clearImmediate(display);
// });

// const displayNairs = (amount: number) => {
//   const naira = setInterval(() => {
//     console.log(`₦${amount.toLocaleString()}`);
//     clearInterval(naira);
//   }, 5000);
//   return naira;
// };
// console.log(displayNairs(1000));

// const Countdown = (number: number) => {
//   const count = setInterval(() => {
//     console.log(number--);
//     if (number === 0) {
//       console.log("time is up");
//       clearInterval(count);
//     }
//   }, 1000);
//   return count;
// };
// console.log(Countdown(10));
// // SetInterval

// const renderMyName = setInterval(() => {
//   console.log("My name is Prince");

//   clearInterval(renderMyName);
// }, 1000);

// // SetTimeout

// const welcomeUser = setTimeout(() => {
//   console.log("Welcome User");
// }, 1000);

// // SetImmediate

// const displayNote = setImmediate(() => {
//   console.log("Render Immediate function now");
//   clearImmediate(displayNote);
// });

// console.log(displayNote);

// // Classwork
// console.clear();

// const displayName = (name: string) => {
//   const a = setInterval(() => {
//     console.log(name);
//     clearInterval(a);
//   }, 5000);

//   return a;
// };

// console.log(displayName("Mijay"));
console.clear();
const priceGenerator = (amount: number) => {
  const finalPrice = amount.toLocaleString();
  const duration = setInterval(() => {
    console.log(`₦${finalPrice} is your charges`);
    clearInterval(duration);
  }, 5000);

  return { duration };
};

console.log("Price Generator:...", priceGenerator(100000000));

const countDown = (num: number) => {
  let count = num;

  const timer = setInterval(() => {
    console.log(count--);

    if (count === 0) {
      console.log("Time Up!!");
      clearInterval(timer);
    }
  }, 1000);
};

console.log(countDown(20));
