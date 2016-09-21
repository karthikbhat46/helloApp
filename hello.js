
angular.module('helloApp', []);

angular.module('helloApp')
.directive('hello', function(){
  return {
      restrict:'EA',
      templateUrl:'./table.html',
      scope:{
       emp :'=',
       callback:'&'
      },
    transclude:true,
    controller:'view2Ctrl',
    link:function($scope,elem,attr){
      $scope.callCallBackFun = function(){
        $scope.className = $scope.callback()($scope);
      };

    }
  }});
