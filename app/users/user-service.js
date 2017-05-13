'use strict';

angular
    .module('myApp.users')
    .factory('usersService', userService);

userService.$inject = ['$http'];

function userService($http) {
    var service = {
        getUsers: getUsers,
        saveUser: saveUser
    };
    return service;


    function getUsers() {
        return $http
            .get('https://api.github.com/users')
            .success(function (data) {
                console.log('user data :', data);
                return data;
            })
            .error(function(error){
                console.log('getUsers :',error);
                return error;
            });
    }
    function saveUser(savedata){
        return $http
            .post('https://api.github.com/users',savedata)
            .success(function (data) {
                console.log('user data :', data);
                return data;
            })
            .error(function(error){
                console.log('getUsers :',error);
                return error;
            });
    }
};