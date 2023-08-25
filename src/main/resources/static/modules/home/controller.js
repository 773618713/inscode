define(['app'],function(app){return {module: function($scope, $http, eventBusService, httpService, params, configService) {
    $scope.leftMenuHide = function (){
        if ($(".home-content").hasClass("hide-menu")){
            $(".home-content").removeClass("hide-menu");
        }else {
            $(".home-content").addClass("hide-menu");
        }
    }

    $scope.defaultModule = app.include("modules/content/welcome");
    //$scope.$apply();

    //接收模块变更
    eventBusService.subscribe('modules.content.load', function(event,data) {
        /*$scope.defaultModule = app.include(data.url);*/
        $("#home_default_module").attr("modules", data.url);
        //$scope.$apply();
    });


}}});