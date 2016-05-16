module.exports = function(tripList){
var total = 0;
tripList.forEach(function(trips){
  //  console.log(trips);
total = total + trips.Trips
    });
//  console.log(total);
  return total;
 };
