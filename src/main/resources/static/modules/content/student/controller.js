define(['app'],function(app){return {module: function($scope, $http, eventBusService, httpService, params, configService) {
    $scope.moduleName = "学生管理";

    //查询
    $scope.find = function() {
        httpService.postpage(app.urls.findStudentList, $scope.form, function(data) {
            if("0000" === data.code){
                $scope.dataList = data.data;
            }else{
                eventBusService.publish("modal.alert", {"content": data.msg});
            }
        });
    }
    $scope.find();

    $scope.select = function(){
        $scope.page.current = 1;
        $scope.find();
    }

    //添加
    $scope.add = function(){
        let pStr = "";
        let fixParams = "?FatherControllerName="+$scope.controllerName+"&father_id="+params.father_id;
        let url = "modules/content/student/edit";
        eventBusService.publish("modal.page",url + fixParams + pStr);
    }

    //编辑
    $scope.edit = function(){
        var values = [];
        $('#'+$scope.controllerName+' input[name="dataPk"]:checked').each(function(){
            values.push(JSON.parse($(this).val()));
        });
        if(values.length < 1){
            eventBusService.publish('modal.alert', {"title":"操作提示","content":"请选择数据。"});
            return;
        }
        if(values.length > 1){
            eventBusService.publish('modal.alert', {"title":"操作提示","content":"请选择一条数据。"});
            return;
        }
        let pStr = "&fk_student="+ values[0].id;
        let fixParams = "?FatherControllerName="+$scope.controllerName+"&father_id="+params.father_id;
        let url = "modules/content/student/edit";
        eventBusService.publish("modal.page",url + fixParams+pStr);
    }

    //删除
    $scope.del = function(){
        var values = [];
        $('#'+$scope.controllerName+' input[name="dataPk"]:checked').each(function(){
            values.push(JSON.parse($(this).val()));
        });
        if(values.length < 1){
            eventBusService.publish('modal.alert', {"title":"操作提示","content":"请选择数据。"});
            return;
        }
        if(values.length > 1){
            eventBusService.publish('modal.alert', {"title":"操作提示","content":"请选择一条数据。"});
            return;
        }
        eventBusService.publish("modal.alert",{"content":"你是否确认删除？","isAutoClose":false,"confirm":function(){
            httpService.post(app.urls.deleteStudent, {fk_student: values[0].id},function(data){
                if("0000" === data.code){
                    $scope.find();
                }else{
                    alert(data.msg);
                }
            });
        },"cancel":function(){
            //用户取消，不做操作
        }});
    }

    // 菜单按钮管理
    $scope.menuButton = function(){
        var values = [];
        $('#'+$scope.controllerName+' input[name="dataPk"]:checked').each(function(){
            values.push(JSON.parse($(this).val()));
        });
        if(values.length < 1){
            eventBusService.publish('modal.alert', {"title":"操作提示","content":"请选择数据。"});
            return;
        }
        if(values.length > 1){
            eventBusService.publish('modal.alert', {"title":"操作提示","content":"请选择一条数据。"});
            return;
        }
        eventBusService.publish("modules.content.load", {url:"modules/content/menu?fk_student="+values[0].id});
    }

    //接受数据刷新
    eventBusService.subscribe('content.page.reload.'+$scope.controllerName, function(event,data) {
        $scope.find();
    });
}}});