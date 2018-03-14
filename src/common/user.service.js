(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


// UserService.$inject = ['$http', 'ApiPath'];
function UserService() {
  var service = this;

  service.user = {
    firstname: undefined,
    lastname: undefined,
    email: undefined,
    phone: undefined,
    menunumber: undefined 
  };

  service.storeUserInfo = function (firstname, lastname, email,  phone, menunumber){
    service.user.firstname = firstname;
    service.user.lastname = lastname;
    service.user.email = email;
    service.user.phone = phone;
    service.user.menunumber = menunumber;

    // console.log("service.user", service.user);
  };

  service.retrieveUserInfo = function(){
    return service.user;
  }

}


})();