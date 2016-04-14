 var trips = require('../trips');

 var minimumTrips = require('../minimumTrips');

 var records = require('../records');

 var tripList = require('../tripList');

 var names = require('../names');

 var earnings = require('../earnings');

 var totalEarnings = require('../totalEarnings')

 var assert = require('assert');

 var capeTownTaxis = [{
   "RegistrationNumber": "CA 123 456",
   "Route": "Cape Town - Bellville",
   "Fare": 13,
   "Trips": 9
 }, {
   "RegistrationNumber": "CA 234 567",
   "Route": "Cape Town - Gugulethu",
   "Fare": 12,
   "Trips": 11
 }, {
   "RegistrationNumber": "CA 123 456",
   "Route": "Cape Town - Gugulethu",
   "Fare": 12,
   "Trips": 11
 }, {
   "RegistrationNumber": "CA 345 678",
   "Route": "Cape Town - Langa",
   "Fare": 8,
   "Trips": 13
 }, {
   "RegistrationNumber": "CA 345 678",
   "Route": "Cape Town - Cape Town",
   "Fare": 13,
   "Trips": 10
 }];


 describe("My trips test", function() {

       it("it should tell me how many trips did cape town taxis make", function() {
         assert.equal(trips(capeTownTaxis), 54);
       });

       it("it should tell me the lowest number of trips taxis form Cape Town made", function() {
         assert.equal(minimumTrips(capeTownTaxis), 9);
       });

       it("it should tell me the records for CA 123 456", function() {

        var expectedResults =
          [{
         "RegistrationNumber": "CA 123 456",
         "Route": "Cape Town - Bellville",
         "Fare": 13,
         "Trips": 9
       },
        {
           "RegistrationNumber": "CA 123 456",
           "Route": "Cape Town - Gugulethu",
           "Fare": 12,
           "Trips": 11
          }];


         assert.deepEqual(records(capeTownTaxis, "CA 123 456"), expectedResults);
       });

       it("it should tell me how many trips did CA 234 567 make", function() {
         assert.equal(tripList(capeTownTaxis, "CA 234 567"), 11);
       });

       it("should tell me the names of routes that CA 345 678 took", function() {
         assert.equal(names(capeTownTaxis, "CA 345 678"), ("Cape Town - Langa", "Cape Town - Cape Town"));
       });

       it("should tell me the total earning of CA 234 567", function() {
         assert.equal(earnings(capeTownTaxis, "CA 234 567" ), 132);
       });

       it("should tell me the total earnings for each taxi", function() {

           assert.deepEqual(totalEarnings(capeTownTaxis),
           [{
           RegistrationNumber:"CA 123 456",
           Earning:117
         },
         {
           RegistrationNumber:"CA 234 567",
           Earning:132
         },
         {
           RegistrationNumber:"CA 123 456",
           Earning:132
         },
         {
           RegistrationNumber:"CA 345 678",
           Earning:104
         },
         {
           RegistrationNumber:"CA 345 678",
           Earning:130
         }]
          );

       });

     });
