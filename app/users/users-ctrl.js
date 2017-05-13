'use strict';

angular
    .module('myApp.users')
    .controller('usersController', usersController);

usersController.$inject = [
    'usersService'
];

function usersController(
    usersService
) {
    var vm = this;

    vm.users = [];
    vm.user = '';
    vm.dataerror = false;

    usersService.getUsers()
        .then(function (data) {
            console.log('controller data---', data);
            vm.users = data.data;
        }, function (error) {
            console.log(error);
            if (error.statusText === 'Not Found') {
                vm.dataerror = 'Data not found';
            }
        });


    vm.submit = function (saveUser) {
        usersService.saveUser(saveUser)
            .then(function (data) {
                console.log('controller data', data);
                vm.users = data.data;
            }, function (error) {
                console.log(error);
                if (error.statusText === 'Not Found') {
                    vm.dataerror = 'Data not found';
                }
            });
    };




}