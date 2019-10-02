function isHot(temp) {
  return reply = temp >= 80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.';
}


function helloThere(name) {
  return greeting = name.length > 5  ? 'Hi, ' + name : 'Hello, ' + name;
}


function goodbyeYou(name) {
  return reply = name !== undefined ? 'Goodbye, ' + name : 'Goodbye, stranger';
}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}