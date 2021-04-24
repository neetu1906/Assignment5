(function(){

"use strict";

angular.module("public")
.controller("myInfoController",myInfoController);

myInfoController.$inject=["SignUpDataService","ApiPath"];
function myInfoController(SignUpDataService,ApiPath)
{
  var $ctrl= this;
  $ctrl.userPref = SignUpDataService.getUserPref();
  //console.log($ctrl.userPref);
  $ctrl.basePath = "https://nex3z-restaurant.herokuapp.com";
  console.log($ctrl.basePath);
}

})();
