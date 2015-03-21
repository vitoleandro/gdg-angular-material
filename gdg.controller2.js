(function() {
    gdgModule.controller("UserController", function($scope, Users) {

        Users.query(function(data) {
            $scope.users = data;
        });

        $scope.deletar = function(userId) {
            Users.delete({'id': userId});

        }

    });
}());