(function () {

angular.module('weather-widget').directive('addressAutoComplete',googleAddressAutoComplete);


  

  function googleAddressAutoComplete(googleApiService) {
    return {
      restrict: 'A',
      scope: {
        onPlaceChanged: '&'
      },
      link: function (scope, element, attrs) {
        var google = googleApiService.getApi();        
        var autoComplete = new google.maps.places.Autocomplete(element[0]);
        google.maps.event.addListener(autoComplete, 'place_changed', function () {
          var place = autoComplete.getPlace();
          var googlePlace = googleApiService.mapAddressFromGoogle(place);
          if (googlePlace) {
            scope.onPlaceChanged({place: googlePlace});
          }
        });
      }
    };
  }
 
})();
