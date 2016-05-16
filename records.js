module.exports = function(lists, regNumber){

var count = [];
lists.forEach(function(list){
   if(list.RegistrationNumber === regNumber){
      count.push(list);
  }
});
  //console.log(count);
  return count;
};
