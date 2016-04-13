module.exports = function(minTrips){

var min = 10000;

minTrips.forEach(function(trips){
  if (trips.Trips < min){
  min = trips.Trips;
}
})
    return min;
};
