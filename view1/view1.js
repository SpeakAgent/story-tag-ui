'use strict';

angular.module('myApp.view1', ['ngRoute', 'slickCarousel'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.slickConfig = {
        draggable: true,
    }

    $scope.students = ["Cate W.", "Chris R.", "Ben G.", "Katie C.",
        "Ferni D.", "Luis P.", "Jorge P.", "Dan L.", "Micheal H.",
        "Lora L.", "Julie G.", "Stacy S.", "Stacy R."]
    $scope.words = ['adult', 'aeroplane', 'air', 'aircraft carrier', 'airforce', 'airport', 'album', 'alphabet', 'apple', 'arm', 'army', 'baby', 'baby', 'backpack', 'balloon', 'banana', 'bank', 'barbecue', 'bathroom', 'bathtub', 'bed', 'bed', 'bee', 'bible', 'bible', 'bird', 'bomb', 'book', 'boss', 'bottle', 'bowl', 'box', 'boy', 'brain', 'bridge', 'butterfly', 'button', 'cappuccino', 'car', 'car-race']
    $scope.sentences = ['Mary plays the piano.','Sixty-Four comes asking for bread.','Let me help you with your baggage.','The lake is a long way from here.','Abstraction is often one floor above you.','I hear that Nancy is very pretty.','She folded her handkerchief neatly.','There were white out conditions in the town; subsequently, the roads were impassable.','Is it free?','A glittering gem is not enough.']
}]);