// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'chart.js'])

.controller("ExampleController", function($scope) {
 
    $scope.labels = ["August", "September", "October", "November", "December", "January", "February"];
    $scope.series = ['Income', 'Expense'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
 
})


.controller("RegisterController", function ($scope, $http, $httpParamSerializerJQLike, $ionicPopup) {

    $scope.pageClass = 'register';
$scope.register = function(username, password, email) {
   console.log("inside login function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/expensetracker/collections/users?apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K',
    data: JSON.stringify({
                name: username,
                password: password,
                email: email
            }),
    contentType: "application/json"
}).success(function() {
    var alertPopup = $ionicPopup.alert({
                    title: 'Success',
                    template: username + 'registered successfully.'
                    });
    $scope.userName ="";
    $scope.password ="";
    $scope.email ="";
    
    //$scope.msg ="User created successfully";
        })
}
    
})


.controller("LoginController", function ($scope, $http, $httpParamSerializerJQLike, $ionicPopup) {

    //$scope.pageClass = 'login';
$scope.login = function(username, password) {
   console.log("inside login function");
	console.log(username+ " and " + password);
    $http.get('https://api.mongolab.com/api/1/databases/expensetracker/collections/users?q={"name":"'+username+'", "password":"'+password+'"}&apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K')
            .then(function successCallback(response) {
                
                //console.log(response);
				//var user=response.data;
				//var user=JSON.stringify(response);
				//var data=JSON.parse(user);
				
				//var user=response.data[0].name;
				//console.log(user);
				//var pass=response.data[0].password;
				if(response.data[0].name==username && response.data[0].password==password)
				{
				//alert('Login Successful! Welcome ' + username + '.');
				var alertPopup = $ionicPopup.alert({
                    title: 'Success',
                    template: 'Login Successful! Welcome ' + username + '.'
                    });
                    window.location = "/www/index.html#/tab/dash";
				}
				else
				{
				alert('Login failed');
				}
				//var data=JSON.parse(user)
				/*var input1 = document.getElementById('username').value;
                localStorage.setItem('username', input1);
                var input2 = document.getElementById('password').value;
                localStorage.setItem('password', input2);*/
                //window.location = "home.html";
            }, function errorCallback(response) {
                $scope.loginErr = "Login Error."
            }); 
    /*.success(function() {
    $scope.userName ="";
    $scope.password ="";
    $scope.email ="";
    
    $scope.msg ="User created successfully";
        })*/
}
    
})


.controller("IncomeController", function ($scope, $http, $httpParamSerializerJQLike, $ionicPopup) {

    $scope.pageClass = 'income';
$scope.income = function(name, amount, date) {
   console.log("inside login function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/expensetracker/collections/income?apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K',
    data: JSON.stringify({
                name: name,
                amount: amount,
                date: date
            }),
    contentType: "application/json"
}).success(function() {
    var alertPopup = $ionicPopup.alert({
                    title: 'Success',
                    template: 'Income ' + name + ' added successfully.'
                    });
    $scope.name ="";
    $scope.amount ="";
    $scope.date ="";
    
    //$scope.msg ="Income Added successfully";
        })
}
    
})


.controller('UpdateController', function ($scope, $http, $httpParamSerializerJQLike, $ionicPopup) {

    //$scope.pageClass = 'update';
    $scope.update = function(username, oldpass, newpass) {
  
    $http({
        method: 'PUT',
        url : 'https://api.mongolab.com/api/1/databases/expensetracker/collections/users?q={"name":"'+username+'","password":"'+oldpass+'"}&apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K',
        data: JSON.stringify( { "$set" : { "password" : newpass } } ),
        contentType: "application/json"
    }).success(function(data) {
        console.log(data);
        var alertPopup = $ionicPopup.alert({
                title: 'Update Done !',
                okText: 'Check Details'
        });
        alertPopup.then(function() {            
             
            //window.location.assign("");
        });
    })
    }    
})


.controller('DeleteController', function ($scope, $http, $httpParamSerializerJQLike, $ionicPopup) {


 $scope.delete = function(username, password) {
  
        $http({
            method: 'DELETE',
            url : 'https://api.mongolab.com/api/1/databases/expensetracker/collections/users?q={"name":"'+username+'","password":"'+password+'"}&apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K',
            contentType: "application/json"
        }).success(function(data) {
            console.log(data);
            //data.delete({"name":"username","password":"password"});
            var alertPopup = $ionicPopup.alert({
                title: 'User Deleted',
                okText: 'Check Details'
            });
            alertPopup.then(function() {            
                //window.location.assign("");
        });
    })
    }
})



    .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })


  .state('tab.login', {
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-login.html',
        controller: 'LoginCtrl'
      }
    }
  })
  
  
  .state('tab.register', {
    url: '/register',
    views: {
      'tab-register': {
        templateUrl: 'templates/tab-register.html',
        controller: 'RegisterCtrl'
      }
    }
  })
  
  
  .state('tab.update', {
    url: '/update',
    views: {
      'tab-update': {
        templateUrl: 'templates/tab-update.html',
        controller: 'UpdateCtrl'
      }
    }
  })
  
  
   .state('tab.delete', {
    url: '/delete',
    views: {
      'tab-delete': {
        templateUrl: 'templates/tab-delete.html',
        controller: 'DeleteCtrl'
      }
    }
  })
      
      .state('tab.add', {
    url: '/add',
    views: {
      'tab-add': {
        templateUrl: 'templates/tab-add.html',
        controller: 'AddCtrl'
      }
    }
  })

 .state('tab.charts', {
    url: '/charts',
    views: {
      'tab-charts': {
        templateUrl: 'templates/tab-charts.html',
        controller: 'ChartCtrl'
      }
    }
  })
      
.state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
    
    


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

