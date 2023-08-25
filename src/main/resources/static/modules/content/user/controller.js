define(['app', 'myUtil'],function(app, myUtil){
    return {module: function($scope, $http, eventBusService, httpService, params, configService) {

        $scope.add = function(){
            let pStr = "";
            let fixParams = "?FatherControllerName="+$scope.controllerName+"&father_id="+params.father_id;
            let url = "modules/content/user/add";
            eventBusService.publish("modal.page",url + fixParams + pStr);
        }

        console.log(myUtil.sum(1,3));

        /*$http.post("getUserList", {id: "female/add/张三"}, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function (data) {
                return $.param(data);
            }
        }).then(function (response){
            console.log(response);
        });*/

        //查询数据
        $scope.find = function() {
            //getUserList
            httpService.postpage("api/queryForList/findDelivery", $scope.form, function(data) {
                /*let dataList = data;
                $scope.dataList = dataList;*/
                if("0000" === data.code){
                    let dataList = data.data;
                    $scope.dataList = dataList;
                }else{
                    //eventBusService.publish("modal.alert", {"content": data.msg});
                }
            });
        }
        $scope.find();


    }
}});