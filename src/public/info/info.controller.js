(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['UserService', 'MenuService', 'ApiPath'];
function InfoController(UserService, MenuService, ApiPath) {
	var $ctrl = this;

	$ctrl.basePath = ApiPath;
	$ctrl.signedup = undefined;

	$ctrl.user = UserService.retrieveUserInfo();
 	if ($ctrl.user != null) {
 		var promise = MenuService.getMenuItem($ctrl.user.menunumber);

 		if (promise != null){
	 		promise.then( function success (response) {
		        $ctrl.menuitem = response.data;
		        // console.log($ctrl.menuitem);
		        $ctrl.signedup = true;
		        // console.log(response.data)
		        // console.log($ctrl.basePath + "/images/" + $ctrl.menuitem.short_name + ".jpg")
		    })
		    .catch( function (error){
		        $ctrl.signedup = false;
		    });
 		} 
 		else {
 			$ctrl.signedup = false;
 		}
	}
	else {
		$ctrl.signedup = false;
	}
 }
 

} )();