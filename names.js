module.exports = function(bus,regNumber){

var array = [];

bus.forEach(function(list){

if(list.RegistrationNumber === regNumber){

//var esults = list.Routes; 

   array.push(list.Route);
}

});

    return array;
};
