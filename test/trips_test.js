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


 describe("My Cape Town trips ", function() {

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

            expRes = ["Cape Town - Langa", "Cape Town - Cape Town"];

         assert.deepEqual(names(capeTownTaxis, "CA 345 678"), expRes);
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
//My durban tests::


     var durbanTaxis = [
  {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 14
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 14
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 18
  },
  {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 15
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 20
  }
];




     describe("My Durban taxi trips", function(){

       it("it should tell me how many trips did the durban taxis make", function() {
         assert.equal(trips(durbanTaxis), 117);
       });

       it("it should tell me the lowest number of trips taxis form Cape Town made", function() {
         assert.equal(minimumTrips(durbanTaxis), 9);
       });

        it("it should tell me the records for ND 123 456", function() {


          var expectedResults = [{
            "RegistrationNumber": "ND 123 456",
            "Route": "Durban - University of KZN",
            "Fare": 7,
            "Trips": 14
          },
          {
            "RegistrationNumber": "ND 123 456",
            "Route": "Durban - Umbilo",
            "Fare": 8,
            "Trips": 15
          }]
          assert.deepEqual(records(durbanTaxis, "ND 123 456"), expectedResults);
        });

        it("it should tell me how many trips did ND 234 567 make", function() {
          assert.equal(tripList(durbanTaxis, "ND 234 567"), 36);
        });

        it("should tell me the names of routes that ND 345 678 took", function() {

          expRes = ["Durban - Umbilo", "Durban - University of KZN", "Durban - Umlazi Station"]

          assert.deepEqual(names(durbanTaxis, "ND 345 678"), expRes);
        });

        it("should tell me the total earning of ND 234 567", function() {
          assert.equal(earnings(durbanTaxis, "ND 234 567" ), 387);
        });

        it("should tell me the total earnings for each taxi", function() {

            assert.deepEqual(totalEarnings(durbanTaxis),


           [{
           RegistrationNumber:"ND 123 456",
           Earning:98
         },
         {
           RegistrationNumber:"ND 234 567",
           Earning:126
         },
         {
           RegistrationNumber:"ND 345 678",
           Earning:112
         },
         {
           RegistrationNumber:"ND 234 567",
           Earning:126
         },
         {
           RegistrationNumber:"ND 234 567",
           Earning:63
         },
         {
           RegistrationNumber:"ND 345 678",
           Earning:126
         },
         {
           RegistrationNumber:"ND 123 456",
           Earning:120
         },
         {
           RegistrationNumber:"ND 234 567",
           Earning:72
         },
         {
           RegistrationNumber:"ND 345 678",
           Earning:280
         }]

          );

        });

      });



  //   });
