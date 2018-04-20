'use strict';
/** 
  * controller for User Profile Example
*/
app.controller('UserCtrl', ['$scope', '$uibModal', 'flowFactory', function ($scope, $uibModal, flowFactory) {

    $scope.removeImage = function () {
        $scope.noImage = true;
    };
    $scope.obj = new Flow();

    $scope.userInfo = {
        firstName: 'Peter',
        lastName: 'Clark',
        url: 'www.example.com',
        email: 'peter@example.com',
        phone: '(641)-734-4763',
        gender: 'male',
        zipCode: '12345',
        city: 'London (UK)',
        avatar: 'assets/images/avatar-1-xl.jpg',
        twitter: '',
        github: '',
        facebook: '',
        linkedin: '',
        google: '',
        skype: 'peterclark82'
    };
    if ($scope.userInfo.avatar == '') {
        $scope.noImage = true;
    }

    $scope.addNewUser = function () {

        $uibModal.open({
            templateUrl: '../assets/views/users/addNewUser.html',
            size: 'sm',
            controller: function ($scope, $uibModalInstance, $http) {

                $scope.ok = function () {

                    $http.post('/createNewUser', $scope.userInfo)
                        .then(function (success) {

                        }, function (error) {

                        }, function () {
                            //ongoing
                        })


                    //todo: add to db
                    // $uibModalInstance.close();
                };

                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            }
        })

    }
    
}]);