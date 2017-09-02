(function() {

angular.module('weather-widget').controller('weatherCtrl', weatherCtrl);

function weatherCtrl($scope, $location, $routeParams, $window, weatherService) {

$scope.weatherApiResponse={};


  $scope.onPlaceChanged = function (place) {
       $scope.place=place;
      console.log("place",place)
       if(place){
           weatherService.getWeatherInformation(place.geoLocation.longitude,place.geoLocation.latitude).then(function(data){
               $scope.weatherApiResponse=data;
             console.log(data)
        },erroHandler);

         weatherService.getUVInformation(place.geoLocation.longitude,place.geoLocation.latitude).then(function(data){
             $scope.weatherApiResponse.uv=data.value;               
             console.log("uv",$scope.weatherApiResponse);              
        },erroHandler);   
          
        
       };       
       
    };


    //genric error handler to a promise rejection callback
    function erroHandler(err) {
           console.log(err);
    }
 }

})();
