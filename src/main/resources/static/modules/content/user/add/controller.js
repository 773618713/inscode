define(['app', 'plugin/frame/3.2.1/js/validate-ext'],function(app){return {module: function($scope, $http, eventBusService, httpService, params, configService, cookieService) {
    $scope.form = {};
    $scope.menu_name = "添加用户";

    $scope.alert = function(){
        for (let i = 0; i < 2; i++) {
            eventBusService.publish("modal.alert", {"content":"请选择菜单。"+i, "isAutoClose": false});
        }
        //eventBusService.publish("modal.alert", {"content": "是否确认删除这数据？", "isAutoClose": false});
        eventBusService.publish("modal.alert", {"content":"确认进行一键投档？", "isAutoClose":false,
            "confirm":function(){
                eventBusService.publish("modal.alert", {"content":"请选择菜单。"});
            }
        });
    }

    /**
     * 设置Cookie
     */
    $scope.setCookie = function(){
        cookieService.set("name","zhangsan", 1/(24 * 60 * 10));
    }

    /**
     * 获取Cookie
     */
    $scope.getCookie = function(){
        console.log(cookieService.get("name"));
    }

    //保存
    $scope.save = function() {
        /*if(!$scope.formCheck()) {
            return;
        }*/

        let options = {
            url: "api/queryForList/findDelivery",
            error:function(data){
                alert("请求失败！");
                console.log(data);
            }
        }

        httpService.post(options, $scope.form, function(data) {
            if(data.code == "0000") {
                console.log(data);
                eventBusService.publish("modal.page.close",{});
                //eventBusService.publish("content.page.reload", data.data);
            }else{
                eventBusService.publish("modal.alert", {"content":data.msg});
            }
        });
    };


}}});
