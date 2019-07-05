/*
===========================================================================================
Author: Kevin Lu
Date: May 26th, 2019
Purpose: Javascript code for the controller that's within the <body> section.
Modifications: - Added userTask as global variable to allow printing in another controller.
                - Using an array to store all of tasks. Since JavaScript's array are dynamically allocated.
                [Idea scrapped, reason: have no idea how to take elements in array and put into html format]

                - Cleaned up code, combined functions and preserved the crossed out task.
===========================================================================================
*/

var app = angular.module("reminderMe", []);

// This controller only affects the div section where user enters tasks
angular.module('reminderMe', [])
.controller('taskEntered', function($scope) 
{
    // Javascript's arrays are dynamic so we don't need to specifically input in a size.
    $scope.tasks = [];

    // Add Task Function by pushing task onto array.
    $scope.addButton = function() 
    {
        $scope.tasks.push($scope.inputTask);
    }

    // Delete task function by removing set task.
    $scope.delete = function() 
    {
        $scope.tasks.splice(this.$index, 1);
    }

    // Added cross out feature.
    var list = document.querySelector("ul");
    list.addEventListener("click", function(event)
    {
        if (event.target.tagName === "LI")
        {
            event.target.classList.toggle("checked");
        }
    }, false);
})

// For opening side menu
function openNav()
{
    document.getElementById("sideBar").style.width = "300px";
}

// For closing side menu
function closeNav()
{
    document.getElementById("sideBar").style.width = "0";
}