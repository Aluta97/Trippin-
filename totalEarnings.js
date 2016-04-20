module.exports = function(users) {
  var map = {};

  users.forEach(function(user) {
    var regNo = user.RegistrationNumber;
       var newEarn = user.Fare * user.Trips;
    if (map[regNo] === undefined){
        map[regNo] = 0;
    }

    map[regNo]  +=  newEarn;
  });

    return map;
}
