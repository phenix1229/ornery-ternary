function isHot(temp) {
  const reply = temp >= 80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.';
  return reply;
}


function helloThere(name) {
  const greeting = name.length > 5  ? 'Hi, ' + name : 'Hello, ' + name;
  return greeting;
}

console.log(reply)
function goodbyeYou(name) {
  reply = name !== undefined ? 'Goodbye, ' + name : 'Goodbye, stranger';
  return reply;
}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}