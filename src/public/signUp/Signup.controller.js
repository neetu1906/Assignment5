(function(){

"use strict";

angular.module('public')
.controller("SignupController",SignupController);

SignupController.$inject=["menuItems","MenuService","SignUpDataService"];
function SignupController(menuItems,MenuService,SignUpDataService)
{
  var $ctrl = this;
  var shortNames =[];
  $ctrl.isValid = true;

  for(var i=0;i<menuItems.menu_items.length;i++)
  {
    shortNames.push(menuItems.menu_items[i].short_name.toLowerCase());
  }

  $ctrl.validateMenuNumber= function()
  {
    if($ctrl.user !== undefined && $ctrl.user.menuNumber !== undefined)
    {
      if(shortNames.indexOf($ctrl.user.menuNumber.toLowerCase()) === -1)
      {
          $ctrl.isValid = false;
      }
      else
      {
        $ctrl.isValid = true;
        MenuService.getmenuByShortname($ctrl.user.menuNumber).then(function(result)
        {
          $ctrl.isValid = true;
          $ctrl.user.favouriteMenuItem = result;
          SignUpDataService.setUserPref($ctrl.user);
          $ctrl.saved = true;
        }, function(error)
        {
          $ctrl.isValid = false;
          $ctrl.saved = false;
        });
      }
    }
    else {
      $ctrl.isValid = false;
    }
  }




}

})();
