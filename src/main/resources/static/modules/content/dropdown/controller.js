define(['app', "assets/js/dropdown/1.0.1/dropdown"],function(app){return {module: function($scope, $http, eventBusService, httpService, params, configService) {
    let menus = [
            {
                id:"001",
                name:"菜单001",
                url:"",
                icon: "edit",
                menus:[
                    {
                        id:"011",
                        name:"欢迎页1",
                        url:"modules/content/welcome",
                    },{
                        id:"021",
                        name:"用户管理",
                        url:"modules/content/user",
                    },{
                        id:"021",
                        name:"菜单021",
                        url:"url021",
                    },{
                        id:"021",
                        name:"菜单021",
                        url:"url021",
                        menus: [
                            {
                                id:"011",
                                name:"菜单011",
                                url:"url011"
                            },{
                                id:"021",
                                name:"菜单021",
                                url:"url021",
                            }
                        ]
                    }
                ]
            },
            {
                id:"002",
                name:"菜单002",
                url:"url002",
                icon: "export",
                menus:[
                    {
                        id:"011",
                        name:"菜单011",
                        url:"url011"
                    },{
                        id:"021",
                        name:"菜单021",
                        url:"url021",
                    },{
                        id:"021",
                        name:"菜单021",
                        url:"url021",
                    },{
                        id:"021",
                        name:"菜单021",
                        url:"url021",
                        menus: [
                            {
                                id:"011",
                                name:"菜单011",
                                url:"url011"
                            },{
                                id:"021",
                                name:"菜单021",
                                url:"url021",
                            }
                        ]
                    }
                ]
            }
        ]
    let dropDown = new DropDown();
    $scope.initDropDown = function () {
        console.log("初始化");
        dropDown.initDropDown({
            menuElement: $("#dropdown_1"),
            menus: menus,
            menuClick: function (data){
                console.log(data);
            }
        });
    }
    $scope.initDropDown();
    console.log($("#dropdown_1"));
}}});