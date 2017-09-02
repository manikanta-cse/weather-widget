(function() {

    angular.module('weather-widget').factory('weatherService',weatherService);

    function weatherService($http, $q) {

        var baseUrl="http://api.openweathermap.org/data/2.5/";
        var appId="5b6c38326f536cd2d45fd04138a17c68";

        var getWeatherInformation = function (lon,lat) {

            var defered = $q.defer();

            $http.get(baseUrl+"weather?lon="+lon+"&lat="+lat+"&units=imperial&APPID="+appId).then(function (response) {

                defered.resolve(response.data);

            }, function (error) {
                defered.reject(error.data);
            });

            return defered.promise;
        };      

         var getUVInformation = function (lon,lat) {

            var defered = $q.defer();

            $http.get(baseUrl+"uvi?lon="+lon+"&lat="+lat+"&APPID="+appId).then(function (response) {

                defered.resolve(response.data);

            }, function (error) {
                defered.reject(error.data);
            });

            return defered.promise;
        };      
    

        return {
            getWeatherInformation: getWeatherInformation,
            getUVInformation:getUVInformation          
        }
    }

})();

