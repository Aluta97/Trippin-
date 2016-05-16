module.exports = function(users, regNumber){
var total = 0;
  users.forEach(function(user){
      if(user.RegistrationNumber === regNumber){
        total = total + user.Fare * user.Trips;
      };
  });
//  console.log(total);
  return total;
};
