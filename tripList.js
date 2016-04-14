module.exports = function(users, regNumber){


var initial  = 0;

  users.forEach(function(user){

  if (user.RegistrationNumber === regNumber){

      initial = initial + user.Trips;

}

  });
      return initial;

};
