angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AddCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})

.controller('ChartCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})
    
    .controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
