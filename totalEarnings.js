module.exports = function(users){

var array = [];

  var expResults = users.map(function(user){

    results = {
            RegistrationNumber : user.RegistrationNumber,
            Earning : user.Fare * user.Trips
          };
           array.push(results);

  });

    return array;
}
