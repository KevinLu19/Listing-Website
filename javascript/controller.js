var app = angular.module("reminderApp", []);

app.controller('ReminderController', function($scope)
{
    $scope.saved = localStorage.getItem('userText');
    $scope.userText = (localStorage.getItem('userText') !== null) ? $scope.saved : "";

    $scope.editText = function()
    {
        localStorage.setItem('userText', $scope.userText);
        alert($scope.userText);
    }
});

