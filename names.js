module.exports = function(bus, regNumber) {

  var array = [];

  bus.forEach(function(list) {
    if (list.RegistrationNumber === regNumber) {
      array.push(list.Route);
    }
  });
  //console.log(array)
  return array;
};
