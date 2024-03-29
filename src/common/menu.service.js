(function(){
  "use strict";

  angular.module('common')
  .service('MenuService',MenuService);

  MenuService.$inject=['$http', 'ApiPath'];

  function MenuService($http, ApiPath)
  {
    var service=this;

    service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
      });
    };


    service.getmenuItems = function (category) {
      var config = {};
      if(category)
      {
        config.params={'category':category};
      }

        return $http.get(ApiPath + '/menu_items.json',config).then(function (response)
        {
          //console.log("getmenuItems:",ApiPath + '/menu_items.json',config);
          return response.data;
        });
    };

    service.getmenuByShortname= function(shortName)
    {
      return $http.get("https://nex3z-restaurant.herokuapp.com//menu_items/" + shortName.toUpperCase() + ".json").then(function (response)
      {
        console.log("https://nex3z-restaurant.herokuapp.com//menu_items/" + shortName.toUpperCase() + ".json");
        return response.data;
      },
      function(error)
      {
        console.log("Error happned..");
      });
    }


  }

})();
