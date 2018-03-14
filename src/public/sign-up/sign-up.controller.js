(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['ApiPath', 'MenuService', 'UserService'];
function SignUpController(ApiPath, MenuService, UserService) {
  var $ctrl = this;

  $ctrl.signedup = undefined;

  $ctrl.submit = function () {
      var promise = MenuService.getMenuItem($ctrl.user.menunumber);

  		promise.then( function success (response) {
        UserService.storeUserInfo($ctrl.user.firstname, $ctrl.user.lastname, $ctrl.user.email,
                    $ctrl.user.phone, $ctrl.user.menunumber);
        
        $ctrl.signedup = true;
      })
      .catch( function (error){
        // console.log("something went wrong");
        $ctrl.signedup = false;
      });
  };
}


} )();
