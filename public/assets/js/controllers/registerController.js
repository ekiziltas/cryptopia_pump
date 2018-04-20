'use strict';

app.controller('RegisterController', [
    '$scope', '$http',
    function ($scope, $http) {

        var data = this.myForm;

        $http.get('/registerUser/' + data.user.username + '/' + data.user.email)
            .success(function (data) {

            })
            .error(function (err) {

            })



    }
]);