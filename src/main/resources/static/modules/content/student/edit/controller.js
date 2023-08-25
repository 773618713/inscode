define(['app'],function(app){return {module: function($scope, $http, eventBusService, httpService, params, configService, cookieService) {
    $scope.form = {};
    $scope.form.fk_student = params.fk_student;
    $scope.moduleName = "应用管理";

    // 查询
    $scope.find = function() {
        httpService.post(app.urls.findStudent, $scope.form, function(data) {
            if(data.code == "0000") {
                $scope.form = data.data;
                $scope.form.fk_student = params.fk_student;
            }else{
                eventBusService.publish("modal.alert", {"content":data.msg});
            }
        });
    };
    if (params.fk_student != null){
        $scope.find();
    }

    // 保存
    $scope.save = function() {
        if(!$scope.formCheck()) {
            return;
        }
        let url = $scope.form.id == null? app.urls.addStudent: app.urls.updateStudent;
        httpService.post(url, $scope.form, function(data) {
            if(data.code == "0000") {
                console.log(data);
                eventBusService.publish("modal.page.close",{});
                eventBusService.publish("content.page.reload."+params.FatherControllerName, data.data);
            }else{
                eventBusService.publish("modal.alert", {"content":data.msg});
            }
        });
    };

}}});