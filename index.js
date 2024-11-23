const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'Welcome to our Service!';
}
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function greetingMessage(userName) {
  return 'Hello, ' + userName;
}
app.get('/greet', (req, res) => {
  let userName = req.query.userName;
  res.send(greetingMessage(userName));
});

function sumOfTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}
app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(sumOfTwoNumbers(num1, num2));
});

function hasSubscription(userName, subscription) {
  if (subscription === 'true') {
    return userName + ' is Subscribed!';
  } else {
    return userName + ' is not Subscribed!';
  }
}
app.get('/subscription', (req, res) => {
  let userName = req.query.userName;
  let subscription = req.query.subscription;
  res.send(hasSubscription(userName, subscription));
});

function discountedPrice(price, discount) {
  let finalPrice = price - (price * discount) / 100;
  return 'Your discounted price is: ' + finalPrice;
}

app.get('/discounted-price', (req, res) => {
  let discount = parseFloat(req.query.discount);
  let price = parseFloat(req.query.price);
  res.send(discountedPrice(price, discount));
});

function personalizeMessage(name, age, gender) {
  return (
    'Hello ' + name + '! ' + ' you are ' + age + ' year old ' + gender + '.'
  );
}
app.get('/personalize-message', (req, res) => {
  let name = req.query.name;
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  res.send(personalizeMessage(name, age, gender));
});

function finalPriceAfterTax(price, tax, discount) {
  let discountedPrice = price - price * (discount / 100);
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}
app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(finalPriceAfterTax(price, tax, discount));
});

function totalExerciseTime(running, cycling, swimming) {
  let finalTime = running + cycling + swimming;
  return finalTime.toString();
}
app.get('/exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(totalExerciseTime(running, cycling, swimming));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
